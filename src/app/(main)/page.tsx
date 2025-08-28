/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroSection from '@/components/sections/HeroSection'
import FeaturedVideos from '@/components/sections/FeaturedVideos'
import FeaturedRecordings from '@/components/sections/FeaturedRecordings'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import UpcomingShows from '@/components/sections/UpcomingShows'
import { client } from '../../../sanity/lib/client'
import { 
  BIOGRAPHY_QUERY, 
  SITE_SETTINGS_QUERY,
  VIDEOS_QUERY,
  RECORDINGS_QUERY,
  TESTIMONIALS_QUERY,
  LINKS_QUERY,
  PERFORMANCES_QUERY
} from '../../../sanity/lib/queries'

// Sanity data interfaces
interface SanityVideo {
  isFeatured: boolean
  [key: string]: unknown
}

interface SanityRecording {
  isFeatured: boolean
  [key: string]: unknown
}

interface SanityTestimonial {
  isFeatured: boolean
  [key: string]: unknown
}

interface SanityLink {
  category: string
  [key: string]: unknown
}

interface SanityPerformance {
  date: string
  [key: string]: unknown
}

export default async function Home() {
  try {
    // Fetch all data in parallel for optimal performance
    const [
      biography,
      siteSettings,
      videos,
      recordings,
      testimonials,
      links,
      performances
    ] = await Promise.all([
      client.fetch(BIOGRAPHY_QUERY),
      client.fetch(SITE_SETTINGS_QUERY),
      client.fetch(VIDEOS_QUERY),
      client.fetch(RECORDINGS_QUERY),
      client.fetch(TESTIMONIALS_QUERY),
      client.fetch(LINKS_QUERY),
      client.fetch(PERFORMANCES_QUERY)
    ])

    return (
      <div className="min-h-screen">
        <HeroSection 
          biography={biography} 
          siteSettings={siteSettings} 
        />
        
        <FeaturedVideos 
          videos={(videos as SanityVideo[]).filter(video => video.isFeatured) as any} 
        />
        
        <FeaturedRecordings 
          recordings={(recordings as SanityRecording[]).filter(recording => recording.isFeatured) as any} 
        />
        
        <TestimonialsSection 
          testimonials={(testimonials as SanityTestimonial[]).filter(t => t.isFeatured) as any}
          mediaLinks={(links as SanityLink[]).filter(l => ['press', 'podcast'].includes(l.category)) as any}
        />
        
        <UpcomingShows 
          performances={(performances as SanityPerformance[])
            .filter(performance => new Date(performance.date) >= new Date())
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) as any
          }
        />
      </div>
    )
  } catch (error) {
    console.error('Error fetching page data:', error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p>Unable to load page content</p>
        </div>
      </div>
    )
  }
}

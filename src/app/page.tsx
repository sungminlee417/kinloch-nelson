import HeroSection from '@/components/sections/HeroSection'
import FeaturedVideos from '@/components/sections/FeaturedVideos'
import FeaturedRecordings from '@/components/sections/FeaturedRecordings'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import UpcomingShows from '@/components/sections/UpcomingShows'
import { client } from '../../sanity/lib/client'
import { 
  BIOGRAPHY_QUERY, 
  SITE_SETTINGS_QUERY,
  VIDEOS_QUERY,
  RECORDINGS_QUERY,
  TESTIMONIALS_QUERY,
  LINKS_QUERY,
  PERFORMANCES_QUERY
} from '../../sanity/lib/queries'

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
          videos={videos.filter((video: any) => video.isFeatured)} 
        />
        
        <FeaturedRecordings 
          recordings={recordings.filter((recording: any) => recording.isFeatured)} 
        />
        
        <TestimonialsSection 
          testimonials={testimonials.filter((t: any) => t.isFeatured)}
          mediaLinks={links.filter((l: any) => ['press', 'podcast'].includes(l.category))}
        />
        
        <UpcomingShows 
          performances={performances
            .filter((performance: any) => new Date(performance.date) >= new Date())
            .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
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

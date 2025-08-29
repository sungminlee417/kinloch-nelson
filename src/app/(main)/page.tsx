/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroSection from '@/components/sections/HeroSection'
import FeaturedVideos from '@/components/sections/FeaturedVideos'
import FeaturedRecordings from '@/components/sections/FeaturedRecordings'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import UpcomingShows from '@/components/sections/UpcomingShows'
import { client } from '../../../sanity/lib/client'
import { 
  HOMEPAGE_QUERY,
  SITE_SETTINGS_PAGE_QUERY
} from '../../../sanity/lib/queries'

// ISR: Revalidate every minute
export const revalidate = 60

export default async function Home() {
  try {
    // Fetch homepage and site settings data
    const [homepage, siteSettings] = await Promise.all([
      client.fetch(HOMEPAGE_QUERY),
      client.fetch(SITE_SETTINGS_PAGE_QUERY)
    ])


    if (!homepage) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p>Unable to load homepage content</p>
        </div>
      )
    }

    return (
      <div className="min-h-screen">
        <HeroSection 
          heroData={homepage.heroSection} 
          siteSettings={siteSettings} 
        />
        
        <FeaturedVideos 
          videos={homepage.featuredVideos || []} 
          youtubeChannelUrl={siteSettings?.socialLinks?.youtube}
        />
        
        <FeaturedRecordings 
          recordings={homepage.featuredRecordings || []} 
        />
        
        <TestimonialsSection 
          testimonials={homepage.testimonials || []}
          mediaFeatures={homepage.mediaFeatures || []}
        />
        
        <UpcomingShows 
          performances={homepage.upcomingShows?.filter((show: any) => new Date(show.date) >= new Date()) || []}
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

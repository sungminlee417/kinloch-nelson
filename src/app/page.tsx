import HeroSection from '@/components/sections/HeroSection'
import FeaturedVideos from '@/components/sections/FeaturedVideos'
import FeaturedRecordings from '@/components/sections/FeaturedRecordings'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import UpcomingShows from '@/components/sections/UpcomingShows'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedVideos />
      <FeaturedRecordings />
      <TestimonialsSection />
      <UpcomingShows />
    </div>
  )
}

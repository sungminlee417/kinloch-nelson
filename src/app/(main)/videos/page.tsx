import VideosPage from '@/components/sections/VideosPage'
import { client } from '../../../../sanity/lib/client'
import { VIDEOS_PAGE_QUERY } from '../../../../sanity/lib/queries'

// ISR: Revalidate every minute for frequently updated video content
export const revalidate = 60

export const metadata = {
  title: 'Videos | Kinloch Nelson',
  description: 'Complete collection of fingerstyle guitar performances, interviews, and educational content',
}

export default async function Videos() {
  try {
    const videosPageData = await client.fetch(VIDEOS_PAGE_QUERY)
    
    if (!videosPageData) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p>Unable to load videos page content</p>
        </div>
      )
    }

    return <VideosPage videosPageData={videosPageData} />
  } catch (error) {
    console.error('Error fetching videos page data:', error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p>Unable to load videos content</p>
        </div>
      </div>
    )
  }
}
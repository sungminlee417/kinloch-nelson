import { client } from '../../../../sanity/lib/client'
import { PRESS_DATA_QUERY } from '../../../../sanity/lib/queries'
import PressPageContent from '@/components/sections/PressPageContent'

// ISR: Revalidate every minute for frequently updated press content
export const revalidate = 60

export const metadata = {
  title: 'Press Kit | Kinloch Nelson',
  description: 'Professional press kit, media resources, and promotional materials for Kinloch Nelson',
}

export default async function Press() {
  try {
    const pressData = await client.fetch(PRESS_DATA_QUERY)
    
    if (!pressData) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600">Press data not available</p>
          </div>
        </div>
      )
    }

    return <PressPageContent pressData={pressData} />
  } catch (error) {
    console.error('Error fetching press data:', error)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Unable to load press content</p>
        </div>
      </div>
    )
  }
}
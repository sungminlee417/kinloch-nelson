import { client } from '../../../../sanity/lib/client'
import { PERFORMANCES_PAGE_QUERY } from '../../../../sanity/lib/queries'
import PerformancesPageContent from '@/components/sections/PerformancesPageContent'

export const revalidate = 60

export const metadata = {
  title: 'Performance Calendar | Kinloch Nelson',
  description: 'Upcoming performances and events featuring Kinloch Nelson, fingerstyle guitarist from Rochester, NY',
}

export default async function Performances() {
  try {
    const performancesData = await client.fetch(PERFORMANCES_PAGE_QUERY)
    
    if (!performancesData) {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">Performances content not available</p>
          </div>
        </div>
      )
    }

    return <PerformancesPageContent performancesData={performancesData} />
  } catch (error) {
    console.error('Error fetching performances data:', error)
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Unable to load performances</p>
        </div>
      </div>
    )
  }
}
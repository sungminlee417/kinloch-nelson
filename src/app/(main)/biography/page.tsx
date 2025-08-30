import { Metadata } from 'next'
import { client } from '../../../../sanity/lib/client'
import BiographyPageContent from '@/components/sections/BiographyPageContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Biography | Kinloch Nelson',
  description: 'The complete biography of fingerstyle guitarist Kinloch Nelson',
}

const BIOGRAPHY_QUERY = `*[_type == "biography"][0] {
  _id,
  name,
  tagline,
  location,
  "profileImage": profileImage.asset->url,
  shortBio,
  professionalOverview,
  careerStart,
  musicalStyle,
  fullBio,
  notableCollaborations,
  education[] {
    subject,
    instructor,
    institution
  },
  teachingExperience[] {
    role,
    institution,
    duration
  },
  genres,
  instruments,
  achievements[] {
    title,
    description,
    year
  },
  recordLabels,
  currentActivities {
    title,
    paragraph1,
    paragraph2
  }
}`

export default async function BiographyPage() {
  try {
    const biographyData = await client.fetch(BIOGRAPHY_QUERY)
    
    if (!biographyData) {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">Biography content not available</p>
          </div>
        </div>
      )
    }

    return <BiographyPageContent biographyData={biographyData} />
  } catch (error) {
    console.error('Error fetching biography data:', error)
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Unable to load biography</p>
        </div>
      </div>
    )
  }
}
import { Metadata } from 'next'
import { client } from '../../../../sanity/lib/client'
import RecordingsPageContent from '@/components/sections/RecordingsPageContent'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Recordings | Kinloch Nelson',
  description: 'Complete discography and recordings by fingerstyle guitarist Kinloch Nelson including MP3 samples and purchase options',
}

const RECORDINGS_PAGE_QUERY = `*[_type == "recordingsPage"][0] {
  _id,
  pageHeader {
    title,
    subtitle
  },
  albums[] {
    title,
    subtitle,
    releaseYear,
    description,
    "coverImage": coverImage.asset->url,
    tracks[] {
      trackNumber,
      title,
      duration,
      "mp3Sample": mp3Sample.asset->url
    },
    pricing {
      price,
      shipping,
      paypalButtonId,
      availableFormats
    },
    streamingLinks[] {
      platform,
      url
    },
    reviews[] {
      quote,
      source
    },
    type,
    isFeatured,
    order
  } | order(order asc),
  additionalInfo {
    showAdditionalInfo,
    section1 {
      title,
      content
    },
    section2 {
      title,
      content
    }
  },
  callToAction {
    showCallToAction,
    title,
    description,
    primaryButton {
      text,
      url
    },
    secondaryButton {
      text,
      url
    }
  }
}`

export default async function RecordingsPage() {
  try {
    const recordingsData = await client.fetch(RECORDINGS_PAGE_QUERY)
    
    if (!recordingsData) {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">Recordings content not available</p>
          </div>
        </div>
      )
    }

    return <RecordingsPageContent recordingsData={recordingsData} />
  } catch (error) {
    console.error('Error fetching recordings data:', error)
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Unable to load recordings</p>
        </div>
      </div>
    )
  }
}
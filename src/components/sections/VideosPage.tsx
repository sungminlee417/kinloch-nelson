'use client'

import { useEffect, useState } from 'react'
import { Play, ExternalLink, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { client } from '../../../sanity/lib/client'
import { VIDEOS_QUERY, SITE_SETTINGS_QUERY } from '../../../sanity/lib/queries'
import { VideoGridSkeleton } from '@/components/ui/loading'

interface Video {
  _id: string
  title: string
  youtubeUrl: string
  description: string
  category: string
  publishedAt: string
  isFeatured: boolean
  order: number
}

interface SiteSettings {
  _id: string
  socialLinks: {
    youtube: string
  }
}

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([])
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [categories, setCategories] = useState<string[]>(['All'])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [videosData, settingsData] = await Promise.all([
          client.fetch(VIDEOS_QUERY),
          client.fetch(SITE_SETTINGS_QUERY)
        ])
        
        setVideos(videosData)
        setFilteredVideos(videosData)
        setSiteSettings(settingsData)
        
        // Extract unique categories
        const uniqueCategories = Array.from(new Set(videosData.map((video: Video) => video.category))) as string[]
        setCategories(['All', ...uniqueCategories])
      } catch (error) {
        console.error('Error fetching videos data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filterVideos = (category: string) => {
    setSelectedCategory(category)
    if (category === 'All') {
      setFilteredVideos(videos)
    } else {
      setFilteredVideos(videos.filter(video => video.category === category))
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Play className="h-16 w-16 mx-auto mb-6 text-red-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Video Collection
              </h1>
              <p className="text-xl text-red-200 max-w-2xl mx-auto">
                Complete collection of performances, interviews, and educational content
              </p>
            </div>
          </div>
        </section>
        <VideoGridSkeleton count={9} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Play className="h-16 w-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Video Collection
            </h1>
            <p className="text-xl text-red-200 max-w-2xl mx-auto">
              Complete collection of performances, interviews, and educational content
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? 'default' : 'outline'}
                size="sm"
                className="mb-2"
                onClick={() => filterVideos(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div key={video._id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-red-900 to-pink-900 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white opacity-80" />
                  </div>
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  {/* Featured badge */}
                  {video.isFeatured && (
                    <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded">
                      Featured
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 flex-1 mr-2">
                      {video.title}
                    </h3>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 whitespace-nowrap">
                      {video.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  {video.publishedAt && (
                    <p className="text-xs text-gray-500 mb-4">
                      {new Date(video.publishedAt).toLocaleDateString()}
                    </p>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-red-50 group-hover:border-red-300"
                    onClick={() => window.open(video.youtubeUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Watch on YouTube
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No videos found
            </h3>
            <p className="text-gray-500">
              {selectedCategory === 'All' 
                ? 'No videos are available at the moment.'
                : `No videos found in the "${selectedCategory}" category.`
              }
            </p>
            {selectedCategory !== 'All' && (
              <Button variant="outline" className="mt-4" onClick={() => filterVideos('All')}>
                Show All Videos
              </Button>
            )}
          </div>
        )}

        {/* YouTube Channel Link */}
        {siteSettings?.socialLinks?.youtube && (
          <div className="text-center mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Play className="h-12 w-12 mx-auto mb-4 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Subscribe for More Videos
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                New performances, tutorials, and behind-the-scenes content are regularly added to the YouTube channel.
              </p>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <a 
                  href={siteSettings.socialLinks.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Visit YouTube Channel</span>
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
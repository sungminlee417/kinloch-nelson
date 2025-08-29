'use client'

import { useState, useMemo } from 'react'
import { Play, ExternalLink, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

// Helper function to extract YouTube video ID from URL
function getYouTubeVideoId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : ''
}

interface Video {
  _key: string
  title: string
  youtubeUrl: string
  description: string
  category: string
  publishedAt: string
  isFeatured: boolean
  order: number
}

interface VideosPageData {
  _id: string
  pageHeader: {
    title: string
    subtitle: string
  }
  videos: Video[]
  youtubeChannel: {
    channelUrl: string
    callToAction: string
    description: string
  }
}

interface VideosPageProps {
  videosPageData: VideosPageData
}

export default function VideosPage({ videosPageData }: VideosPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  
  const videos = useMemo(() => videosPageData.videos || [], [videosPageData.videos])
  const pageHeader = videosPageData.pageHeader || {
    title: 'Video Collection',
    subtitle: 'Complete collection of performances, interviews, and educational content'
  }
  
  // Extract unique categories from videos
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(videos.map(video => video.category).filter(Boolean)))
    return ['All', ...uniqueCategories]
  }, [videos])
  
  // Filter videos based on selected category
  const filteredVideos = useMemo(() => {
    if (selectedCategory === 'All') {
      return videos.sort((a, b) => (a.order || 0) - (b.order || 0))
    }
    return videos
      .filter(video => video.category === selectedCategory)
      .sort((a, b) => (a.order || 0) - (b.order || 0))
  }, [videos, selectedCategory])


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Play className="h-16 w-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {pageHeader.title}
            </h1>
            <p className="text-xl text-red-200 max-w-2xl mx-auto">
              {pageHeader.subtitle}
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
                onClick={() => setSelectedCategory(category)}
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
              <div key={video._key} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  {/* YouTube thumbnail */}
                  <Image
                    src={imageErrors.has(video._key) 
                      ? '/images/video-placeholder.svg' 
                      : `https://img.youtube.com/vi/${getYouTubeVideoId(video.youtubeUrl)}/hqdefault.jpg`
                    }
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                    className="object-cover"
                    onError={() => {
                      setImageErrors(prev => new Set(prev).add(video._key))
                    }}
                  />
                  {/* Play overlay */}
                  <div 
                    className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
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
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 bg-red-600 hover:bg-red-700"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-red-50 group-hover:border-red-300"
                      onClick={() => window.open(video.youtubeUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
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
              <Button variant="outline" className="mt-4" onClick={() => setSelectedCategory('All')}>
                Show All Videos
              </Button>
            )}
          </div>
        )}

        {/* YouTube Channel Link */}
        {videosPageData.youtubeChannel?.channelUrl && (
          <div className="text-center mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Play className="h-12 w-12 mx-auto mb-4 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {videosPageData.youtubeChannel.callToAction || 'Subscribe for More Videos'}
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {videosPageData.youtubeChannel.description || 'New performances, tutorials, and behind-the-scenes content are regularly added to the YouTube channel.'}
              </p>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <a 
                  href={videosPageData.youtubeChannel.channelUrl} 
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

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex-1 mr-4">
                  {selectedVideo.title}
                </h2>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
                >
                  ×
                </button>
              </div>
              
              <div className="aspect-video mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo.youtubeUrl)}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded"
                ></iframe>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  {selectedVideo.category}
                </span>
                {selectedVideo.isFeatured && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                    Featured
                  </span>
                )}
                {selectedVideo.publishedAt && (
                  <span className="text-sm text-gray-500">
                    {new Date(selectedVideo.publishedAt).toLocaleDateString()}
                  </span>
                )}
              </div>
              
              {selectedVideo.description && (
                <p className="text-gray-700 mb-4">
                  {selectedVideo.description}
                </p>
              )}
              
              <div className="flex gap-3">
                <Button
                  onClick={() => window.open(selectedVideo.youtubeUrl, '_blank')}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Watch on YouTube
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedVideo(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
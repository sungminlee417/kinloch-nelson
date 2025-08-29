'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

// Helper function to extract YouTube video ID from URL
function getYouTubeVideoId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : ''
}

interface Video {
  _id: string
  title: string
  youtubeUrl: string
  description: string
  category: string
  isFeatured: boolean
}

interface FeaturedVideosProps {
  videos: Video[]
  youtubeChannelUrl?: string
}

export default function FeaturedVideos({ videos, youtubeChannelUrl }: FeaturedVideosProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  
  if (!videos || videos.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Performances
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Watch live performances and studio recordings showcasing the artistry of fingerstyle guitar
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video._id || `video-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                {/* YouTube thumbnail */}
                <Image
                  src={imageErrors.has(video._id || `video-${index}`) 
                    ? '/images/video-placeholder.svg' 
                    : `https://img.youtube.com/vi/${getYouTubeVideoId(video.youtubeUrl)}/hqdefault.jpg`
                  }
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                  className="object-cover"
                  onError={() => {
                    const videoKey = video._id || `video-${index}`;
                    setImageErrors(prev => new Set(prev).add(videoKey));
                  }}
                />
                {/* Play overlay */}
                <div 
                  className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="bg-white rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="h-8 w-8 text-gray-900" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {video.description}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-amber-600 hover:bg-amber-700"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Watch Now
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(video.youtubeUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Videos Button */}
        {youtubeChannelUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
              <a 
                href={youtubeChannelUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Visit YouTube Channel
              </a>
            </Button>
          </motion.div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex-1 mr-4">
                  {selectedVideo.title}
                </h2>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold cursor-pointer"
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
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                  {selectedVideo.category}
                </span>
                {selectedVideo.isFeatured && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                    Featured
                  </span>
                )}
              </div>
              
              {selectedVideo.description && (
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {selectedVideo.description}
                </p>
              )}
              
              <div className="flex gap-3">
                <Button
                  onClick={() => window.open(selectedVideo.youtubeUrl, '_blank')}
                  className="bg-amber-600 hover:bg-amber-700"
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
    </section>
  )
}
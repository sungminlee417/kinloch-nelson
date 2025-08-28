'use client'

import { motion } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Sample video data based on the original site
const featuredVideos = [
  {
    id: '1',
    title: 'A Rose in Spanish Harlem',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: '/api/placeholder/400/300',
    description: 'A beautiful fingerstyle arrangement of this classic tune'
  },
  {
    id: '2',
    title: 'Song of India',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: '/api/placeholder/400/300',
    description: 'Eastern melodies meet western guitar techniques'
  },
  {
    id: '3',
    title: 'Banjectomy',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: '/api/placeholder/400/300',
    description: 'A unique blend of banjo and guitar styles'
  },
  {
    id: '4',
    title: 'Song For My Father',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: '/api/placeholder/400/300',
    description: 'Jazz standard arranged for solo guitar'
  },
  {
    id: '5',
    title: 'Solitudes',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: '/api/placeholder/400/300',
    description: 'Original composition showcasing fingerstyle technique'
  },
  {
    id: '6',
    title: 'Once I Had A Secret Love',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: '/api/placeholder/400/300',
    description: 'Romantic ballad with intricate harmonies'
  }
]

export default function FeaturedVideos() {

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Featured Performances
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Watch live performances and studio recordings showcasing the artistry of fingerstyle guitar
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <Play className="h-12 w-12 text-amber-600" />
                </div>
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="h-8 w-8 text-gray-900" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {video.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(video.youtubeUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Watch on YouTube
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Videos Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
            <a 
              href="https://www.youtube.com/@kinlochnelson" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Visit YouTube Channel
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
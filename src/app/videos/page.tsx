'use client'

import { Play, ExternalLink, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'

// All video titles from the original website
const videos = [
  {
    id: '1',
    title: 'A Rose in Spanish Harlem',
    youtubeUrl: 'https://www.youtube.com/watch?v=example1',
    description: 'A beautiful fingerstyle arrangement of this classic tune',
    category: 'Cover',
    duration: '4:23'
  },
  {
    id: '2',
    title: 'Song of India',
    youtubeUrl: 'https://www.youtube.com/watch?v=example2',
    description: 'Eastern melodies meet western guitar techniques',
    category: 'Cover',
    duration: '5:12'
  },
  {
    id: '3',
    title: 'Banjectomy',
    youtubeUrl: 'https://www.youtube.com/watch?v=example3',
    description: 'A unique blend of banjo and guitar styles',
    category: 'Original',
    duration: '3:45'
  },
  {
    id: '4',
    title: 'Song For My Father',
    youtubeUrl: 'https://www.youtube.com/watch?v=example4',
    description: 'Jazz standard arranged for solo guitar',
    category: 'Jazz',
    duration: '6:18'
  },
  {
    id: '5',
    title: 'Solitudes',
    youtubeUrl: 'https://www.youtube.com/watch?v=example5',
    description: 'Original composition showcasing fingerstyle technique',
    category: 'Original',
    duration: '4:56'
  },
  {
    id: '6',
    title: 'Once I Had A Secret Love',
    youtubeUrl: 'https://www.youtube.com/watch?v=example6',
    description: 'Romantic ballad with intricate harmonies',
    category: 'Cover',
    duration: '5:34'
  },
  {
    id: '7',
    title: 'Sukiyaki',
    youtubeUrl: 'https://www.youtube.com/watch?v=example7',
    description: 'Japanese classic reimagined for fingerstyle guitar',
    category: 'Cover',
    duration: '4:12'
  },
  {
    id: '8',
    title: 'Acoustic Guitar Magazine Session',
    youtubeUrl: 'https://www.youtube.com/watch?v=example8',
    description: 'Featured performance and interview',
    category: 'Interview',
    duration: '12:45'
  }
]

const categories = ['All', 'Cover', 'Original', 'Jazz', 'Interview']

export default function VideosPage() {
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
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
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
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 ml-2 whitespace-nowrap">
                    {video.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>
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

        {/* YouTube Channel Link */}
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
                href="https://www.youtube.com/@kinlochnelson" 
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
      </div>
    </div>
  )
}
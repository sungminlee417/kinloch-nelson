'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Music, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Track {
  title: string
  duration: string
}

interface Recording {
  _id: string
  title: string
  releaseDate: string
  description: string
  tracks: Track[]
  spotifyLink: string
  appleMusicLink: string
  bandcampLink: string
  isFeatured: boolean
}

interface FeaturedRecordingsProps {
  recordings: Recording[]
}

export default function FeaturedRecordings({ recordings }: FeaturedRecordingsProps) {
  if (!recordings || recordings.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Recordings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Studio recordings capturing the evolution of fingerstyle guitar artistry
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {recordings.map((recording) => (
            <div key={recording._id} className="space-y-8">
              {/* Album Cover and Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Album Cover */}
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-800 dark:to-orange-800 rounded-lg shadow-md flex items-center justify-center">
                      <Music className="h-16 w-16 text-amber-600 dark:text-amber-400" />
                    </div>
                  </div>

                  {/* Album Details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {recording.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(recording.releaseDate).getFullYear()}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{recording.description}</p>
                    </div>

                    {/* Streaming Links */}
                    <div className="flex flex-wrap gap-2">
                      {recording.spotifyLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(recording.spotifyLink, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Spotify
                        </Button>
                      )}
                      {recording.appleMusicLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(recording.appleMusicLink, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Apple Music
                        </Button>
                      )}
                      {recording.bandcampLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(recording.bandcampLink, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Bandcamp
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Track List */}
              {recording.tracks && recording.tracks.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Track Listing</h4>
                  <div className="space-y-3">
                    {recording.tracks.map((track, trackIndex) => (
                      <div
                        key={trackIndex}
                        className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-500 dark:text-gray-400 w-6">
                            {trackIndex + 1}.
                          </span>
                          <span className="text-gray-900 dark:text-white">{track.title}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{track.duration}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* All Recordings Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline">
            <a href="/recordings">
              View All Recordings
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
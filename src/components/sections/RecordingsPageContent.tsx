'use client'

import { motion } from 'framer-motion'
import { Music, Calendar, ExternalLink, Play, Pause, ShoppingCart, Download, Quote, Disc3, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useRef } from 'react'
import Image from 'next/image'

interface Track {
  trackNumber: number
  title: string
  duration: string
  mp3Sample?: string
}

interface Pricing {
  price: number
  shipping: number
  paypalButtonId?: string
  availableFormats: string[]
}

interface StreamingLink {
  platform: string
  url: string
}

interface Review {
  quote: string
  source: string
}

interface Album {
  title: string
  subtitle?: string
  releaseYear: string
  description: string
  coverImage?: string
  tracks: Track[]
  pricing: Pricing
  streamingLinks: StreamingLink[]
  reviews: Review[]
  type: string
  isFeatured: boolean
  order: number
}

interface AdditionalInfo {
  showAdditionalInfo: boolean
  section1: {
    title: string
    content: string
  }
  section2: {
    title: string
    content: string
  }
}

interface CallToAction {
  showCallToAction: boolean
  title: string
  description: string
  primaryButton: {
    text: string
    url: string
  }
  secondaryButton: {
    text: string
    url: string
  }
}

interface RecordingsData {
  _id: string
  pageHeader: {
    title: string
    subtitle: string
  }
  albums: Album[]
  additionalInfo?: AdditionalInfo
  callToAction?: CallToAction
}

interface RecordingsPageContentProps {
  recordingsData: RecordingsData
}

export default function RecordingsPageContent({ recordingsData }: RecordingsPageContentProps) {
  const { pageHeader, albums = [], additionalInfo, callToAction } = recordingsData
  const [playingTrack, setPlayingTrack] = useState<string | null>(null)
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({})

  const handlePlaySample = (trackId: string, mp3Url: string) => {
    if (playingTrack === trackId) {
      // Pause current track
      audioRefs.current[trackId]?.pause()
      setPlayingTrack(null)
    } else {
      // Stop any currently playing track
      if (playingTrack && audioRefs.current[playingTrack]) {
        audioRefs.current[playingTrack].pause()
      }
      
      // Play new track
      if (!audioRefs.current[trackId]) {
        audioRefs.current[trackId] = new Audio(mp3Url)
        audioRefs.current[trackId].addEventListener('ended', () => {
          setPlayingTrack(null)
        })
      }
      
      audioRefs.current[trackId].play()
      setPlayingTrack(trackId)
    }
  }

  const getPlatformIcon = (platform: string) => {
    const platformLower = platform.toLowerCase()
    if (platformLower.includes('spotify')) return '♫'
    if (platformLower.includes('apple')) return '🍎'
    if (platformLower.includes('bandcamp')) return '🎵'
    if (platformLower.includes('tompkins')) return '🏢'
    return '🎶'
  }

  const getPlatformColor = (platform: string) => {
    const platformLower = platform.toLowerCase()
    if (platformLower.includes('spotify')) return 'bg-green-600 hover:bg-green-700 text-white'
    if (platformLower.includes('apple')) return 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-200 dark:hover:bg-gray-300 text-white dark:text-gray-900'
    if (platformLower.includes('bandcamp')) return 'bg-blue-600 hover:bg-blue-700 text-white'
    return 'bg-amber-600 hover:bg-amber-700 text-white'
  }

  const PayPalButton = ({ album }: { album: Album }) => {
    if (!album.pricing.paypalButtonId) return null

    return (
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value={album.pricing.paypalButtonId} />
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Buy CD - ${album.pricing.price.toFixed(2)} (+${album.pricing.shipping.toFixed(2)} shipping)
        </Button>
      </form>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-800 dark:to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Disc3 className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {pageHeader?.title || 'Recordings'}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl opacity-90 max-w-3xl mx-auto"
            >
              {pageHeader?.subtitle || 'Studio albums and recordings spanning decades of musical artistry'}
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Albums */}
        {albums.map((album, albumIndex) => (
          <motion.div
            key={`album-${albumIndex}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: albumIndex * 0.1 }}
            className="mb-16"
          >
            <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
              album.isFeatured ? 'ring-2 ring-amber-400' : ''
            }`}>
              <div className="lg:flex">
                {/* Album Cover */}
                <div className="lg:w-1/3">
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center p-8 relative">
                    {album.coverImage ? (
                      <Image 
                        src={album.coverImage} 
                        alt={`${album.title} cover`}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <Music className="h-24 w-24 text-amber-600 dark:text-amber-400" />
                    )}
                  </div>
                </div>

                {/* Album Info */}
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-center flex-wrap gap-2 mb-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      <span className="text-amber-600 dark:text-amber-400 font-medium">{album.releaseYear}</span>
                    </div>
                    {album.isFeatured && (
                      <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs font-medium px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium px-2 py-1 rounded-full">
                      {album.type}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {album.title}
                  </h2>
                  
                  {album.subtitle && (
                    <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                      {album.subtitle}
                    </h3>
                  )}
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {album.description}
                  </p>

                  {/* Reviews */}
                  {album.reviews && album.reviews.length > 0 && (
                    <div className="mb-6 space-y-3">
                      {album.reviews.map((review, index) => (
                        <div key={index} className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <Quote className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-gray-700 dark:text-gray-300 italic mb-1">
                                &ldquo;{review.quote}&rdquo;
                              </p>
                              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">
                                — {review.source}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Purchase & Streaming */}
                  <div className="space-y-4">
                    {/* Purchase Options */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Purchase</h4>
                      <div className="flex flex-wrap gap-3">
                        <PayPalButton album={album} />
                        {album.pricing.availableFormats && album.pricing.availableFormats.includes('digital') && (
                          <Button variant="outline" className="border-amber-300 dark:border-amber-600 text-amber-700 dark:text-amber-300">
                            <Download className="h-4 w-4 mr-2" />
                            Digital Download
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Streaming Links */}
                    {album.streamingLinks && album.streamingLinks.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Stream & Listen</h4>
                        <div className="flex flex-wrap gap-3">
                          {album.streamingLinks.map((link, index) => (
                            <Button
                              key={index}
                              className={getPlatformColor(link.platform)}
                              asChild
                            >
                              <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <span className="mr-2">{getPlatformIcon(link.platform)}</span>
                                {link.platform}
                                <ExternalLink className="h-3 w-3 ml-2" />
                              </a>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Track Listing */}
            {album.tracks && album.tracks.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-6 p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Track Listing</h3>
                <div className="grid grid-cols-1 gap-3">
                  {album.tracks.sort((a, b) => a.trackNumber - b.trackNumber).map((track) => {
                    const trackId = `${album.title}-${track.trackNumber}`
                    return (
                      <div
                        key={trackId}
                        className="flex items-center justify-between py-4 px-5 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors group"
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="flex items-center justify-center w-8 h-8 bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400 rounded-full text-sm font-medium flex-shrink-0">
                            {track.trackNumber}
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors font-medium">
                              {track.title}
                            </span>
                            {track.duration && (
                              <span className="text-gray-500 dark:text-gray-400 text-sm ml-3">{track.duration}</span>
                            )}
                          </div>
                        </div>
                        
                        {/* MP3 Sample Play Button */}
                        {track.mp3Sample && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handlePlaySample(trackId, track.mp3Sample!)}
                            className="ml-4 border-amber-300 dark:border-amber-600 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                          >
                            {playingTrack === trackId ? (
                              <>
                                <Pause className="h-3 w-3 mr-1" />
                                Playing
                              </>
                            ) : (
                              <>
                                <Volume2 className="h-3 w-3 mr-1" />
                                Sample
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </motion.div>
        ))}

        {/* Additional Info */}
        {additionalInfo?.showAdditionalInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About the Recordings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {additionalInfo.section1?.title || 'Musical Journey'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {additionalInfo.section1?.content || 'These recordings showcase the evolution of Kinloch Nelson\'s fingerstyle technique, spanning decades of musical development. From early archival recordings to contemporary releases, each album represents a chapter in an ongoing musical journey.'}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {additionalInfo.section2?.title || 'Purchase Information'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {additionalInfo.section2?.content || 'CDs are available for $15.00 plus $3.50 shipping via PayPal. All recordings feature high-quality mastering optimized for both critical listening and casual enjoyment. Digital downloads may be available for select releases.'}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        {callToAction?.showCallToAction && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-800 dark:to-orange-800 text-white rounded-lg p-8">
              <Play className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                {callToAction.title || 'Experience the Music'}
              </h2>
              <p className="opacity-90 mb-6 max-w-2xl mx-auto">
                {callToAction.description || 'Listen to sample tracks, stream on your preferred platform, or order physical CDs to experience the full depth and warmth of these fingerstyle guitar recordings.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                  <a href={callToAction.primaryButton?.url || '#albums'}>
                    <Music className="h-5 w-5 mr-2" />
                    {callToAction.primaryButton?.text || 'Browse Albums'}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-600">
                  <a href={callToAction.secondaryButton?.url || '/contact'}>
                    <ExternalLink className="h-5 w-5 mr-2" />
                    {callToAction.secondaryButton?.text || 'Contact for Inquiries'}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
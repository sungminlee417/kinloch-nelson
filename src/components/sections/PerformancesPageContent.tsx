'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, ExternalLink, Mail, Music, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Performance {
  title: string
  date: string
  venue: string
  location: string
  description: string
  ticketLink: string
  isFeatured: boolean
}

interface PerformancesData {
  _id: string
  pageHeader: {
    title: string
    subtitle: string
  }
  performances: Performance[]
  bookingInfo: {
    showBookingSection: boolean
    bookingText: string
    bookingEmail: string
  }
}

interface PerformancesPageContentProps {
  performancesData: PerformancesData
}

export default function PerformancesPageContent({ performancesData }: PerformancesPageContentProps) {
  const { pageHeader, performances = [], bookingInfo } = performancesData

  // Filter performances - separate upcoming from past
  const now = new Date()
  const upcomingPerformances = performances.filter(perf => new Date(perf.date) >= now)
  const pastPerformances = performances.filter(perf => new Date(perf.date) < now)

  const PerformanceCard = ({ performance, isPast = false }: { performance: Performance; isPast?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${
        performance.isFeatured ? 'border-l-4 border-amber-400' : 'border border-gray-200 dark:border-gray-700'
      } bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
        isPast ? 'opacity-75' : ''
      }`}
    >
      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            {/* Date & Featured Badge */}
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold text-gray-900 dark:text-white">
                  {new Date(performance.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              {performance.isFeatured && (
                <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs font-medium px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
              {isPast && (
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium px-2 py-1 rounded-full">
                  Past Event
                </span>
              )}
            </div>

            {/* Event Title */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {performance.title}
            </h3>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <span>
                  {new Date(performance.date).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <span>{performance.venue}, {performance.location}</span>
              </div>
            </div>

            {/* Description */}
            {performance.description && (
              <p className="text-gray-600 dark:text-gray-400 mb-4 lg:mb-0">
                {performance.description}
              </p>
            )}
          </div>

          {/* Action Button */}
          <div className="lg:ml-6 mt-4 lg:mt-0 flex-shrink-0">
            {performance.ticketLink && !isPast && (
              <Button
                className="w-full lg:w-auto bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                onClick={() => {
                  if (performance.ticketLink.startsWith('mailto:')) {
                    window.location.href = performance.ticketLink
                  } else {
                    window.open(performance.ticketLink, '_blank')
                  }
                }}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                {performance.ticketLink.startsWith('mailto:') ? 'RSVP' : 'Get Tickets'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-800 dark:to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Calendar className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {pageHeader?.title || 'Performance Calendar'}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl opacity-90 max-w-3xl mx-auto"
            >
              {pageHeader?.subtitle || 'Join me for upcoming performances in Rochester, NY and surrounding areas'}
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Upcoming Performances */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
          >
            <Music className="h-8 w-8 mr-3 text-amber-600 dark:text-amber-400" />
            Upcoming Performances
          </motion.h2>

          {upcomingPerformances.length > 0 ? (
            <div className="space-y-6">
              {upcomingPerformances.map((performance, index) => (
                <PerformanceCard 
                  key={`upcoming-${index}`} 
                  performance={performance} 
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <Calendar className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No upcoming shows scheduled
              </h3>
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                Check back soon for new performance dates, or contact me for booking inquiries.
              </p>
              {bookingInfo?.bookingEmail && (
                <Button variant="outline" asChild>
                  <a href={`mailto:${bookingInfo.bookingEmail}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Contact for Booking
                  </a>
                </Button>
              )}
            </motion.div>
          )}
        </section>

        {/* Past Performances */}
        {pastPerformances.length > 0 && (
          <section className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <Users className="h-8 w-8 mr-3 text-gray-600 dark:text-gray-400" />
              Past Performances
            </motion.h2>

            <div className="space-y-6">
              {pastPerformances.slice(0, 6).map((performance, index) => (
                <PerformanceCard 
                  key={`past-${index}`} 
                  performance={performance} 
                  isPast={true}
                />
              ))}
            </div>

            {pastPerformances.length > 6 && (
              <div className="text-center mt-8">
                <p className="text-gray-500 dark:text-gray-500">
                  Showing recent performances. Contact for complete performance history.
                </p>
              </div>
            )}
          </section>
        )}

        {/* Booking Information */}
        {bookingInfo?.showBookingSection && (
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white rounded-lg p-8 text-center"
            >
              <Mail className="h-12 w-12 mx-auto mb-4 text-amber-400" />
              <h2 className="text-3xl font-bold mb-4">Book a Performance</h2>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                {bookingInfo.bookingText || 'Available for private events, concerts, and festivals. Contact for booking inquiries.'}
              </p>
              {bookingInfo.bookingEmail && (
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700"
                  asChild
                >
                  <a href={`mailto:${bookingInfo.bookingEmail}`}>
                    <Mail className="h-5 w-5 mr-2" />
                    Contact for Booking
                  </a>
                </Button>
              )}
            </motion.div>
          </section>
        )}
      </div>
    </div>
  )
}
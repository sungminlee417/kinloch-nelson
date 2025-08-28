'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Sample performance data
const upcomingShows = [
  {
    id: '1',
    title: 'Evening of Fingerstyle Guitar',
    date: '2024-09-15',
    time: '7:30 PM',
    venue: 'The Little Theatre',
    location: 'Rochester, NY',
    description: 'An intimate evening featuring original compositions and innovative arrangements.',
    ticketLink: 'https://tickets.example.com/kinloch-nelson-sept-15',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Jazz & Blues Showcase',
    date: '2024-09-28',
    time: '8:00 PM',
    venue: 'Montage Music Hall',
    location: 'Rochester, NY',
    description: 'Classic jazz standards and blues interpreted through fingerstyle technique.',
    ticketLink: 'https://tickets.example.com/kinloch-nelson-sept-28',
    isFeatured: false
  },
  {
    id: '3',
    title: 'House Concert Series',
    date: '2024-10-12',
    time: '6:00 PM',
    venue: 'Private Residence',
    location: 'Rochester, NY',
    description: 'Intimate house concert with storytelling and musical exploration. RSVP required.',
    ticketLink: 'mailto:contact@kinlochnelson.com?subject=House Concert RSVP',
    isFeatured: false
  }
]

export default function UpcomingShows() {
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
            Performance Calendar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join me for upcoming performances in Rochester, NY and surrounding areas
          </motion.p>
        </div>

        <div className="space-y-6">
          {upcomingShows.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-lg border-l-4 overflow-hidden ${
                show.isFeatured ? 'border-amber-400' : 'border-gray-300'
              }`}
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-5 w-5 text-amber-600" />
                      <span className="text-lg font-semibold text-gray-900">
                        {new Date(show.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      {show.isFeatured && (
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {show.title}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-amber-600" />
                        <span>{show.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-amber-600" />
                        <span>{show.venue}, {show.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 lg:mb-0">
                      {show.description}
                    </p>
                  </div>

                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <Button
                      className="w-full lg:w-auto bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                      onClick={() => {
                        if (show.ticketLink.startsWith('mailto:')) {
                          window.location.href = show.ticketLink
                        } else {
                          window.open(show.ticketLink, '_blank')
                        }
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {show.ticketLink.startsWith('mailto:') ? 'RSVP' : 'Get Tickets'}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Shows Message */}
        {upcomingShows.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12 bg-gray-50 rounded-lg"
          >
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No upcoming shows scheduled
            </h3>
            <p className="text-gray-500 mb-4">
              Check back soon for new performance dates, or contact me for booking inquiries.
            </p>
            <Button variant="outline" asChild>
              <a href="/contact">Contact for Booking</a>
            </Button>
          </motion.div>
        )}

        {/* View All Shows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="/performances">
              View Full Performance Calendar
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
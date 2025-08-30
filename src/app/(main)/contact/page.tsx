'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, Music, Calendar, Users, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { client } from '../../../../sanity/lib/client'

const CONTACT_QUERY = `*[_type == "contactPage"][0] {
  _id,
  pageHeader {
    title,
    subtitle
  },
  contactInfo {
    phone,
    email,
    address,
    responseTime,
    location
  },
  services[] {
    title,
    description,
    icon
  },
  socialLinks[] {
    platform,
    url
  }
}`

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactData, setContactData] = useState<{
    pageHeader?: {title?: string, subtitle?: string};
    contactInfo?: {phone?: string, email?: string, address?: string, responseTime?: string, location?: string}
  } | null>(null)

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const data = await client.fetch(CONTACT_QUERY)
        setContactData(data)
      } catch (error) {
        console.error('Error fetching contact data:', error)
        // Set fallback data with authentic info
        setContactData({
          pageHeader: {
            title: 'Contact & Booking',
            subtitle: 'Get in touch for performance bookings, lessons, or general inquiries'
          },
          contactInfo: {
            phone: '585-385-3103',
            email: 'kinloch@rochester.rr.com',
            address: 'PO Box 93331\nRochester, New York 14692',
            responseTime: 'Usually within 24-48 hours',
            location: 'Rochester, New York'
          }
        })
      }
    }
    fetchContactData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    })
    
    setIsSubmitting(false)
    alert('Thank you for your message! I&apos;ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="h-16 w-16 mx-auto mb-6 text-amber-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {contactData?.pageHeader?.title || 'Contact & Booking'}
            </h1>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              {contactData?.pageHeader?.subtitle || 'Get in touch for performance bookings, lessons, or general inquiries'}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="booking">Performance Booking</option>
                    <option value="lessons">Lessons & Workshops</option>
                    <option value="press">Press & Media</option>
                    <option value="collaboration">Collaboration</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Studio Phone</h3>
                    <a 
                      href={`tel:${contactData?.contactInfo?.phone || '585-385-3103'}`}
                      className="text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      {contactData?.contactInfo?.phone || '585-385-3103'}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <a 
                      href={`mailto:${contactData?.contactInfo?.email || 'kinloch@rochester.rr.com'}`}
                      className="text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      {contactData?.contactInfo?.email || 'kinloch@rochester.rr.com'}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Mailing Address</h3>
                    <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                      {contactData?.contactInfo?.address || 'PO Box 93331\nRochester, New York 14692'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Services Available</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Music className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Live Performances</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Solo concerts, festivals, private events</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Workshops & Lessons</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Private instruction, group workshops, masterclasses</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Recording Sessions</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Studio recordings, collaborations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Follow Along</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.youtube.com/@kinlochnelson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>YouTube</span>
                </a>
                
                <a
                  href="https://open.spotify.com/artist/kinlochnelson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Spotify</span>
                </a>
                
                <a
                  href="https://kinlochnelson.bandcamp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Bandcamp</span>
                </a>
                
                <a
                  href="https://music.apple.com/artist/kinloch-nelson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Apple Music</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
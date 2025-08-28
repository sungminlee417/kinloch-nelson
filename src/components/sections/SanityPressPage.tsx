'use client'

import { useEffect, useState } from 'react'
import { FileText, Download, Quote, Music, ExternalLink, Image } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { client } from '../../../sanity/lib/client'
import { PRESS_DATA_QUERY } from '../../../sanity/lib/queries'

interface Biography {
  _id: string
  name: string
  tagline: string
  location: string
  shortBio: string
  fullBio: string[]
  genres: string[]
  instruments: string[]
  achievements: string[]
}

interface Testimonial {
  _id: string
  quote: string
  author: string
  publication: string
  order: number
}

interface Link {
  _id: string
  title: string
  url: string
  description: string
  category: string
  order: number
}

interface PressData {
  biography: Biography
  testimonials: Testimonial[]
  links: Link[]
}

export default function SanityPressPage() {
  const [pressData, setPressData] = useState<PressData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPressData = async () => {
      try {
        const data = await client.fetch(PRESS_DATA_QUERY)
        setPressData(data)
      } catch (error) {
        console.error('Error fetching press data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPressData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
        </div>
      </div>
    )
  }

  if (!pressData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Press data not available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-6 text-gray-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Press Kit
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional media resources, photos, and promotional materials for {pressData.biography.name}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Artist Bio */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Artist Biography</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Short Bio</h3>
                <p className="text-gray-600 mb-6 p-4 bg-gray-50 rounded-lg">
                  {pressData.biography.shortBio}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Full Biography</h3>
                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  {pressData.biography.fullBio.map((paragraph, index) => (
                    <p key={index} className="text-gray-600">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Information</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Artist:</h4>
                    <p>{pressData.biography.name}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Genre:</h4>
                    <p>{pressData.biography.genres.join(', ')}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Location:</h4>
                    <p>{pressData.biography.location}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Instruments:</h4>
                    <p>{pressData.biography.instruments.join(', ')}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Performance Type:</h4>
                    <p>Solo Acoustic Guitar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Quotes */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Press Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pressData.testimonials.map((testimonial) => (
                <div key={testimonial._id} className="relative bg-gray-50 rounded-lg p-6">
                  <Quote className="h-8 w-8 text-amber-400 opacity-50 mb-4" />
                  <blockquote className="text-gray-700 italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-l-4 border-amber-400 pl-4">
                    <cite className="not-italic">
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-amber-600">{testimonial.publication}</div>
                    </cite>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Features */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Media Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pressData.links.map((link) => (
                <div key={link._id} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{link.title}</h3>
                  <span className="inline-block px-3 py-1 text-sm bg-amber-100 text-amber-800 rounded-full mb-3">
                    Press Feature
                  </span>
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Feature
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        {pressData.biography.achievements && pressData.biography.achievements.length > 0 && (
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Achievements & Recognition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pressData.biography.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Photos & Media Assets */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Photos & Media Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-semibold text-gray-900 mb-2">High-Resolution Photos</h3>
                <p className="text-gray-600 text-sm mb-4">Professional photos suitable for print and digital media</p>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download ZIP
                </Button>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <Music className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Audio Samples</h3>
                <p className="text-gray-600 text-sm mb-4">High-quality audio clips from recordings and performances</p>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Logo & Graphics</h3>
                <p className="text-gray-600 text-sm mb-4">Logos, promotional graphics, and brand assets</p>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Rider */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sound Requirements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• High-quality acoustic guitar pickup system</li>
                  <li>• Professional acoustic guitar amplification</li>
                  <li>• Stage monitoring as needed</li>
                  <li>• Quiet, intimate venue preferred</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Venue Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Solo acoustic performance</li>
                  <li>• Seated audience preferred</li>
                  <li>• Minimal stage lighting required</li>
                  <li>• Acoustic-friendly environment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Press Inquiries</h2>
            <p className="text-gray-300 mb-6">For interviews, additional materials, or booking information</p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <a href="/contact" className="flex items-center space-x-2">
                <ExternalLink className="h-5 w-5" />
                <span>Contact for Press</span>
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
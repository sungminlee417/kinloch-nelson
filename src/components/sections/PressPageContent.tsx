'use client'

import { FileText, Download, Quote, Music, ExternalLink, Image } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Achievement {
  title: string
  description: string
  year?: number
}

interface Biography {
  _id: string
  name: string
  tagline: string
  location: string
  shortBio: string
  fullBio: string[]
  genres: string[]
  instruments: string[]
  achievements: Achievement[]
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

interface PressPageContentProps {
  pressData: PressData
}

export default function PressPageContent({ pressData }: PressPageContentProps) {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-6 text-amber-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Press Kit
            </h1>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              Professional media resources, photos, and promotional materials for {pressData.biography.name}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Artist Bio */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Artist Biography</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Short Bio</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  {pressData.biography.shortBio}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Full Biography</h3>
                <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  {pressData.biography.fullBio.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-300">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Information</h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Artist:</h4>
                    <p>{pressData.biography.name}</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Genre:</h4>
                    <p>{pressData.biography.genres.join(', ')}</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location:</h4>
                    <p>{pressData.biography.location}</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Instruments:</h4>
                    <p>{pressData.biography.instruments.join(', ')}</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Performance Type:</h4>
                    <p>Solo Acoustic Guitar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Quotes */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Press Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pressData.testimonials.map((testimonial) => (
                <div key={testimonial._id} className="relative bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <Quote className="h-8 w-8 text-amber-400 opacity-50 mb-4" />
                  <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-l-4 border-amber-400 pl-4">
                    <cite className="not-italic">
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                      <div className="text-sm text-amber-600 dark:text-amber-400">{testimonial.publication}</div>
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
                <div key={link._id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Achievements & Recognition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pressData.biography.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-gray-900 dark:text-white font-semibold">{achievement.title}</p>
                        {achievement.year && (
                          <span className="text-sm text-gray-500 dark:text-gray-400">({achievement.year})</span>
                        )}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
                    </div>
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
              <div className="text-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg">
                <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">High-Resolution Photos</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Professional photos suitable for print and digital media</p>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download ZIP
                </Button>
              </div>
              
              <div className="text-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg">
                <Music className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Audio Samples</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">High-quality audio clips from recordings and performances</p>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
              
              <div className="text-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Logo & Graphics</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Logos, promotional graphics, and brand assets</p>
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
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technical Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sound Requirements</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• High-quality acoustic guitar pickup system</li>
                  <li>• Professional acoustic guitar amplification</li>
                  <li>• Stage monitoring as needed</li>
                  <li>• Quiet, intimate venue preferred</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Venue Information</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
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
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Press Inquiries</h2>
            <p className="text-amber-100 mb-6">For interviews, additional materials, or booking information</p>
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-amber-600 hover:text-amber-700">
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
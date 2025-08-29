'use client'

import { motion } from 'framer-motion'
import { Quote, ExternalLink } from 'lucide-react'

interface Testimonial {
  _id: string
  quote: string
  author: string
  publication: string
  order: number
  isFeatured: boolean
}

interface MediaFeature {
  _id: string
  title: string
  url: string
  description: string
  category: string
  publicationDate?: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  mediaFeatures: MediaFeature[]
}

export default function TestimonialsSection({ testimonials, mediaFeatures }: TestimonialsSectionProps) {

  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            What People Are Saying
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Reviews and praise from music critics, publications, and audiences
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-amber-400 opacity-50" />
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-l-4 border-amber-400 pl-4">
                <cite className="not-italic">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                    {testimonial.publication}
                  </div>
                </cite>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media Features */}
        {mediaFeatures && mediaFeatures.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Featured In
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaFeatures.map((feature) => (
                  <motion.div 
                    key={feature._id} 
                    className="text-center p-4 border border-gray-100 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <div className="flex items-center justify-center mb-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        {feature.category}
                      </span>
                    </div>
                    {feature.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                        {feature.description}
                      </p>
                    )}
                    {feature.publicationDate && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                        {new Date(feature.publicationDate).toLocaleDateString()}
                      </p>
                    )}
                    <a 
                      href={feature.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center space-x-1 text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors text-sm font-medium"
                    >
                      <span>Read More</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

// Testimonials from the original site
const testimonials = [
  {
    id: '1',
    quote: "Kinloch Nelson plays with the virtuosity of a classical master and the sensibility of a pop performer.",
    author: "Music Critic",
    publication: "Portland Press Herald",
    isFeatured: true
  },
  {
    id: '2',
    quote: "Kinloch Nelson is a gifted performer and a brilliant arranger who can do wonders with virtually any song.",
    author: "Dave Walker",
    publication: "Just Jazz Magazine",
    isFeatured: true
  },
  {
    id: '3',
    quote: "Nelson's playing is a journey through American roots, jazz, country, blues, classical...",
    author: "Frank De Blase",
    publication: "City Newspaper",
    isFeatured: true
  },
  {
    id: '4',
    quote: "A seemingly effortless exhibition of inspirational skills, full of surprises...",
    author: "Fan Review",
    publication: "YouTube Comment",
    isFeatured: true
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            What People Are Saying
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Reviews and praise from music critics, publications, and audiences
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-amber-400 opacity-50" />
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-l-4 border-amber-400 pl-4">
                <cite className="not-italic">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-amber-600 font-medium">
                    {testimonial.publication}
                  </div>
                </cite>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Featured In
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Podcasts</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a 
                      href="#" 
                      className="hover:text-amber-600 transition-colors"
                    >
                      Fretboard Journal Podcast
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="hover:text-amber-600 transition-colors"
                    >
                      Acoustic Guitar Magazine Sessions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Publications</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Portland Press Herald</li>
                  <li>Just Jazz Magazine</li>
                  <li>City Newspaper</li>
                  <li>Acoustic Guitar Magazine</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
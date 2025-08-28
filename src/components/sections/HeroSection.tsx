'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Calendar, Music, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Kinloch
                </span>
                <br />
                <span className="text-gray-800">Nelson</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
                <Music className="h-5 w-5" />
                <span className="text-lg font-medium">Fingerstyle Guitar • Rochester, NY</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-700 mb-8 leading-relaxed"
            >
              Virtuosic fingerstyle guitarist blending classical technique with jazz sensibilities, 
              creating captivating arrangements that journey through American roots, blues, and contemporary music.
            </motion.p>

            {/* Call-to-action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                <Link href="/videos" className="flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Watch Performances</span>
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/performances" className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Shows</span>
                </Link>
              </Button>

              <Button asChild variant="ghost" size="lg" className="bg-green-600 text-white hover:bg-green-700">
                <a 
                  href="https://streamlabs.com/kinlochnelson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Live Stream Concert Donations</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Placeholder for profile image - replace with actual image */}
              <div className="aspect-square rounded-full bg-gradient-to-br from-amber-100 to-orange-100 shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-amber-600">
                  <Music className="h-32 w-32" />
                </div>
                {/* Uncomment when you have the actual image */}
                {/* <Image
                  src="/kinloch-portrait.jpg"
                  alt="Kinloch Nelson"
                  fill
                  className="object-cover"
                  priority
                /> */}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-400 rounded-full opacity-60 animate-bounce delay-1000"></div>
            </div>
          </motion.div>
        </div>

        {/* Featured quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-lg italic text-gray-600 max-w-3xl mx-auto">
            &ldquo;Kinloch Nelson plays with the virtuosity of a classical master and the sensibility of a pop performer.&rdquo;
          </blockquote>
          <cite className="text-sm font-medium text-amber-600 mt-2 block">
            — Portland Press Herald
          </cite>
        </motion.div>
      </div>
    </section>
  )
}
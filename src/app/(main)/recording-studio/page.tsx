'use client'

import { useEffect } from 'react'
import { ExternalLink, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function RecordingStudioPage() {
  useEffect(() => {
    // Auto-redirect after 5 seconds
    const timer = setTimeout(() => {
      window.location.href = 'http://www.dynrec.com'
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleRedirect = () => {
    window.location.href = 'http://www.dynrec.com'
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building className="h-16 w-16 mx-auto mb-6 text-amber-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dynamic Recording Studios
            </h1>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              Professional recording facility in Rochester, NY
            </p>
          </div>
        </div>
      </section>

      {/* Redirect Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Redirecting to Dynamic Recording Studios
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              You are being redirected to the official Dynamic Recording Studios website 
              where Kinloch Nelson has recorded many of his albums.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Dynamic Recording Studios has been an important part of Kinloch's musical journey, 
              providing professional recording services and expertise in acoustic guitar recording.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button onClick={handleRedirect} size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <ExternalLink className="h-5 w-5 mr-2" />
                Visit Dynamic Recording Studios
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a href="/contact">
                  Contact Kinloch Instead
                </a>
              </Button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Automatic redirect in 5 seconds...
            </p>
          </div>

          {/* Studio Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                About Dynamic Recording Studios
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional recording facility specializing in acoustic instruments 
                and providing high-quality recording, mixing, and mastering services.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Kinloch's Recordings
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Several of Kinloch Nelson's albums have been recorded at Dynamic Studios, 
                taking advantage of their expertise in capturing acoustic guitar performances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
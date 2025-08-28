import { Metadata } from 'next'
import { User, Music, Calendar, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Stanley Watson | Kinloch Nelson',
  description: 'Information about Stanley Watson and collaborations with Kinloch Nelson',
}

export default function StanleyWatsonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <User className="h-16 w-16 mx-auto mb-6 text-blue-100" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Stanley Watson
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Collaborations and musical partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Stanley Watson
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Stanley Watson represents an important collaboration and influence in 
                Kinloch Nelson's musical journey. This section highlights the artistic 
                partnership and musical exchanges that have contributed to the development 
                of fingerstyle guitar techniques and arrangements.
              </p>
              <p className="text-gray-600 mb-6">
                The collaboration between artists often leads to innovative approaches 
                to guitar playing, combining different styles, techniques, and musical 
                perspectives to create unique interpretations of both traditional and 
                contemporary pieces.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Musical Collaborations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <Music className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Shared Performances
                </h4>
                <p className="text-gray-600 text-sm">
                  Joint performances and collaborative musical presentations
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <Calendar className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Workshop Collaborations
                </h4>
                <p className="text-gray-600 text-sm">
                  Educational workshops and masterclasses
                </p>
              </div>
            </div>
          </div>

          {/* Contact for More Information */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              For more information about Stanley Watson collaborations
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="/contact" className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <span>Contact for Details</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
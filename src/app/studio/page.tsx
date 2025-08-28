import { Metadata } from 'next'
import Image from 'next/image'
import { Building, Music, Clock, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Dynamic Recording Studios | Kinloch Nelson',
  description: 'Information about Dynamic Recording Studios in Rochester, NY',
}

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building className="h-16 w-16 mx-auto mb-6 text-amber-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dynamic Recording Studios
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Professional recording facility in Rochester, NY - Where artistry meets technology
            </p>
          </div>
        </div>
      </section>

      {/* Studio Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Studio Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About the Studio
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-6">
                  Dynamic Recording Studios has been a cornerstone of Rochester's music scene, 
                  providing professional recording services for artists across genres. The studio 
                  features state-of-the-art equipment and acoustically designed spaces perfect 
                  for capturing the nuanced performances of acoustic instruments.
                </p>
                <p className="text-gray-600 mb-6">
                  Many of Kinloch Nelson's recordings have been produced at Dynamic Recording Studios, 
                  taking advantage of their expertise in acoustic guitar recording and their 
                  commitment to preserving the natural warmth and dynamics of fingerstyle performances.
                </p>
              </div>

              {/* Features */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Studio Features</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <Music className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Professional acoustic recording spaces</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Music className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>High-end microphones and preamps</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Music className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Digital and analog recording capabilities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Music className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Professional mixing and mastering</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Music className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Experienced engineering staff</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Studio Image Placeholder */}
            <div>
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Building className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Studio Photo</p>
                  <p className="text-sm">Professional recording environment</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Studio Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-600">Rochester, New York</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-600">Contact for studio rates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-600">By appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recordings Made Here */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recordings Made at Dynamic Studios
            </h2>
            <p className="text-xl text-gray-600">
              Professional recordings showcasing the studio's capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Music className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                "Partly On Time: Recordings, 1968-1970"
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Early studio recordings showcasing developing fingerstyle techniques
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/recordings">View Album Details</a>
              </Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Music className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Studio Sessions
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Various recording projects and collaborative works
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/recordings">Explore Recordings</a>
              </Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Music className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Live Studio Performances
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Intimate studio performances capturing the essence of live music
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/videos">Watch Videos</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Recording?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact Kinloch Nelson for information about recording sessions and studio availability
          </p>
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
            <a href="/contact" className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Get in Touch</span>
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
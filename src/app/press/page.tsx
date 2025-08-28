import { Metadata } from 'next'
import { FileText, Download, Quote, Music, Calendar, ExternalLink, Image } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Press Kit | Kinloch Nelson',
  description: 'Professional press kit, media resources, and promotional materials for Kinloch Nelson',
}

const pressQuotes = [
  {
    quote: "Kinloch Nelson plays with the virtuosity of a classical master and the sensibility of a pop performer.",
    author: "Music Critic",
    publication: "Portland Press Herald"
  },
  {
    quote: "Kinloch Nelson is a gifted performer and a brilliant arranger who can do wonders with virtually any song.",
    author: "Dave Walker",
    publication: "Just Jazz Magazine"
  },
  {
    quote: "Nelson's playing is a journey through American roots, jazz, country, blues, classical...",
    author: "Frank De Blase",
    publication: "City Newspaper"
  },
  {
    quote: "A seemingly effortless exhibition of inspirational skills, full of surprises...",
    author: "Fan Review",
    publication: "YouTube"
  }
]

const mediaFeatures = [
  {
    title: "Fretboard Journal Podcast",
    type: "Podcast Interview",
    description: "In-depth discussion about fingerstyle techniques and musical influences",
    link: "#"
  },
  {
    title: "Acoustic Guitar Magazine Sessions",
    type: "Video Feature",
    description: "Studio performance and interview with premier acoustic guitar publication",
    link: "#"
  }
]

export default function PressPage() {
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
              Professional media resources, photos, and promotional materials for Kinloch Nelson
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Short Bio (50 words)</h3>
                <p className="text-gray-600 mb-6 p-4 bg-gray-50 rounded-lg">
                  Kinloch Nelson is a virtuosic fingerstyle guitarist from Rochester, NY, blending classical technique with jazz sensibilities. His performances journey through American roots, blues, and contemporary music with the skill of a master and the heart of a storyteller.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Medium Bio (100 words)</h3>
                <p className="text-gray-600 p-4 bg-gray-50 rounded-lg">
                  Kinloch Nelson is a fingerstyle guitarist whose performances showcase the virtuosity of a classical master combined with the sensibility of a contemporary performer. Based in Rochester, NY, Nelson has developed a unique approach to guitar that seamlessly weaves together American roots music, jazz standards, blues, and original compositions. His recordings, including "Partly On Time: Recordings, 1968-1970," demonstrate decades of musical evolution and technical refinement. Nelson has been featured on the Fretboard Journal Podcast and Acoustic Guitar Magazine Sessions, earning praise from critics and audiences alike for his innovative arrangements and compelling performances.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Information</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Genre:</h4>
                    <p>Fingerstyle Guitar, Jazz, Classical, Blues, American Roots</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Location:</h4>
                    <p>Rochester, New York</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Instruments:</h4>
                    <p>Acoustic Guitar, Classical Guitar</p>
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
              {pressQuotes.map((quote, index) => (
                <div key={index} className="relative bg-gray-50 rounded-lg p-6">
                  <Quote className="h-8 w-8 text-amber-400 opacity-50 mb-4" />
                  <blockquote className="text-gray-700 italic mb-4">
                    "{quote.quote}"
                  </blockquote>
                  <div className="border-l-4 border-amber-400 pl-4">
                    <cite className="not-italic">
                      <div className="font-semibold text-gray-900">{quote.author}</div>
                      <div className="text-sm text-amber-600">{quote.publication}</div>
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
              {mediaFeatures.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <span className="inline-block px-3 py-1 text-sm bg-amber-100 text-amber-800 rounded-full mb-3">
                    {feature.type}
                  </span>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={feature.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Feature
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photos & Media Assets */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Photos & Media Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
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
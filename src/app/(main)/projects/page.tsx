import { Metadata } from 'next'
import { FolderOpen, Music, Users, Calendar, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Projects | Kinloch Nelson',
  description: 'Musical projects, collaborations, and special performances by Kinloch Nelson',
}

const projects = [
  {
    id: '1',
    title: 'Partly On Time: Recordings, 1968-1970',
    description: 'A collection of early recordings showcasing the development of fingerstyle guitar techniques',
    type: 'Album',
    year: '1970',
    status: 'Released',
    links: [
      { name: 'Listen on Bandcamp', url: '#' },
      { name: 'Spotify', url: '#' },
    ]
  },
  {
    id: '2',
    title: 'Dynamic Recording Studios Sessions',
    description: 'Professional studio recordings capturing the essence of live fingerstyle performances',
    type: 'Recording Sessions',
    year: 'Various',
    status: 'Ongoing',
    links: [
      { name: 'Studio Information', url: '/studio' },
    ]
  },
  {
    id: '3',
    title: 'YouTube Performance Series',
    description: 'Comprehensive video collection featuring classical arrangements, jazz standards, and original compositions',
    type: 'Video Series',
    year: 'Ongoing',
    status: 'Active',
    links: [
      { name: 'Watch on YouTube', url: 'https://www.youtube.com/@kinlochnelson' },
      { name: 'View All Videos', url: '/videos' },
    ]
  },
  {
    id: '4',
    title: 'Workshop & Masterclass Series',
    description: 'Educational programs focusing on fingerstyle guitar techniques and musical interpretation',
    type: 'Educational',
    year: 'Ongoing',
    status: 'Available',
    links: [
      { name: 'Workshop Details', url: '/workshops' },
      { name: 'Contact for Booking', url: '/contact' },
    ]
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FolderOpen className="h-16 w-16 mx-auto mb-6 text-purple-100" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Musical Projects
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Recordings, performances, and collaborative works spanning decades of musical artistry
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {project.type}
                        </span>
                        <span>{project.year}</span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Released' ? 'bg-green-100 text-green-800' :
                          project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                          project.status === 'Active' ? 'bg-amber-100 text-amber-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    {project.links.map((link, index) => (
                      <Button 
                        key={index}
                        variant={index === 0 ? "default" : "outline"} 
                        size="sm" 
                        className="w-full justify-start"
                        asChild
                      >
                        <a 
                          href={link.url}
                          target={link.url.startsWith('http') ? '_blank' : undefined}
                          rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center space-x-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>{link.name}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Media */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Media
            </h2>
            <p className="text-xl text-gray-600">
              Highlights from various projects and collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Music className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Fretboard Journal Podcast
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Featured interview and performance on the acclaimed guitar podcast
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Listen Now
                </a>
              </Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Acoustic Guitar Magazine Sessions
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Studio session and interview with premier acoustic guitar publication
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Watch Session
                </a>
              </Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Live Performance Archive
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Collection of live performances from venues across the Northeast
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/performances">
                  View Archive
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Collaboration?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact Kinloch Nelson to discuss musical projects, recording sessions, or performance opportunities
          </p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <a href="/contact" className="flex items-center space-x-2">
              <ExternalLink className="h-5 w-5" />
              <span>Start a Project</span>
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
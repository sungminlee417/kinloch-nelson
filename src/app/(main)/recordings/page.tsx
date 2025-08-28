import { Metadata } from 'next'
import { Music, Calendar, ExternalLink, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Recordings | Kinloch Nelson',
  description: 'Complete discography and recordings by fingerstyle guitarist Kinloch Nelson',
}

const recordings = [
  {
    id: '1',
    title: 'Partly On Time: Recordings, 1968-1970',
    releaseDate: '1970',
    description: 'A collection of early recordings showcasing the development of fingerstyle guitar techniques during a pivotal period in American music.',
    tracks: [
      { title: 'Opening Theme', duration: '3:24' },
      { title: 'Folk Dance', duration: '4:12' },
      { title: 'Spanish Romance', duration: '5:08' },
      { title: 'Blues Variation', duration: '3:56' },
      { title: 'Country Mood', duration: '4:23' },
      { title: 'Jazz Interlude', duration: '6:15' },
      { title: 'Classical Study', duration: '4:45' },
      { title: 'Closing Meditation', duration: '5:32' }
    ],
    spotifyLink: 'https://open.spotify.com/album/example',
    appleMusicLink: 'https://music.apple.com/album/example',
    bandcampLink: 'https://kinlochnelson.bandcamp.com/album/partly-on-time',
    isFeatured: true
  }
]

export default function RecordingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Music className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Recordings
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Studio albums and recordings spanning decades of musical artistry
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {recordings.map((recording) => (
          <div key={recording.id} className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                {/* Album Cover */}
                <div className="md:w-1/3">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-8">
                    <Music className="h-24 w-24 text-blue-600" />
                  </div>
                </div>

                {/* Album Info */}
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-600 font-medium">{recording.releaseDate}</span>
                    {recording.isFeatured && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {recording.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {recording.description}
                  </p>

                  {/* Streaming Links */}
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-green-600 hover:bg-green-700" asChild>
                      <a href={recording.spotifyLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Spotify
                      </a>
                    </Button>
                    
                    <Button variant="outline" asChild>
                      <a href={recording.appleMusicLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Apple Music
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50" asChild>
                      <a href={recording.bandcampLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Bandcamp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Track Listing */}
            <div className="bg-white rounded-lg shadow-lg mt-6 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Track Listing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recording.tracks.map((track, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-gray-900 group-hover:text-blue-600 transition-colors">
                        {track.title}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Recording Info */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Recordings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recording Process</h3>
              <p className="text-gray-600 mb-4">
                These recordings were captured during sessions at Dynamic Recording Studios, utilizing high-end equipment 
                specifically chosen for acoustic guitar recording. The sessions focused on preserving the natural warmth 
                and dynamics of fingerstyle performances.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Musical Approach</h3>
              <p className="text-gray-600 mb-4">
                The recordings showcase the evolution of Nelson&apos;s fingerstyle technique, blending classical guitar 
                foundations with jazz harmony, blues expression, and folk sensibilities. Each track represents 
                a different facet of this comprehensive musical approach.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8">
            <Play className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Experience the Music
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Listen to these recordings on your preferred streaming platform or purchase high-quality downloads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="#streaming-section">
                  <Music className="h-5 w-5 mr-2" />
                  Stream Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <a href="/contact">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Recording Inquiries
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
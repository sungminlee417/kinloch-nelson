import { Metadata } from 'next'
import { Link2, ExternalLink, Music, Radio, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Links | Kinloch Nelson',
  description: 'Connect with Kinloch Nelson across streaming platforms, social media, and music stores',
}

const musicPlatforms = [
  {
    name: 'Spotify',
    description: 'Stream albums and playlists',
    url: 'https://open.spotify.com/artist/kinlochnelson',
    category: 'Streaming',
    color: 'bg-green-600 hover:bg-green-700'
  },
  {
    name: 'Apple Music',
    description: 'Listen on Apple Music',
    url: 'https://music.apple.com/artist/kinloch-nelson',
    category: 'Streaming',
    color: 'bg-gray-800 hover:bg-gray-900'
  },
  {
    name: 'Bandcamp',
    description: 'Purchase and download albums',
    url: 'https://kinlochnelson.bandcamp.com',
    category: 'Store',
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    name: 'YouTube',
    description: 'Watch performances and videos',
    url: 'https://www.youtube.com/@kinlochnelson',
    category: 'Video',
    color: 'bg-red-600 hover:bg-red-700'
  }
]

const socialMedia = [
  {
    name: 'Facebook',
    description: 'Follow for updates and events',
    url: 'https://www.facebook.com/kinlochnelson',
    category: 'Social'
  },
  {
    name: 'Instagram',
    description: 'Photos and behind-the-scenes content',
    url: 'https://www.instagram.com/kinlochnelson',
    category: 'Social'
  },
  {
    name: 'Twitter',
    description: 'Latest news and announcements',
    url: 'https://www.twitter.com/kinlochnelson',
    category: 'Social'
  }
]

const mediaFeatures = [
  {
    name: 'Fretboard Journal Podcast',
    description: 'Interview and performance discussion',
    url: '#',
    category: 'Media'
  },
  {
    name: 'Acoustic Guitar Magazine Sessions',
    description: 'Video session and interview',
    url: '#',
    category: 'Media'
  }
]

const supportLinks = [
  {
    name: 'Live Stream Concert Donations',
    description: 'Support live streaming performances',
    url: 'https://streamlabs.com/kinlochnelson',
    category: 'Support',
    color: 'bg-green-600 hover:bg-green-700'
  }
]

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link2 className="h-16 w-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Connect & Listen
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Find Kinloch Nelson's music across all major platforms and stay connected
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Music Platforms */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Music className="h-12 w-12 mx-auto text-purple-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Listen to the Music</h2>
            <p className="text-xl text-gray-600">
              Stream and purchase albums on your favorite platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {musicPlatforms.map((platform) => (
              <div key={platform.name} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <Music className="h-8 w-8 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
                <span className="inline-block px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full mb-4">
                  {platform.category}
                </span>
                <Button 
                  asChild 
                  className={`w-full ${platform.color || 'bg-purple-600 hover:bg-purple-700'}`}
                >
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Open {platform.name}</span>
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section className="mb-16">
          <div className="bg-green-50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Live Performances</h2>
            <p className="text-xl text-gray-600 mb-6">
              Help support live streaming concerts and performances
            </p>
            {supportLinks.map((link) => (
              <Button 
                key={link.name}
                asChild 
                size="lg"
                className={link.color}
              >
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>{link.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </section>

        {/* Social Media */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-xl text-gray-600">
              Follow for updates, events, and behind-the-scenes content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialMedia.map((social) => (
              <div key={social.name} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{social.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{social.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Follow on {social.name}</span>
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Media Features */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Radio className="h-12 w-12 mx-auto text-purple-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Features</h2>
            <p className="text-xl text-gray-600">
              Interviews, sessions, and podcast appearances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaFeatures.map((media) => (
              <div key={media.name} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{media.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{media.description}</p>
                <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mb-4">
                  {media.category}
                </span>
                <Button variant="outline" asChild className="w-full">
                  <a 
                    href={media.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Listen/Watch</span>
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Links */}
        <section>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" asChild>
                <a href="/press" className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Press Kit</span>
                </a>
              </Button>
              
              <Button variant="outline" asChild>
                <a href="/contact" className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Booking Info</span>
                </a>
              </Button>
              
              <Button variant="outline" asChild>
                <a href="/workshops" className="flex items-center space-x-2">
                  <Music className="h-4 w-4" />
                  <span>Lessons</span>
                </a>
              </Button>
              
              <Button variant="outline" asChild>
                <a href="/recording-studio" className="flex items-center space-x-2">
                  <Radio className="h-4 w-4" />
                  <span>Recording Studio</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
import Link from 'next/link'
import { Music, Mail, Phone, MapPin, Youtube, Facebook, Instagram, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Music className="h-6 w-6 text-amber-400" />
              <span className="font-bold text-lg">Kinloch Nelson</span>
            </div>
            <p className="text-gray-400 text-sm">
              Fingerstyle Guitar • Rochester, NY
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span>Rochester, New York</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <a href="mailto:contact@kinlochnelson.com" className="hover:text-amber-400 transition-colors">
                  Booking & Contact
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/performances" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Performance Calendar
                </Link>
              </li>
              <li>
                <Link href="/recordings" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Recordings
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-gray-400 hover:text-amber-400 transition-colors">
                  YouTube Videos
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Workshops & Instruction
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Music & Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Music & Media</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://open.spotify.com/artist/kinlochnelson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-1"
                >
                  <span>Spotify</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://music.apple.com/artist/kinloch-nelson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-1"
                >
                  <span>Apple Music</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://kinlochnelson.bandcamp.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-1"
                >
                  <span>Bandcamp</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link href="/studio" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Dynamic Recording Studios
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect & Support</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.youtube.com/kinlochnelson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/kinlochnelson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/kinlochnelson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="text-sm space-y-2">
              <p className="text-gray-400">Support Live Streaming:</p>
              <a 
                href="https://streamlabs.com/kinlochnelson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Donate</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Kinloch Nelson. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
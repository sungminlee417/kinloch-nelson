'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Music, Calendar, Play, FileText, User, MessageCircle, Link2, BookOpen, Camera, Mic } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigationItems = [
  { name: 'Home', href: '/', icon: Music },
  { name: 'Performances', href: '/performances', icon: Calendar },
  { name: 'Recordings', href: '/recordings', icon: Play },
  { name: 'Videos', href: '/videos', icon: FileText },
  { name: 'Biography', href: '/biography', icon: User },
  { name: 'Press Kit', href: '/press', icon: FileText },
  { name: 'Stanley Watson', href: '/stanley-watson', icon: User },
  { name: 'Projects', href: '/projects', icon: BookOpen },
  { name: 'Workshops', href: '/workshops', icon: BookOpen },
  { name: 'Photos', href: '/photos', icon: Camera },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Links', href: '/links', icon: Link2 },
  { name: 'Studio', href: '/studio', icon: Mic },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-amber-600" />
            <span className="font-bold text-xl text-gray-900">
              Kinloch Nelson
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.slice(0, 6).map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            
            {/* More dropdown for additional items */}
            <div className="relative group">
              <Button
                variant="ghost"
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-amber-600"
              >
                <span>More</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
              
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {navigationItems.slice(6).map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
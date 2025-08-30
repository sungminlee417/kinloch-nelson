'use client'

import { User, Music, MapPin, Calendar, Award, GraduationCap, Users, Disc } from 'lucide-react'
import Image from 'next/image'
import { PortableText, type PortableTextBlock } from '@portabletext/react'

interface Education {
  subject: string
  instructor: string
  institution: string
}

interface TeachingExperience {
  role: string
  institution: string
  duration: string
}

interface Achievement {
  title: string
  description: string
  year?: number
}

interface CurrentActivities {
  title: string
  paragraph1: string
  paragraph2: string
}

interface BiographyData {
  _id: string
  name: string
  tagline: string
  location: string
  profileImage?: string
  shortBio: string
  professionalOverview: string
  careerStart: number
  musicalStyle: string
  fullBio?: PortableTextBlock[]
  notableCollaborations: string[]
  education: Education[]
  teachingExperience: TeachingExperience[]
  genres: string[]
  instruments: string[]
  achievements: Achievement[]
  recordLabels: string[]
  currentActivities?: CurrentActivities
}

interface BiographyPageContentProps {
  biographyData: BiographyData
}

export default function BiographyPageContent({ biographyData }: BiographyPageContentProps) {
  const currentYear = new Date().getFullYear()
  const yearsActive = currentYear - (biographyData.careerStart || 1969)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <User className="h-16 w-16 mx-auto mb-6 text-amber-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Biography
            </h1>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              {biographyData.shortBio || 'The musical journey of fingerstyle guitarist Kinloch Nelson'}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Artist Profile */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                {biographyData.profileImage ? (
                  <div className="h-64 md:h-full relative">
                    <Image
                      src={biographyData.profileImage}
                      alt={biographyData.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-64 md:h-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 flex items-center justify-center">
                    <User className="h-24 w-24 text-amber-600 dark:text-amber-400" />
                  </div>
                )}
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{biographyData.name}</h2>
                <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Music className="h-4 w-4" />
                    <span>{biographyData.tagline}</span>
                  </div>
                  {biographyData.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{biographyData.location}</span>
                    </div>
                  )}
                  {biographyData.careerStart && (
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{yearsActive}+ years active</span>
                    </div>
                  )}
                </div>
                {biographyData.professionalOverview && (
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    {biographyData.professionalOverview}
                  </p>
                )}
                {biographyData.musicalStyle && (
                  <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-600 dark:text-gray-300">
                    "{biographyData.musicalStyle}"
                  </blockquote>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Full Biography */}
        {biographyData.fullBio && biographyData.fullBio.length > 0 && (
          <section className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Musical Journey</h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <PortableText value={biographyData.fullBio} />
              </div>
            </div>
          </section>
        )}

        {/* Notable Collaborations */}
        {biographyData.notableCollaborations && biographyData.notableCollaborations.length > 0 && (
          <section className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Users className="h-6 w-6 mr-2 text-amber-600" />
                Notable Collaborations
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {biographyData.notableCollaborations.map((collaborator, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{collaborator}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Education & Teaching */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          {biographyData.education && biographyData.education.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 mr-2 text-amber-600" />
                Education
              </h2>
              <div className="space-y-4">
                {biographyData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-amber-500 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{edu.subject}</h3>
                    {edu.instructor && (
                      <p className="text-gray-600 dark:text-gray-400">with {edu.instructor}</p>
                    )}
                    {edu.institution && (
                      <p className="text-gray-500 dark:text-gray-500 text-sm">{edu.institution}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Teaching Experience */}
          {biographyData.teachingExperience && biographyData.teachingExperience.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="h-6 w-6 mr-2 text-amber-600" />
                Teaching
              </h2>
              <div className="space-y-4">
                {biographyData.teachingExperience.map((teaching, index) => (
                  <div key={index} className="border-l-4 border-amber-500 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{teaching.role}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{teaching.institution}</p>
                    {teaching.duration && (
                      <p className="text-gray-500 dark:text-gray-500 text-sm">{teaching.duration}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Musical Style & Genres */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Musical Style</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {biographyData.genres && biographyData.genres.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Genres & Styles</h3>
                  <div className="flex flex-wrap gap-2">
                    {biographyData.genres.map((genre, index) => (
                      <span 
                        key={index}
                        className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {biographyData.instruments && biographyData.instruments.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Instruments</h3>
                  <div className="flex flex-wrap gap-2">
                    {biographyData.instruments.map((instrument, index) => (
                      <span 
                        key={index}
                        className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm"
                      >
                        {instrument}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Career Achievements */}
        {biographyData.achievements && biographyData.achievements.length > 0 && (
          <section className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Notable Achievements</h2>
              <div className="space-y-6">
                {biographyData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Award className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
                        {achievement.year && (
                          <span className="text-sm text-gray-500 dark:text-gray-400">({achievement.year})</span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Record Labels */}
        {biographyData.recordLabels && biographyData.recordLabels.length > 0 && (
          <section className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Disc className="h-6 w-6 mr-2 text-amber-600" />
                Record Labels
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {biographyData.recordLabels.map((label, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Current Activities */}
        <section>
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">
              {biographyData.currentActivities?.title || 'Current Activities'}
            </h2>
            <p className="text-amber-100 mb-6">
              {biographyData.currentActivities?.paragraph1 || 
                `Today, ${biographyData.name} continues to perform, record, and teach from ${biographyData.location || 'Rochester, New York'}. His ongoing work includes live performances, recording projects, educational workshops, and collaborations with other musicians who share his passion for acoustic music.`
              }
            </p>
            <p className="text-amber-100">
              {biographyData.currentActivities?.paragraph2 || 
                'His commitment to the art of fingerstyle guitar remains as strong as ever, with new projects and performances that continue to showcase the evolution of his musical voice.'
              }
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
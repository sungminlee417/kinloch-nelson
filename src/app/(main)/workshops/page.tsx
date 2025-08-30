import { Metadata } from 'next'
import { GraduationCap, Video, Music, Users, BookOpen, Phone, Mail, Guitar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { client } from '../../../../sanity/lib/client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Workshops & Private Instruction | Kinloch Nelson',
  description: 'Guitar workshops and private instruction in fingerstyle guitar, classical, and modern folk techniques with Kinloch Nelson',
}

const WORKSHOPS_QUERY = `*[_type == "workshopsPage"][0] {
  _id,
  pageHeader {
    title,
    subtitle
  },
  workshopTopics[] {
    title,
    description,
    icon,
    order
  } | order(order asc),
  privateInstruction {
    title,
    lessonTopics,
    pricing[] {
      duration,
      price,
      recommended
    }
  },
  teachingPhilosophy {
    quote,
    description
  },
  contactSection {
    title,
    content
  }
}`

const iconMap: { [key: string]: React.ComponentType<{className?: string}> } = {
  Music,
  BookOpen,
  Users,
  Guitar
}

export default async function WorkshopsPage() {
  try {
    const pageData = await client.fetch(WORKSHOPS_QUERY)
    
    if (!pageData) {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">Workshops content not available</p>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <GraduationCap className="h-16 w-16 mx-auto mb-6 text-amber-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {pageData.pageHeader?.title || 'Workshops & Private Instruction'}
              </h1>
              <p className="text-xl text-amber-200 max-w-2xl mx-auto">
                {pageData.pageHeader?.subtitle || 'Learn fingerstyle guitar, classical techniques, and modern folk arrangements with personalized instruction'}
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Workshop Topics */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Workshop Topics</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Specialized workshops covering advanced guitar techniques and musical concepts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pageData.workshopTopics?.map((workshop: {title: string, description: string, icon: string, level: string, duration: string}, index: number) => {
                const IconComponent = iconMap[workshop.icon] || Music
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                    <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{workshop.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {workshop.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Private Instruction */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Video className="h-8 w-8 mr-3 text-amber-600 dark:text-amber-400" />
                {pageData.privateInstruction?.title || 'Private Instruction via Skype/Zoom'}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">What You'll Learn</h3>
                  <ul className="space-y-4">
                    {pageData.privateInstruction?.lessonTopics?.map((topic: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Lesson Pricing</h3>
                  <div className="space-y-4">
                    {pageData.privateInstruction?.pricing?.map((tier: {duration: string, price: string, description: string, recommended?: boolean}, index: number) => (
                      <div key={index} className={`p-4 rounded-lg border-2 ${
                        tier.recommended 
                          ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20' 
                          : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700'
                      }`}>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {tier.duration}
                          </span>
                          <span className="text-xl font-bold text-amber-600 dark:text-amber-400">
                            {tier.price}
                          </span>
                        </div>
                        {tier.recommended && (
                          <div className="mt-2">
                            <span className="inline-block px-2 py-1 text-xs bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 rounded-full">
                              Most Popular
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Teaching Philosophy */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Teaching Philosophy</h2>
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-lg">
                <blockquote className="text-xl text-amber-800 dark:text-amber-300 italic mb-4">
                  "{pageData.teachingPhilosophy?.quote || "In private lessons, I try to meet a student's needs. If I can, I do. If not, I send them somewhere else."}"
                </blockquote>
                <cite className="text-amber-700 dark:text-amber-400">— Kinloch Nelson</cite>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg">
                {pageData.teachingPhilosophy?.description || "With extensive musical experience spanning multiple genres including folk, rock, and classical music, Kinloch Nelson brings decades of playing and teaching experience to each lesson. Having begun playing guitar in the 1950s, he offers personalized instruction tailored to each student's goals and interests."}
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">{pageData.contactSection?.title || 'Ready to Begin?'}</h2>
              <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                {pageData.contactSection?.content || 'Contact Kinloch Nelson to schedule your workshop or private instruction session. Lessons can be arranged by phone or email at your convenience.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-amber-600 hover:text-amber-700">
                  <a href="/contact" className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>Contact for Lessons</span>
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                  <a href="/contact" className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Schedule by Phone</span>
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching workshops data:', error)
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Unable to load workshops</p>
        </div>
      </div>
    )
  }
}
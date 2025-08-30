import { Metadata } from 'next'
import { Wrench, Guitar, Sparkles, Heart } from 'lucide-react'
import { client } from '../../../../sanity/lib/client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Projects | Kinloch Nelson',
  description: 'Guitar building and modification projects from the Laboratory of the Guitar Mad Scientist',
}

const PROJECTS_QUERY = `*[_type == "projectsPage"][0] {
  _id,
  pageHeader {
    title,
    subtitle
  },
  projects[] {
    title,
    description,
    type,
    status,
    motto,
    icon,
    order
  } | order(order asc),
  philosophySection {
    title,
    content
  },
  contactSection {
    title,
    content,
    motto
  }
}`

const iconMap: { [key: string]: React.ComponentType<{className?: string}> } = {
  Guitar,
  Sparkles,
  Wrench,
  Heart
}

export default async function ProjectsPage() {
  try {
    const pageData = await client.fetch(PROJECTS_QUERY)
    
    if (!pageData) {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">Projects content not available</p>
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
              <Wrench className="h-16 w-16 mx-auto mb-6 text-amber-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {pageData.pageHeader?.title || 'Laboratory of the Guitar Mad Scientist'}
              </h1>
              <p className="text-xl text-amber-200 max-w-2xl mx-auto">
                {pageData.pageHeader?.subtitle || 'Guitar building and modification projects exploring innovative techniques and custom solutions'}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pageData.projects?.map((project: {title: string, description: string, type: string, icon: string, status: string, highlights?: string[], motto?: string}, index: number) => {
                const IconComponent = iconMap[project.icon] || Guitar
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-x-3 text-sm mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
                              {project.type}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200">
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {project.motto && (
                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-lg">
                          <p className="text-amber-800 dark:text-amber-300 italic font-medium">
                            "{project.motto}"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Heart className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {pageData.philosophySection?.title || 'The Mad Scientist Approach'}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {pageData.philosophySection?.content || 'These projects represent a hands-on exploration of guitar craftsmanship and performance enhancement. Each experiment is driven by curiosity, creativity, and a passion for discovering new possibilities in acoustic guitar playing and construction.'}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {pageData.contactSection?.title || 'Explore Your Own Projects'}
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              {pageData.contactSection?.content || 'Inspired to try your own guitar modifications or building projects? Contact Kinloch Nelson for guidance, workshops, or collaborative experimentation.'}
            </p>
            <p className="text-amber-200 italic text-lg">
              {pageData.contactSection?.motto || 'Remember: "Do try this at home... Have fun. Twang!"'}
            </p>
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error('Error fetching projects data:', error)
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Unable to load projects</p>
        </div>
      </div>
    )
  }
}
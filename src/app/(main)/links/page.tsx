import { Metadata } from 'next'
import { Link2, ExternalLink, Music, MapPin, Users, Guitar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { client } from '../../../../sanity/lib/client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Links | Kinloch Nelson',
  description: 'Guitar builders, music organizations, festivals, and other guitar-related resources',
}

const LINKS_QUERY = `*[_type == "linksPage"][0] {
  _id,
  pageHeader {
    title,
    subtitle
  },
  linkCategories[] {
    title,
    description,
    icon,
    links[] {
      title,
      description,
      url,
      order
    } | order(order asc),
    order
  } | order(order asc)
}`

const iconMap: { [key: string]: React.ComponentType<{className?: string}> } = {
  Guitar,
  MapPin,
  Users,
  Music
}

const fallbackData = {
  pageHeader: {
    title: 'Guitar Resources & Links',
    subtitle: 'Guitar builders, music organizations, festivals, and other guitar-related resources'
  },
  linkCategories: [
    {
      title: 'Guitar Builders',
      description: 'Custom guitar makers and vintage instrument specialists',
      icon: 'Guitar',
      order: 1,
      links: [
        {
          title: 'Lehmannstrings.com',
          description: 'Vintage and handmade instruments',
          url: 'https://lehmannstrings.com',
          order: 1
        },
        {
          title: 'Galloup Guitars',
          description: 'Custom instruments from Michigan',
          url: 'https://galloup.com',
          order: 2
        },
        {
          title: 'MacCubbin Guitars',
          description: 'Custom handcrafted steel string guitars',
          url: 'https://maccubbinguitars.com',
          order: 3
        },
        {
          title: 'Petros Guitars',
          description: 'Guitars and ukuleles',
          url: 'https://petrosguitars.com',
          order: 4
        },
        {
          title: 'Julius Borges Guitars',
          description: 'Made with "love for tradition"',
          url: 'https://juliusborgesguitars.com',
          order: 5
        },
        {
          title: 'Ken Parker Archtops',
          description: 'Innovative archtop guitar designs',
          url: 'https://kenparkerarchtops.com',
          order: 6
        }
      ]
    },
    {
      title: 'Rochester, NY Area',
      description: 'Local music organizations and venues in Rochester area',
      icon: 'MapPin',
      order: 2,
      links: [
        {
          title: 'Golden Link Folk Club',
          description: 'Folk club with meetings and concerts',
          url: 'https://goldenlink.org',
          order: 1
        },
        {
          title: 'Rochester Guitar Club',
          description: 'Monthly meetings and concerts',
          url: 'https://rochesterguitarclub.org',
          order: 2
        },
        {
          title: 'Hochstein Music School',
          description: 'Music education and performance',
          url: 'https://hochstein.org',
          order: 3
        },
        {
          title: 'Rochester Music Coalition',
          description: 'Supporting local music community',
          url: 'https://rochestermusiccoalition.com',
          order: 4
        },
        {
          title: 'Stutzman\'s Guitar Center',
          description: 'Local guitar shop and services',
          url: 'https://stutzmanguitarcenter.com',
          order: 5
        },
        {
          title: 'Bernunzio Uptown Music',
          description: 'Vintage fretted instruments',
          url: 'https://bernunzio.com',
          order: 6
        },
        {
          title: 'Sampler Folk Music',
          description: 'Dulcimer headquarters',
          url: 'https://samplerfolk.com',
          order: 7
        },
        {
          title: 'Dynamic Recording Studios',
          description: 'Professional recording services',
          url: 'http://www.dynrec.com',
          order: 8
        }
      ]
    },
    {
      title: 'Festivals & Organizations',
      description: 'Guitar festivals and organizations beyond Rochester',
      icon: 'Users',
      order: 3,
      links: [
        {
          title: 'Newport Guitar Festival',
          description: 'Annual guitar festival',
          url: 'https://newportguitarfestival.com',
          order: 1
        },
        {
          title: 'Guitar League (Syracuse)',
          description: 'Syracuse area guitar community',
          url: 'https://guitarleague.org',
          order: 2
        },
        {
          title: 'Rantucci Festival (Buffalo)',
          description: 'Buffalo area guitar festival',
          url: 'https://rantuccifestival.com',
          order: 3
        },
        {
          title: 'Seacoast Guitar (Portsmouth, NH)',
          description: 'New Hampshire guitar community',
          url: 'https://seacoastguitar.com',
          order: 4
        },
        {
          title: 'Guitar Foundation of America',
          description: 'International classical guitar organization',
          url: 'https://guitarfoundation.org',
          order: 5
        },
        {
          title: 'Harp Guitars Website',
          description: 'Dedicated to harp guitars',
          url: 'https://harpguitars.net',
          order: 6
        }
      ]
    }
  ]
}

export default async function LinksPage() {
  try {
    const pageData = await client.fetch(LINKS_QUERY) || fallbackData
    const data = pageData || fallbackData

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link2 className="h-16 w-16 mx-auto mb-6 text-amber-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {data.pageHeader?.title || 'Guitar Resources & Links'}
              </h1>
              <p className="text-xl text-amber-200 max-w-2xl mx-auto">
                {data.pageHeader?.subtitle || 'Guitar builders, music organizations, festivals, and other guitar-related resources'}
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Link Categories */}
          {data.linkCategories?.map((category: {title: string, description: string, icon: string, links: {title: string, description: string, url: string}[]}, categoryIndex: number) => {
            const IconComponent = iconMap[category.icon] || Guitar
            return (
              <section key={categoryIndex} className="mb-16">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                      <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.links?.map((link: {title: string, description: string, url: string}, linkIndex: number) => (
                      <div key={linkIndex} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{link.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{link.description}</p>
                        <Button variant="outline" size="sm" asChild className="w-full">
                          <a 
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Visit Site</span>
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )
          })}

          {/* Additional Resources */}
          <section>
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Know More Great Guitar Resources?</h2>
              <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                If you know of other guitar builders, organizations, or festivals that should be included, 
                please get in touch!
              </p>
              <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-amber-600 hover:text-amber-700">
                <a href="/contact" className="flex items-center space-x-2">
                  <ExternalLink className="h-5 w-5" />
                  <span>Suggest a Link</span>
                </a>
              </Button>
            </div>
          </section>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching links data:', error)
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Unable to load links</p>
        </div>
      </div>
    )
  }
}
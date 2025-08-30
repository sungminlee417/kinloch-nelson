import { Metadata } from 'next'
import { Camera, Download, ExternalLink, Image, Music, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { client } from '../../../../sanity/lib/client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Photos | Kinloch Nelson',
  description: 'Performance photos, guitar artistry, and press materials from fingerstyle guitarist Kinloch Nelson',
}

const PHOTOS_QUERY = `*[_type == "photosPage"][0] {
  _id,
  pageHeader {
    title,
    subtitle
  },
  categories[] {
    title,
    description,
    icon,
    photos[] {
      title,
      description,
      "imageUrl": image.asset->url,
      photographer,
      order
    } | order(order asc),
    order
  } | order(order asc),
  pressSection {
    title,
    description,
    highResTitle,
    highResDescription,
    postersTitle,
    postersDescription,
    externalGalleryUrl
  },
  mediaSection {
    title,
    content
  }
}`

const iconMap: { [key: string]: React.ComponentType<{className?: string}> } = {
  Music,
  Camera,
  Image,
  Users
}

export default async function PhotosPage() {
  try {
    const pageData = await client.fetch(PHOTOS_QUERY)
    
    if (!pageData) {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">Photos content not available</p>
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
            <Camera className="h-16 w-16 mx-auto mb-6 text-amber-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {pageData.pageHeader?.title || 'Photo Gallery'}
            </h1>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              {pageData.pageHeader?.subtitle || 'Performance moments, guitar artistry, and behind-the-scenes glimpses of musical life'}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Photo Categories */}
        {pageData.categories?.map((category: {title: string, description: string, icon: string, photos: {title: string, imageUrl: string, description?: string, year?: number, photographer?: string}[]}, categoryIndex: number) => {
          const IconComponent = iconMap[category.icon] || Camera
          return (
            <section key={categoryIndex} className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.photos?.map((photo: {title: string, imageUrl: string, description?: string, year?: number, photographer?: string}, photoIndex: number) => (
                    <div key={photoIndex} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
                        {photo.imageUrl ? (
                          <img 
                            src={photo.imageUrl} 
                            alt={photo.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="text-center">
                            <Image className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-500 dark:text-gray-400">Image</p>
                          </div>
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{photo.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{photo.description}</p>
                      {photo.photographer && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Photo by {photo.photographer}</p>
                      )}
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        })}

        {/* Press Materials */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{pageData.pressSection?.title || 'Press Materials & Posters'}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {pageData.pressSection?.description || 'High-resolution photos and promotional materials available for press and media use.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center">
                <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{pageData.pressSection?.highResTitle || 'High-Resolution Photos'}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {pageData.pressSection?.highResDescription || 'Professional photos suitable for print and digital media'}
                </p>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Archive
                </Button>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center">
                <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{pageData.pressSection?.postersTitle || 'Promotional Posters'}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {pageData.pressSection?.postersDescription || 'Concert posters and promotional graphics'}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={pageData.pressSection?.externalGalleryUrl || 'http://kinlochnelson.sundial3.com/kn/Kinloch_Nelson/Photos,_Posters.html'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View Gallery</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Note for Media */}
        <section>
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{pageData.mediaSection?.title || 'For Media & Press'}</h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              {pageData.mediaSection?.content || 'All photos are available for media use. For specific image requests or additional materials, please contact us directly.'}
            </p>
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-amber-600 hover:text-amber-700">
              <a href="/contact" className="flex items-center space-x-2">
                <ExternalLink className="h-5 w-5" />
                <span>Contact for Media</span>
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
  } catch (error) {
    console.error('Error fetching photos data:', error)
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Unable to load photos</p>
        </div>
      </div>
    )
  }
}
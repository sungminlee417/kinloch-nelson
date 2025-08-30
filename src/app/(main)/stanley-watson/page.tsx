import { Metadata } from 'next'
import { User, Music, Globe, Heart, Award, Disc } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Stanley Watson | Kinloch Nelson',
  description: 'Remembering Stanley Watson - guitar teacher, mentor, and influential musician who shaped Kinloch Nelson\'s musical journey',
}

export default function StanleyWatsonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <User className="h-16 w-16 mx-auto mb-6 text-amber-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Stanley Watson
            </h1>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              Teacher, mentor, and influential guitarist (1940s - 1978)
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Biography Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Biography
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Originally from Canada, Stanley Watson grew up in England before embarking on 
                    an extraordinary musical journey that would take him across Europe in the late 1950s. 
                    His quest for musical knowledge led him to study with various teachers, including 
                    an unlikely mentor - a potato farmer who happened to be a skilled guitarist.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Watson's dedication to his craft brought him to study with the legendary Andres Segovia 
                    and attend master classes with Pablo Casals. He also followed Django Reinhardt to learn 
                    jazz techniques, demonstrating his commitment to mastering multiple musical styles.
                  </p>
                </div>
              </div>
              <div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    In the mid-1970s, Watson lived and worked in Rochester, NY, where he collaborated 
                    with jazz musician Chuck Mangione and became Kinloch Nelson's guitar teacher. 
                    His approach to music was stylistically unique, blending classical and popular music 
                    in ways that reflected his extensive travels and diverse musical experiences.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Watson's life was tragically cut short in 1978 when he died from injuries sustained 
                    in a car crash near Portland, Maine. Despite his relatively brief time in Rochester, 
                    his influence on the local music scene and his students, particularly Kinloch Nelson, 
                    was profound and lasting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Musical Journey */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Globe className="h-8 w-8 mr-3 text-amber-600" />
              Musical Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Music className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Classical Training</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Studied with Andres Segovia and attended Pablo Casals master classes
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Globe className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">European Travels</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Traveled extensively through Europe collecting musical experiences and techniques
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Jazz Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Followed Django Reinhardt to master jazz guitar techniques and improvisation
                </p>
              </div>
            </div>
          </div>

          {/* Recordings & Collaborations */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Disc className="h-8 w-8 mr-3 text-amber-600" />
              Recordings & Collaborations
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Chuck Mangione Albums</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-medium text-gray-900 dark:text-white">"Friends And Love"</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Collaboration with Chuck Mangione</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-medium text-gray-900 dark:text-white">"Together"</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Additional collaborative work</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Other Recordings</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-medium text-gray-900 dark:text-white">"Pages From A Journal On America"</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-medium text-gray-900 dark:text-white">"Songs From The Valley Of The Nightingale"</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-medium text-gray-900 dark:text-white">"Lullaby To An Unborn Child"</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-medium text-gray-900 dark:text-white">"La Danza Los Ninos"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Relationship with Kinloch Nelson */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Heart className="h-8 w-8 mr-3 text-amber-600" />
              Mentorship & Legacy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Stanley Watson served as Kinloch Nelson's guitar teacher in the mid-1970s, becoming 
                a significant mentor who made a lasting impression on Nelson's musical development. 
                Watson's unique approach to blending classical and popular music styles deeply 
                influenced Nelson's own musical journey and fingerstyle technique.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                In recognition of Watson's profound influence, Kinloch Nelson presented a memorial 
                concert in 1990 at Nazareth College, honoring his teacher's memory and contributions 
                to the guitar world. Nelson also took on the important role of compiling and 
                preserving Watson's musical legacy for future generations.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-lg">
                <p className="text-amber-800 dark:text-amber-300 italic">
                  "Stanley Watson's influence extended far beyond technique - he showed me how to 
                  approach music as a journey of discovery, blending different traditions and styles 
                  to create something uniquely personal."
                </p>
                <p className="text-amber-700 dark:text-amber-400 text-sm mt-2">— Kinloch Nelson</p>
              </div>
            </div>
          </div>

          {/* Rochester Years */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rochester Years</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Performance Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Music className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300">Opened for John McLaughlin</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Music className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300">Opened for Frank Zappa</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Music className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300">Regular performances at Rochester venues</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Musical Philosophy</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Watson's compositions and performances reflected his extensive travels and diverse 
                  musical experiences. He was known for his ability to synthesize different musical 
                  traditions into cohesive, emotionally resonant pieces.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Interestingly, Watson had considered becoming a painter if he hadn't pursued music, 
                  suggesting a deep artistic sensibility that informed his approach to guitar and composition.
                </p>
              </div>
            </div>
          </div>

          {/* Memorial */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">In Memoriam</h2>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Stanley Watson's legacy lives on through his students, recordings, and the musical 
              traditions he helped preserve and innovate. His influence on fingerstyle guitar 
              and musical education continues to inspire new generations of musicians.
            </p>
            <div className="text-amber-200 text-sm">
              Stanley Watson (1940s - 1978)
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
import { Metadata } from 'next'
import { User, Music, MapPin, Calendar, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Biography | Kinloch Nelson',
  description: 'The complete biography of fingerstyle guitarist Kinloch Nelson',
}

export default function BiographyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <User className="h-16 w-16 mx-auto mb-6 text-indigo-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Biography
            </h1>
            <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
              The musical journey of fingerstyle guitarist Kinloch Nelson
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Artist Profile */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-64 md:h-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
                  <User className="h-24 w-24 text-indigo-600" />
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Kinloch Nelson</h2>
                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Music className="h-4 w-4" />
                    <span>Fingerstyle Guitar</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>Rochester, NY</span>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A virtuosic fingerstyle guitarist whose performances showcase the technical mastery of a classical musician 
                  combined with the interpretive sensibility of a contemporary artist. Nelson's unique approach to the guitar 
                  has earned acclaim from critics and audiences throughout his career.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Early Life & Musical Development */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Musical Development</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Kinloch Nelson's journey with the guitar began in the rich musical landscape of the late 1960s, 
                a time of incredible innovation in both classical and popular music. His early recordings, captured 
                in "Partly On Time: Recordings, 1968-1970," document the development of a unique voice in fingerstyle guitar.
              </p>
              <p className="text-gray-600 mb-6">
                Drawing inspiration from classical guitar traditions while embracing the improvisational spirit of jazz, 
                Nelson developed an approach that seamlessly weaves together disparate musical elements. His technique 
                combines the precision of classical training with the emotional expression found in blues and folk traditions.
              </p>
              <p className="text-gray-600">
                Based in Rochester, New York, Nelson has maintained a connection to the region's rich musical heritage 
                while developing an internationally recognized style that has influenced generations of fingerstyle guitarists.
              </p>
            </div>
          </div>
        </section>

        {/* Musical Style & Influences */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Musical Style & Influences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Genres & Styles</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Music className="h-4 w-4 text-indigo-600" />
                    <span>Classical Guitar</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Music className="h-4 w-4 text-indigo-600" />
                    <span>Jazz Standards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Music className="h-4 w-4 text-indigo-600" />
                    <span>American Blues</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Music className="h-4 w-4 text-indigo-600" />
                    <span>Folk & Country</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Music className="h-4 w-4 text-indigo-600" />
                    <span>Contemporary Arrangements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technique</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Advanced fingerstyle techniques</li>
                  <li>• Classical guitar foundations</li>
                  <li>• Jazz harmony integration</li>
                  <li>• Blues expression and phrasing</li>
                  <li>• Original arrangements and compositions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Highlights */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Highlights</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Calendar className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Early Recordings (1968-1970)</h3>
                  <p className="text-gray-600">
                    Released "Partly On Time: Recordings, 1968-1970," capturing the early development 
                    of his distinctive fingerstyle approach during a pivotal period in American music.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Critical Recognition</h3>
                  <p className="text-gray-600">
                    Earned praise from major publications including Portland Press Herald, Just Jazz Magazine, 
                    and City Newspaper for his innovative arrangements and masterful performances.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Music className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Media Features</h3>
                  <p className="text-gray-600">
                    Featured on prestigious platforms including Fretboard Journal Podcast and 
                    Acoustic Guitar Magazine Sessions, sharing insights into his musical approach and techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching & Legacy */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Teaching & Musical Education</h2>
            <p className="text-gray-600 mb-6">
              Beyond his performance career, Kinloch Nelson has been dedicated to sharing his knowledge and 
              passion for fingerstyle guitar through workshops, private instruction, and masterclasses. 
              His teaching approach emphasizes both technical proficiency and musical expression.
            </p>
            <p className="text-gray-600 mb-6">
              Nelson's workshops cover a range of topics from basic fingerstyle techniques to advanced 
              arrangement skills, helping students develop their own unique voice on the instrument. 
              His influence extends beyond individual students to the broader fingerstyle guitar community.
            </p>
            <p className="text-gray-600">
              The combination of performance excellence and educational commitment has made Nelson a 
              respected figure in the acoustic guitar world, inspiring both emerging and established musicians.
            </p>
          </div>
        </section>

        {/* Current Work */}
        <section>
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Current Activities</h2>
            <p className="text-indigo-100 mb-6">
              Today, Kinloch Nelson continues to perform, record, and teach from his base in Rochester, New York. 
              His ongoing work includes live performances, recording projects, educational workshops, and 
              collaborations with other musicians who share his passion for acoustic music.
            </p>
            <p className="text-indigo-100">
              His commitment to the art of fingerstyle guitar remains as strong as ever, with new projects 
              and performances that continue to showcase the evolution of his musical voice.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
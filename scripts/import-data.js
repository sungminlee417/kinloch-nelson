const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

// Load environment variables
require('dotenv').config({ path: '.env.local' })

console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET)
console.log('Token available:', !!process.env.SANITY_API_TOKEN)

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-12-21',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function importData() {
  try {
    console.log('🎸 Starting Kinloch Nelson data import...')
    
    // Load the real content data
    const dataPath = path.join(__dirname, '../sanity/data/import-real-content.json')
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
    
    // Import site settings
    console.log('📝 Importing site settings...')
    await client.createOrReplace(data.siteSettings)
    
    // Import biography
    console.log('👨‍🎤 Importing biography...')
    await client.createOrReplace(data.biography)
    
    // Import videos
    console.log('🎥 Importing videos...')
    for (const video of data.videos) {
      await client.createOrReplace(video)
    }
    
    // Import testimonials
    console.log('💬 Importing testimonials...')
    for (const testimonial of data.testimonials) {
      await client.createOrReplace(testimonial)
    }
    
    // Import recordings
    console.log('🎵 Importing recordings...')
    for (const recording of data.recordings) {
      await client.createOrReplace(recording)
    }
    
    // Import links
    console.log('🔗 Importing links...')
    for (const link of data.links) {
      await client.createOrReplace(link)
    }
    
    // Import workshops
    console.log('🎓 Importing workshops...')
    for (const workshop of data.workshops) {
      await client.createOrReplace(workshop)
    }
    
    // Import performances
    console.log('🎭 Importing performances...')
    for (const performance of data.performances) {
      await client.createOrReplace(performance)
    }
    
    console.log('✅ Data import completed successfully!')
    console.log('🎸 Kinloch Nelson\'s website is now populated with real content!')
    
    // Summary
    console.log('\n📊 Import Summary:')
    console.log(`• Videos: ${data.videos.length}`)
    console.log(`• Testimonials: ${data.testimonials.length}`)
    console.log(`• Recordings: ${data.recordings.length}`)
    console.log(`• Links: ${data.links.length}`)
    console.log(`• Workshops: ${data.workshops.length}`)
    console.log(`• Performances: ${data.performances.length}`)
    
  } catch (error) {
    console.error('❌ Error importing data:', error)
    process.exit(1)
  }
}

// Run the import
importData()
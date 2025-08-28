import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'
import {StudioNavbar} from './components/StudioNavbar'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'Kinloch Nelson CMS',
  projectId,
  dataset,
  basePath: '/studio',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // All Pages at top level
            S.listItem()
              .title('🏠 Homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
            S.listItem()
              .title('👤 Biography')
              .child(S.document().schemaType('biographyPage').documentId('biographyPage')),
            S.listItem()
              .title('🎬 Videos')
              .child(S.document().schemaType('videosPage').documentId('videosPage')),
            S.listItem()
              .title('📅 Performances')
              .child(S.document().schemaType('performancesPage').documentId('performancesPage')),
            S.listItem()
              .title('💽 Recordings')
              .child(S.document().schemaType('recordingsPage').documentId('recordingsPage')),
            S.listItem()
              .title('🎙️ Recording Studio')
              .child(S.document().schemaType('recordingStudioPage').documentId('recordingStudioPage')),
            S.listItem()
              .title('📂 Projects')
              .child(S.document().schemaType('projectsPage').documentId('projectsPage')),
            S.listItem()
              .title('🎵 Stanley Watson Duo')
              .child(S.document().schemaType('stanleyWatsonPage').documentId('stanleyWatsonPage')),
            S.listItem()
              .title('📰 Press')
              .child(S.document().schemaType('pressPage').documentId('pressPage')),
            S.listItem()
              .title('🔗 Links')
              .child(S.document().schemaType('linksPage').documentId('linksPage')),
            S.listItem()
              .title('📞 Contact')
              .child(S.document().schemaType('contactPage').documentId('contactPage')),
            
            // Divider for settings
            S.divider(),
            
            // Site Settings
            S.listItem()
              .title('⚙️ Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ])
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
})
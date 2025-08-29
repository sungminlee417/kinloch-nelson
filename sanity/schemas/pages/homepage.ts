import { defineType, defineField } from 'sanity'
import { Home } from 'lucide-react'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: Home,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Homepage',
      readOnly: true,
    }),
    
    // Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Artist Name',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          description: 'e.g., "Fingerstyle Guitar"',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string',
          description: 'e.g., "Rochester, NY"',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'shortBio',
          title: 'Short Bio',
          type: 'text',
          rows: 3,
          description: 'Brief introduction for the hero section',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'featuredQuote',
          title: 'Featured Quote',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Quote Text',
              type: 'string',
            }),
            defineField({
              name: 'attribution',
              title: 'Attribution',
              type: 'string',
              description: 'e.g., "Portland Press Herald"',
            }),
          ],
        }),
      ],
    }),

    // Featured Videos
    defineField({
      name: 'featuredVideos',
      title: 'Featured Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Video Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'youtubeUrl',
              title: 'YouTube URL',
              type: 'url',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Performance', value: 'performance' },
                  { title: 'Tutorial', value: 'tutorial' },
                  { title: 'Behind the Scenes', value: 'behind-the-scenes' },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'category',
            },
          },
        },
      ],
      validation: Rule => Rule.max(6),
    }),

    // Featured Recordings
    defineField({
      name: 'featuredRecordings',
      title: 'Featured Recordings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Album Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'releaseDate',
              title: 'Release Date',
              type: 'date',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'coverImage',
              title: 'Cover Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'spotifyLink',
              title: 'Spotify Link',
              type: 'url',
            }),
            defineField({
              name: 'appleMusicLink',
              title: 'Apple Music Link',
              type: 'url',
            }),
            defineField({
              name: 'bandcampLink',
              title: 'Bandcamp Link',
              type: 'url',
            }),
            defineField({
              name: 'tracks',
              title: 'Track List',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Track Title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'duration',
                      title: 'Duration',
                      type: 'string',
                      description: 'e.g., "3:45"',
                    }),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'releaseDate',
            },
          },
        },
      ],
      validation: Rule => Rule.max(2),
    }),

    // Testimonials
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'author',
              title: 'Author',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'publication',
              title: 'Publication',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'author',
              subtitle: 'publication',
            },
          },
        },
      ],
      validation: Rule => Rule.max(4),
    }),

    // Upcoming Shows
    defineField({
      name: 'showsSection',
      title: 'Shows Section Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Performance Calendar',
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: 'Join me for upcoming performances in Rochester, NY and surrounding areas',
        }),
        defineField({
          name: 'displayLimit',
          title: 'Number of Shows to Display',
          type: 'number',
          initialValue: 3,
          validation: Rule => Rule.min(1).max(10),
        }),
      ],
    }),
  ],
  
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Homepage',
        subtitle: 'Main landing page content',
      }
    },
  },
})
import { defineType, defineField } from 'sanity'
import { Newspaper } from 'lucide-react'

export default defineType({
  name: 'pressPage',
  title: 'Press Page',
  type: 'document',
  icon: Newspaper,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Press',
      readOnly: true,
    }),

    defineField({
      name: 'pageHeader',
      title: 'Page Header',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Header Title',
          type: 'string',
          initialValue: 'Press & Media',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'Media coverage, reviews, and press materials',
        }),
      ],
    }),

    defineField({
      name: 'pressReleases',
      title: 'Press Releases',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Press Release Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'date',
              title: 'Release Date',
              type: 'date',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Press Release Content',
              type: 'array',
              of: [{ type: 'block' }],
            }),
            defineField({
              name: 'excerpt',
              title: 'Excerpt',
              type: 'text',
              rows: 3,
              description: 'Short summary for listings',
            }),
            defineField({
              name: 'downloadLink',
              title: 'PDF Download',
              type: 'file',
              options: {
                accept: '.pdf',
              },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              date: 'date',
            },
            prepare({ title, date }) {
              return {
                title,
                subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'mediaCoverage',
      title: 'Media Coverage',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'headline',
              title: 'Headline',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'publication',
              title: 'Publication',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'date',
              title: 'Publication Date',
              type: 'date',
            }),
            defineField({
              name: 'author',
              title: 'Author',
              type: 'string',
            }),
            defineField({
              name: 'excerpt',
              title: 'Excerpt/Quote',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'link',
              title: 'Article Link',
              type: 'url',
            }),
            defineField({
              name: 'type',
              title: 'Media Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Review', value: 'review' },
                  { title: 'Interview', value: 'interview' },
                  { title: 'Feature Article', value: 'feature' },
                  { title: 'News', value: 'news' },
                  { title: 'Blog Post', value: 'blog' },
                  { title: 'Podcast', value: 'podcast' },
                ],
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'isFeatured',
              title: 'Featured Coverage',
              type: 'boolean',
              description: 'Highlight this coverage',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'headline',
              publication: 'publication',
              type: 'type',
              featured: 'isFeatured',
            },
            prepare({ title, publication, type, featured }) {
              return {
                title: `${featured ? '⭐ ' : ''}${title}`,
                subtitle: `${publication} - ${type}`,
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'pressKit',
      title: 'Press Kit',
      type: 'object',
      fields: [
        defineField({
          name: 'biography',
          title: 'Press Biography',
          type: 'array',
          of: [{ type: 'block' }],
          description: 'Short bio for press use',
        }),
        defineField({
          name: 'pressPhotos',
          title: 'Press Photos',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'caption',
                  title: 'Caption',
                  type: 'string',
                }),
                defineField({
                  name: 'credit',
                  title: 'Photo Credit',
                  type: 'string',
                }),
                defineField({
                  name: 'resolution',
                  title: 'Resolution',
                  type: 'string',
                  description: 'e.g., High-res, Web quality',
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'techRider',
          title: 'Technical Rider',
          type: 'file',
          options: {
            accept: '.pdf',
          },
        }),
        defineField({
          name: 'stagePlot',
          title: 'Stage Plot',
          type: 'file',
          options: {
            accept: '.pdf',
          },
        }),
        defineField({
          name: 'contactInfo',
          title: 'Press Contact Information',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Contact Name',
              type: 'string',
            }),
            defineField({
              name: 'email',
              title: 'Press Email',
              type: 'email',
            }),
            defineField({
              name: 'phone',
              title: 'Phone Number',
              type: 'string',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'quotes',
      title: 'Press Quotes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'source',
              title: 'Source',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'publication',
              title: 'Publication',
              type: 'string',
            }),
            defineField({
              name: 'isFeatured',
              title: 'Featured Quote',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      coverage: 'mediaCoverage',
      releases: 'pressReleases',
    },
    prepare({ coverage, releases }) {
      const totalItems = (coverage?.length || 0) + (releases?.length || 0)
      return {
        title: 'Press Page',
        subtitle: `${totalItems} press items`,
      }
    },
  },
})
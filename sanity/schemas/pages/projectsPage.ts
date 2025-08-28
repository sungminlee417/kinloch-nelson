import { defineType, defineField } from 'sanity'
import { Folder } from 'lucide-react'

export default defineType({
  name: 'projectsPage',
  title: 'Projects Page',
  type: 'document',
  icon: Folder,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Projects',
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
          initialValue: 'Musical Projects',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'A collection of musical collaborations and creative endeavors',
        }),
      ],
    }),

    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Project Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }],
            }),
            defineField({
              name: 'featuredImage',
              title: 'Featured Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Collaboration', value: 'collaboration' },
                  { title: 'Solo Project', value: 'solo' },
                  { title: 'Recording', value: 'recording' },
                  { title: 'Educational', value: 'educational' },
                ],
              },
            }),
            defineField({
              name: 'year',
              title: 'Year',
              type: 'string',
            }),
            defineField({
              name: 'links',
              title: 'Project Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Link Title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'url',
                      title: 'URL',
                      type: 'url',
                    }),
                    defineField({
                      name: 'type',
                      title: 'Link Type',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Website', value: 'website' },
                          { title: 'Spotify', value: 'spotify' },
                          { title: 'YouTube', value: 'youtube' },
                          { title: 'Bandcamp', value: 'bandcamp' },
                        ],
                      },
                    }),
                  ],
                },
              ],
            }),
            defineField({
              name: 'isFeatured',
              title: 'Featured Project',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              category: 'category',
              year: 'year',
              featured: 'isFeatured',
            },
            prepare({ title, category, year, featured }) {
              return {
                title: `${featured ? '⭐ ' : ''}${title}`,
                subtitle: `${category} - ${year}`,
              }
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      projects: 'projects',
    },
    prepare({ projects }) {
      return {
        title: 'Projects Page',
        subtitle: `${projects?.length || 0} projects`,
      }
    },
  },
})
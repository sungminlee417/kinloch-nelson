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
          initialValue: 'Laboratory of the Guitar Mad Scientist',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'Guitar building and modification projects exploring innovative techniques and custom solutions',
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
              type: 'text',
              rows: 4,
              validation: Rule => Rule.required(),
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
              name: 'type',
              title: 'Project Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Guitar Building', value: 'Guitar Building' },
                  { title: 'Performance Enhancement', value: 'Performance Enhancement' },
                  { title: 'Technical Innovation', value: 'Technical Innovation' },
                  { title: 'Research', value: 'Research' },
                ],
              },
            }),
            defineField({
              name: 'status',
              title: 'Project Status',
              type: 'string',
              options: {
                list: [
                  { title: 'Ongoing', value: 'Ongoing' },
                  { title: 'Completed', value: 'Completed' },
                  { title: 'Technique', value: 'Technique' },
                  { title: 'Research', value: 'Research' },
                ],
              },
            }),
            defineField({
              name: 'motto',
              title: 'Project Motto/Quote',
              type: 'string',
              description: 'Inspirational quote or motto for this project',
            }),
            defineField({
              name: 'icon',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Guitar', value: 'Guitar' },
                  { title: 'Sparkles', value: 'Sparkles' },
                  { title: 'Wrench', value: 'Wrench' },
                  { title: 'Hammer', value: 'Hammer' },
                ],
              },
              initialValue: 'Guitar',
            }),
            defineField({
              name: 'order',
              title: 'Display Order',
              type: 'number',
              validation: Rule => Rule.integer().positive(),
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
              type: 'type',
              status: 'status',
            },
            prepare({ title, type, status }) {
              return {
                title,
                subtitle: `${type} - ${status}`,
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'philosophySection',
      title: 'Philosophy Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'The Mad Scientist Approach',
        }),
        defineField({
          name: 'content',
          title: 'Philosophy Content',
          type: 'text',
          rows: 4,
          initialValue: 'These projects represent a hands-on exploration of guitar craftsmanship and performance enhancement. Each experiment is driven by curiosity, creativity, and a passion for discovering new possibilities in acoustic guitar playing and construction.',
        }),
      ],
    }),

    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Explore Your Own Projects',
        }),
        defineField({
          name: 'content',
          title: 'Section Content',
          type: 'text',
          rows: 3,
          initialValue: 'Inspired to try your own guitar modifications or building projects? Contact Kinloch Nelson for guidance, workshops, or collaborative experimentation.',
        }),
        defineField({
          name: 'motto',
          title: 'Contact Section Motto',
          type: 'string',
          initialValue: 'Remember: "Do try this at home... Have fun. Twang!"',
        }),
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
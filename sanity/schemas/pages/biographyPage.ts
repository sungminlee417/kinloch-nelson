import { defineType, defineField } from 'sanity'
import { User } from 'lucide-react'

export default defineType({
  name: 'biographyPage',
  title: 'Biography Page',
  type: 'document',
  icon: User,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Biography',
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
          initialValue: 'About Kinloch Nelson',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'Virtuosic fingerstyle guitarist blending classical technique with jazz sensibilities',
        }),
      ],
    }),

    defineField({
      name: 'fullBio',
      title: 'Full Biography',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full biography with rich text formatting',
    }),

    defineField({
      name: 'genres',
      title: 'Musical Genres',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'instruments',
      title: 'Instruments',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'achievements',
      title: 'Achievements & Recognition',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'degree',
              title: 'Degree/Certificate',
              type: 'string',
            }),
            defineField({
              name: 'institution',
              title: 'Institution',
              type: 'string',
            }),
            defineField({
              name: 'year',
              title: 'Year',
              type: 'string',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'influences',
      title: 'Musical Influences',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'images',
      title: 'Photo Gallery',
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
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Biography Page',
        subtitle: 'Artist biography and background',
      }
    },
  },
})
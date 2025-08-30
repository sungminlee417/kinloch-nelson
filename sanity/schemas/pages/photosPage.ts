import { defineType, defineField } from 'sanity'
import { Camera } from 'lucide-react'

export default defineType({
  name: 'photosPage',
  title: 'Photos Page',
  type: 'document',
  icon: Camera,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Photos',
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
          initialValue: 'Photo Gallery',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'Performance moments, guitar artistry, and behind-the-scenes glimpses of musical life',
        }),
      ],
    }),

    defineField({
      name: 'categories',
      title: 'Photo Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Category Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Category Description',
              type: 'string',
            }),
            defineField({
              name: 'icon',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Music (Concerts)', value: 'Music' },
                  { title: 'Camera (General)', value: 'Camera' },
                  { title: 'Image (Collection)', value: 'Image' },
                  { title: 'Users (People)', value: 'Users' },
                ],
              },
              initialValue: 'Camera',
            }),
            defineField({
              name: 'photos',
              title: 'Photos',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Photo Title',
                      type: 'string',
                      validation: Rule => Rule.required(),
                    }),
                    defineField({
                      name: 'description',
                      title: 'Photo Description',
                      type: 'string',
                    }),
                    defineField({
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                      options: {
                        hotspot: true,
                      },
                    }),
                    defineField({
                      name: 'photographer',
                      title: 'Photographer Credit',
                      type: 'string',
                    }),
                    defineField({
                      name: 'order',
                      title: 'Display Order',
                      type: 'number',
                      validation: Rule => Rule.integer().positive(),
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'description',
                      media: 'image',
                    },
                  },
                },
              ],
            }),
            defineField({
              name: 'order',
              title: 'Category Display Order',
              type: 'number',
              validation: Rule => Rule.integer().positive(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              photos: 'photos',
            },
            prepare({ title, subtitle, photos }) {
              return {
                title,
                subtitle: `${subtitle} - ${photos?.length || 0} photos`,
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'pressSection',
      title: 'Press Materials Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Press Materials & Posters',
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          initialValue: 'High-resolution photos and promotional materials available for press and media use.',
        }),
        defineField({
          name: 'highResTitle',
          title: 'High-Res Photos Title',
          type: 'string',
          initialValue: 'High-Resolution Photos',
        }),
        defineField({
          name: 'highResDescription',
          title: 'High-Res Photos Description',
          type: 'string',
          initialValue: 'Professional photos suitable for print and digital media',
        }),
        defineField({
          name: 'postersTitle',
          title: 'Posters Title',
          type: 'string',
          initialValue: 'Promotional Posters',
        }),
        defineField({
          name: 'postersDescription',
          title: 'Posters Description',
          type: 'string',
          initialValue: 'Concert posters and promotional graphics',
        }),
        defineField({
          name: 'externalGalleryUrl',
          title: 'External Gallery URL',
          type: 'url',
          description: 'Link to external photo gallery',
        }),
      ],
    }),

    defineField({
      name: 'mediaSection',
      title: 'Media Contact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'For Media & Press',
        }),
        defineField({
          name: 'content',
          title: 'Section Content',
          type: 'text',
          initialValue: 'All photos are available for media use. For specific image requests or additional materials, please contact us directly.',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      categories: 'categories',
    },
    prepare({ categories }) {
      return {
        title: 'Photos Page',
        subtitle: `${categories?.length || 0} categories`,
      }
    },
  },
})
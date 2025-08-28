import { defineType, defineField } from 'sanity'
import { MessageCircle } from 'lucide-react'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon: MessageCircle,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Contact',
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
          initialValue: 'Get in Touch',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'For bookings, collaborations, lessons, or general inquiries',
        }),
      ],
    }),

    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Email',
          type: 'email',
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string',
          description: 'e.g., Rochester, NY',
        }),
      ],
    }),

    defineField({
      name: 'contactCategories',
      title: 'Contact Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Category Title',
              type: 'string',
              description: 'e.g., Booking Inquiries',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'contactEmail',
              title: 'Contact Email',
              type: 'email',
              description: 'Specific email for this category (optional)',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Calendar', value: 'calendar' },
                  { title: 'Music', value: 'music' },
                  { title: 'Book', value: 'book' },
                  { title: 'Mic', value: 'mic' },
                  { title: 'Mail', value: 'mail' },
                ],
              },
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
        defineField({
          name: 'spotify',
          title: 'Spotify',
          type: 'url',
        }),
        defineField({
          name: 'bandcamp',
          title: 'Bandcamp',
          type: 'url',
        }),
      ],
    }),

    defineField({
      name: 'additionalInfo',
      title: 'Additional Information',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Any additional contact information or instructions',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Contact Page',
        subtitle: 'Contact information and booking details',
      }
    },
  },
})
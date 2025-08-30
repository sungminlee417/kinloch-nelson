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
          initialValue: 'Contact & Booking',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'Get in touch for performance bookings, lessons, or general inquiries',
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
          initialValue: 'kinloch@rochester.rr.com',
        }),
        defineField({
          name: 'phone',
          title: 'Studio Phone',
          type: 'string',
          initialValue: '585-385-3103',
        }),
        defineField({
          name: 'address',
          title: 'Mailing Address',
          type: 'text',
          rows: 3,
          initialValue: 'PO Box 93331\nRochester, New York 14692',
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string',
          description: 'e.g., Rochester, NY',
          initialValue: 'Rochester, New York',
        }),
        defineField({
          name: 'responseTime',
          title: 'Response Time',
          type: 'string',
          initialValue: 'Usually within 24-48 hours',
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
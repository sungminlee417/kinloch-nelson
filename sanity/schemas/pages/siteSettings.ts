import { defineType, defineField } from 'sanity'
import { Settings } from 'lucide-react'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: Settings,
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Site Settings',
      readOnly: true,
    }),

    defineField({
      name: 'siteTitle',
      title: 'Website Title',
      type: 'string',
      description: 'The main title of the website',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      description: 'SEO description for the website',
    }),

    defineField({
      name: 'keywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'ogImage',
      title: 'Default Social Share Image',
      type: 'image',
      description: 'Image used when sharing the site on social media',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Small icon for browser tabs',
    }),

    defineField({
      name: 'donationLink',
      title: 'Donation Link',
      type: 'url',
      description: 'Link to donation platform (e.g., Venmo, PayPal)',
    }),


    defineField({
      name: 'analyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'Google Analytics tracking ID',
    }),

    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2024 Kinloch Nelson. All rights reserved.',
    }),

    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
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
              type: 'string',
              description: 'Internal path (e.g., /press) or external URL',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'maintenanceMode',
      title: 'Maintenance Mode',
      type: 'boolean',
      description: 'Enable to show maintenance message',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'siteTitle',
      subtitle: 'siteDescription',
    },
    prepare({ title, subtitle }) {
      return {
        title: 'Site Settings',
        subtitle: title || 'Configure global site settings',
      }
    },
  },
})
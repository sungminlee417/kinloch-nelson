import { defineType, defineField } from 'sanity'
import { ExternalLink } from 'lucide-react'

export default defineType({
  name: 'linksPage',
  title: 'Links Page',
  type: 'document',
  icon: ExternalLink,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Links',
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
          initialValue: 'Quick Links',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'Find me across the web - music, social media, and more',
        }),
      ],
    }),

    defineField({
      name: 'linkCategories',
      title: 'Link Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'categoryTitle',
              title: 'Category Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Category Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Link Title',
                      type: 'string',
                      validation: Rule => Rule.required(),
                    }),
                    defineField({
                      name: 'url',
                      title: 'URL',
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
                      name: 'icon',
                      title: 'Icon',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'YouTube', value: 'youtube' },
                          { title: 'Spotify', value: 'spotify' },
                          { title: 'Facebook', value: 'facebook' },
                          { title: 'Instagram', value: 'instagram' },
                          { title: 'Bandcamp', value: 'bandcamp' },
                          { title: 'Website', value: 'website' },
                          { title: 'Email', value: 'email' },
                          { title: 'Calendar', value: 'calendar' },
                          { title: 'Music', value: 'music' },
                          { title: 'External Link', value: 'external-link' },
                        ],
                      },
                    }),
                    defineField({
                      name: 'isPrimary',
                      title: 'Primary Link',
                      type: 'boolean',
                      description: 'Highlight this link',
                      initialValue: false,
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'title',
                      url: 'url',
                      primary: 'isPrimary',
                    },
                    prepare({ title, url, primary }) {
                      return {
                        title: `${primary ? '⭐ ' : ''}${title}`,
                        subtitle: url,
                      }
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'categoryTitle',
              links: 'links',
            },
            prepare({ title, links }) {
              return {
                title,
                subtitle: `${links?.length || 0} links`,
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'featuredLinks',
      title: 'Featured Links',
      type: 'array',
      description: 'Highlight important links at the top of the page',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Link Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
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
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Visit',
            }),
            defineField({
              name: 'backgroundColor',
              title: 'Background Color',
              type: 'string',
              options: {
                list: [
                  { title: 'Blue', value: 'blue' },
                  { title: 'Green', value: 'green' },
                  { title: 'Purple', value: 'purple' },
                  { title: 'Red', value: 'red' },
                  { title: 'Yellow', value: 'yellow' },
                  { title: 'Gray', value: 'gray' },
                ],
              },
              initialValue: 'blue',
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      categories: 'linkCategories',
    },
    prepare({ categories }) {
      const totalLinks = categories?.reduce((total: number, category: any) => {
        return total + (category.links?.length || 0)
      }, 0) || 0

      return {
        title: 'Links Page',
        subtitle: `${totalLinks} total links`,
      }
    },
  },
})
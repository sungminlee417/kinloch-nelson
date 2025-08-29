import { defineType, defineField } from 'sanity'
import { ExternalLink } from 'lucide-react'

export default defineType({
  name: 'mediaFeature',
  title: 'Media Feature',
  type: 'document',
  icon: ExternalLink,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the publication or media outlet',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the feature or article',
    }),

    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Link to the article, podcast, or media feature',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'date',
      description: 'When this feature was published',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Press Article', value: 'press' },
          { title: 'Podcast', value: 'podcast' },
          { title: 'Magazine Feature', value: 'magazine' },
          { title: 'Interview', value: 'interview' },
          { title: 'Review', value: 'review' },
          { title: 'Video Feature', value: 'video' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'press',
    }),

    defineField({
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this media feature on the homepage',
      initialValue: false,
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order for displaying (lower numbers appear first)',
      validation: Rule => Rule.min(0),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      category: 'category',
      isFeatured: 'isFeatured',
    },
    prepare({ title, subtitle, category, isFeatured }) {
      return {
        title: title || 'Untitled Media Feature',
        subtitle: `${category || 'press'} ${isFeatured ? '(Featured)' : ''}`,
        description: subtitle,
      }
    },
  },

  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [
        { field: 'order', direction: 'asc' },
        { field: '_createdAt', direction: 'desc' }
      ]
    },
    {
      title: 'Publication Date',
      name: 'publicationDate',
      by: [
        { field: 'publicationDate', direction: 'desc' },
        { field: '_createdAt', direction: 'desc' }
      ]
    },
  ],
})
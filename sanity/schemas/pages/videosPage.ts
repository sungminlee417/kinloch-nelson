import { defineType, defineField } from 'sanity'
import { Play } from 'lucide-react'

export default defineType({
  name: 'videosPage',
  title: 'Videos Page',
  type: 'document',
  icon: Play,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Videos',
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
          initialValue: 'Video Collection',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'Complete collection of performances, interviews, and educational content',
        }),
      ],
    }),

    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Video Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'youtubeUrl',
              title: 'YouTube URL',
              type: 'url',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Performance', value: 'performance' },
                  { title: 'Tutorial', value: 'tutorial' },
                  { title: 'Behind the Scenes', value: 'behind-the-scenes' },
                  { title: 'Interview', value: 'interview' },
                  { title: 'Collaboration', value: 'collaboration' },
                ],
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'publishedAt',
              title: 'Published Date',
              type: 'date',
            }),
            defineField({
              name: 'isFeatured',
              title: 'Featured Video',
              type: 'boolean',
              description: 'Show this video on the homepage',
              initialValue: false,
            }),
            defineField({
              name: 'order',
              title: 'Display Order',
              type: 'number',
              description: 'Lower numbers appear first',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'category',
              featured: 'isFeatured',
            },
            prepare({ title, subtitle, featured }) {
              return {
                title: `${featured ? '⭐ ' : ''}${title}`,
                subtitle,
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'youtubeChannel',
      title: 'YouTube Channel',
      type: 'object',
      fields: [
        defineField({
          name: 'channelUrl',
          title: 'Channel URL',
          type: 'url',
          description: 'Link to YouTube channel',
        }),
        defineField({
          name: 'callToAction',
          title: 'Call to Action',
          type: 'string',
          initialValue: 'Subscribe for More Videos',
        }),
        defineField({
          name: 'description',
          title: 'Channel Description',
          type: 'text',
          rows: 2,
          initialValue: 'New performances, tutorials, and behind-the-scenes content are regularly added to the YouTube channel.',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      videos: 'videos',
    },
    prepare({ videos }) {
      return {
        title: 'Videos Page',
        subtitle: `${videos?.length || 0} videos`,
      }
    },
  },
})
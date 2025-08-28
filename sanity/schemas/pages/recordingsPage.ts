import { defineType, defineField } from 'sanity'
import { Disc3 } from 'lucide-react'

export default defineType({
  name: 'recordingsPage',
  title: 'Recordings Page',
  type: 'document',
  icon: Disc3,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Recordings',
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
          initialValue: 'Studio Recordings',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'Original compositions and interpretations captured in the studio',
        }),
      ],
    }),

    defineField({
      name: 'recordings',
      title: 'Recordings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Recording Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'artist',
              title: 'Artist/Composer',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'audioFile',
              title: 'Audio File',
              type: 'file',
              options: {
                accept: 'audio/*',
              },
            }),
            defineField({
              name: 'coverImage',
              title: 'Cover Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'genre',
              title: 'Genre',
              type: 'string',
              options: {
                list: [
                  { title: 'Classical', value: 'classical' },
                  { title: 'Jazz', value: 'jazz' },
                  { title: 'Folk', value: 'folk' },
                  { title: 'Original', value: 'original' },
                  { title: 'Arrangement', value: 'arrangement' },
                ],
              },
            }),
            defineField({
              name: 'duration',
              title: 'Duration',
              type: 'string',
              description: 'e.g., 3:45',
            }),
            defineField({
              name: 'recordedAt',
              title: 'Recording Date',
              type: 'date',
            }),
            defineField({
              name: 'studio',
              title: 'Studio Location',
              type: 'string',
            }),
            defineField({
              name: 'credits',
              title: 'Credits',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                    }),
                    defineField({
                      name: 'role',
                      title: 'Role',
                      type: 'string',
                      description: 'e.g., Producer, Engineer, Mastered by',
                    }),
                  ],
                },
              ],
            }),
            defineField({
              name: 'streamingLinks',
              title: 'Streaming Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'platform',
                      title: 'Platform',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Spotify', value: 'spotify' },
                          { title: 'Apple Music', value: 'apple' },
                          { title: 'Bandcamp', value: 'bandcamp' },
                          { title: 'SoundCloud', value: 'soundcloud' },
                        ],
                      },
                    }),
                    defineField({
                      name: 'url',
                      title: 'URL',
                      type: 'url',
                    }),
                  ],
                },
              ],
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
              artist: 'artist',
              genre: 'genre',
            },
            prepare({ title, artist, genre }) {
              return {
                title,
                subtitle: `${artist || 'Kinloch Nelson'} - ${genre || 'Recording'}`,
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
      recordings: 'recordings',
    },
    prepare({ recordings }) {
      return {
        title: 'Recordings Page',
        subtitle: `${recordings?.length || 0} recordings`,
      }
    },
  },
})
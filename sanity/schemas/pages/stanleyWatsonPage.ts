import { defineType, defineField } from 'sanity'
import { Users } from 'lucide-react'

export default defineType({
  name: 'stanleyWatsonPage',
  title: 'Stanley Watson Page',
  type: 'document',
  icon: Users,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Stanley Watson',
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
          initialValue: 'Stanley Watson Duo',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'A unique guitar and voice collaboration blending jazz, folk, and original compositions',
        }),
      ],
    }),

    defineField({
      name: 'duoInfo',
      title: 'Duo Information',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Duo Description',
          type: 'array',
          of: [{ type: 'block' }],
        }),
        defineField({
          name: 'members',
          title: 'Duo Members',
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
                  name: 'instrument',
                  title: 'Instrument/Role',
                  type: 'string',
                }),
                defineField({
                  name: 'bio',
                  title: 'Short Bio',
                  type: 'text',
                  rows: 3,
                }),
                defineField({
                  name: 'photo',
                  title: 'Photo',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'repertoire',
      title: 'Repertoire',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Repertoire Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'songs',
          title: 'Song List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Song Title',
                  type: 'string',
                }),
                defineField({
                  name: 'composer',
                  title: 'Composer/Artist',
                  type: 'string',
                }),
                defineField({
                  name: 'genre',
                  title: 'Genre',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Jazz Standard', value: 'jazz' },
                      { title: 'Folk', value: 'folk' },
                      { title: 'Original', value: 'original' },
                      { title: 'Classical', value: 'classical' },
                    ],
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'recordings',
      title: 'Duo Recordings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Recording Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
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
              name: 'releaseDate',
              title: 'Release Date',
              type: 'date',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'performances',
      title: 'Upcoming Performances',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Event Title',
              type: 'string',
            }),
            defineField({
              name: 'date',
              title: 'Date & Time',
              type: 'datetime',
            }),
            defineField({
              name: 'venue',
              title: 'Venue',
              type: 'string',
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
            }),
            defineField({
              name: 'ticketLink',
              title: 'Ticket Link',
              type: 'url',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'videos',
      title: 'Performance Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Video Title',
              type: 'string',
            }),
            defineField({
              name: 'youtubeUrl',
              title: 'YouTube URL',
              type: 'url',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'bookingInfo',
      title: 'Booking Information',
      type: 'object',
      fields: [
        defineField({
          name: 'bookingText',
          title: 'Booking Text',
          type: 'text',
          rows: 3,
          initialValue: 'The Stanley Watson Duo is available for concerts, private events, and festivals. Contact us for booking inquiries.',
        }),
        defineField({
          name: 'contactEmail',
          title: 'Booking Email',
          type: 'email',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Stanley Watson Duo Page',
        subtitle: 'Guitar and voice collaboration',
      }
    },
  },
})
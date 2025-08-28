import { defineType, defineField } from 'sanity'
import { Headphones } from 'lucide-react'

export default defineType({
  name: 'recordingStudioPage',
  title: 'Recording Studio Page',
  type: 'document',
  icon: Headphones,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Recording Studio',
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
          initialValue: 'Recording Studio Services',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'Professional recording, mixing, and production services',
        }),
      ],
    }),

    defineField({
      name: 'studioInfo',
      title: 'Studio Information',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Studio Description',
          type: 'array',
          of: [{ type: 'block' }],
        }),
        defineField({
          name: 'location',
          title: 'Studio Location',
          type: 'string',
        }),
        defineField({
          name: 'features',
          title: 'Studio Features',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'pricing',
              title: 'Pricing Information',
              type: 'string',
              description: 'e.g., $75/hour, Contact for quote',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Microphone', value: 'microphone' },
                  { title: 'Headphones', value: 'headphones' },
                  { title: 'Music Note', value: 'music-note' },
                  { title: 'Waveform', value: 'waveform' },
                ],
              },
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'equipment',
      title: 'Equipment List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'category',
              title: 'Equipment Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Microphones', value: 'microphones' },
                  { title: 'Audio Interface', value: 'interface' },
                  { title: 'Monitoring', value: 'monitoring' },
                  { title: 'Software', value: 'software' },
                  { title: 'Instruments', value: 'instruments' },
                ],
              },
            }),
            defineField({
              name: 'items',
              title: 'Equipment Items',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'portfolio',
      title: 'Studio Portfolio',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'projectTitle',
              title: 'Project Title',
              type: 'string',
            }),
            defineField({
              name: 'artist',
              title: 'Artist/Client',
              type: 'string',
            }),
            defineField({
              name: 'role',
              title: 'My Role',
              type: 'string',
              description: 'e.g., Recording Engineer, Producer, Mixing',
            }),
            defineField({
              name: 'audioSample',
              title: 'Audio Sample',
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
          initialValue: 'Ready to bring your musical vision to life? Contact me to discuss your project and schedule studio time.',
        }),
        defineField({
          name: 'contactEmail',
          title: 'Booking Email',
          type: 'email',
        }),
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        }),
        defineField({
          name: 'availability',
          title: 'Availability Notes',
          type: 'text',
          rows: 2,
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      services: 'services',
    },
    prepare({ services }) {
      return {
        title: 'Recording Studio Page',
        subtitle: `${services?.length || 0} services offered`,
      }
    },
  },
})
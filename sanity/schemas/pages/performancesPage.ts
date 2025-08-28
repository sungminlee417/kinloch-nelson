import { defineType, defineField } from 'sanity'
import { Calendar } from 'lucide-react'

export default defineType({
  name: 'performancesPage',
  title: 'Performances Page',
  type: 'document',
  icon: Calendar,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Performances',
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
          initialValue: 'Performance Calendar',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'Join me for upcoming performances in Rochester, NY and surrounding areas',
        }),
      ],
    }),

    defineField({
      name: 'performances',
      title: 'Performances',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Event Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'date',
              title: 'Date & Time',
              type: 'datetime',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'venue',
              title: 'Venue',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
              description: 'City, State',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Event Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'ticketLink',
              title: 'Ticket/RSVP Link',
              type: 'url',
              description: 'Link to tickets or use mailto: for RSVP',
            }),
            defineField({
              name: 'isFeatured',
              title: 'Featured Event',
              type: 'boolean',
              description: 'Highlight this event',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              venue: 'venue',
              date: 'date',
              featured: 'isFeatured',
            },
            prepare({ title, venue, date, featured }) {
              return {
                title: `${featured ? '⭐ ' : ''}${title}`,
                subtitle: `${venue} - ${date ? new Date(date).toLocaleDateString() : 'Date TBD'}`,
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'bookingInfo',
      title: 'Booking Information',
      type: 'object',
      fields: [
        defineField({
          name: 'showBookingSection',
          title: 'Show Booking Section',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'bookingText',
          title: 'Booking Text',
          type: 'text',
          rows: 2,
          initialValue: 'Available for private events, concerts, and festivals. Contact for booking inquiries.',
        }),
        defineField({
          name: 'bookingEmail',
          title: 'Booking Email',
          type: 'email',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      performances: 'performances',
    },
    prepare({ performances }) {
      const upcoming = performances?.filter((p: any) => 
        new Date(p.date) >= new Date()
      ).length || 0
      return {
        title: 'Performances Page',
        subtitle: `${upcoming} upcoming shows`,
      }
    },
  },
})
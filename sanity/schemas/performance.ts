export default {
  name: 'performance',
  title: 'Performance',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'ticketLink',
      title: 'Ticket Link',
      type: 'url',
    },
    {
      name: 'isFeatured',
      title: 'Featured Event',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      venue: 'venue',
      media: 'image',
    },
    prepare(selection: any) {
      const {title, date, venue, media} = selection
      return {
        title,
        subtitle: `${new Date(date).toLocaleDateString()} - ${venue}`,
        media,
      }
    },
  },
}
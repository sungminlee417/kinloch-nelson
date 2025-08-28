export default {
  name: 'biography',
  title: 'Biography',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Artist Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short description (e.g., "Fingerstyle Guitar, Finger Picking")',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'shortBio',
      title: 'Short Biography',
      type: 'text',
      description: 'Brief bio for hero section',
    },
    {
      name: 'fullBio',
      title: 'Full Biography',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Complete biography with rich text',
    },
    {
      name: 'influences',
      title: 'Musical Influences',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'instruments',
      title: 'Instruments',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'achievements',
      title: 'Notable Achievements',
      type: 'array',
      of: [{type: 'text'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline',
      media: 'profileImage',
    },
  },
}
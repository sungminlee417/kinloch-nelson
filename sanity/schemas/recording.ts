export default {
  name: 'recording',
  title: 'Recording',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Album Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
    },
    {
      name: 'coverImage',
      title: 'Album Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'tracks',
      title: 'Tracks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Track Title',
              type: 'string',
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
            },
            {
              name: 'audioFile',
              title: 'Audio File URL',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: 'spotifyLink',
      title: 'Spotify Link',
      type: 'url',
    },
    {
      name: 'appleMusicLink',
      title: 'Apple Music Link',
      type: 'url',
    },
    {
      name: 'bandcampLink',
      title: 'Bandcamp Link',
      type: 'url',
    },
    {
      name: 'isFeatured',
      title: 'Featured Album',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'coverImage',
    },
    prepare(selection: any) {
      const {title, date, media} = selection
      return {
        title,
        subtitle: date ? `Released: ${date}` : 'No release date',
        media,
      }
    },
  },
}
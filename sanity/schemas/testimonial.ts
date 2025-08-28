export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publication',
      title: 'Publication/Organization',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Source Link',
      type: 'url',
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isFeatured',
      title: 'Featured Testimonial',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      quote: 'quote',
      author: 'author',
      publication: 'publication',
      media: 'authorImage',
    },
    prepare(selection: any) {
      const {quote, author, publication, media} = selection
      return {
        title: `${author} - ${publication}`,
        subtitle: quote.substring(0, 100) + '...',
        media,
      }
    },
  },
}
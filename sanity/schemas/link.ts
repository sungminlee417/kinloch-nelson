export default {
  name: 'link',
  title: 'External Link',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Link Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Social Media', value: 'social'},
          {title: 'Streaming Platform', value: 'streaming'},
          {title: 'Music Store', value: 'store'},
          {title: 'News/Press', value: 'press'},
          {title: 'Podcast', value: 'podcast'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon/Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isExternal',
      title: 'Opens in New Tab',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      url: 'url',
      media: 'icon',
    },
    prepare(selection: any) {
      const {title, category, url, media} = selection
      return {
        title,
        subtitle: `${category} - ${url}`,
        media,
      }
    },
  },
}
export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Photo Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Performance', value: 'performance'},
          {title: 'Studio', value: 'studio'},
          {title: 'Portrait', value: 'portrait'},
          {title: 'Behind the Scenes', value: 'bts'},
          {title: 'Gear', value: 'gear'},
        ],
      },
    },
    {
      name: 'dateTaken',
      title: 'Date Taken',
      type: 'date',
    },
    {
      name: 'photographer',
      title: 'Photographer',
      type: 'string',
    },
    {
      name: 'isFeatured',
      title: 'Featured Photo',
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
      title: 'title',
      category: 'category',
      media: 'image',
    },
    prepare(selection: any) {
      const {title, category, media} = selection
      return {
        title,
        subtitle: category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Photo',
        media,
      }
    },
  },
}
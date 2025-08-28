export default {
  name: 'workshop',
  title: 'Workshop & Instruction',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Workshop Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Group Workshop', value: 'group'},
          {title: 'Private Instruction', value: 'private'},
          {title: 'Online Course', value: 'online'},
          {title: 'Masterclass', value: 'masterclass'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },
    {
      name: 'skillLevel',
      title: 'Skill Level',
      type: 'string',
      options: {
        list: [
          {title: 'Beginner', value: 'beginner'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'},
          {title: 'All Levels', value: 'all'},
        ],
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'schedule',
      title: 'Schedule/Dates',
      type: 'text',
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Workshop Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isActive',
      title: 'Currently Offering',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      skillLevel: 'skillLevel',
      media: 'image',
    },
    prepare(selection: any) {
      const {title, type, skillLevel, media} = selection
      return {
        title,
        subtitle: `${type} - ${skillLevel}`,
        media,
      }
    },
  },
}
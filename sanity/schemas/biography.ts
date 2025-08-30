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
      description: 'Short description (e.g., "Solo fingerstyle guitarist")',
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
      name: 'professionalOverview',
      title: 'Professional Overview',
      type: 'text',
      description: 'Career overview and years of experience',
    },
    {
      name: 'careerStart',
      title: 'Career Start Year',
      type: 'number',
      description: 'Year career began',
    },
    {
      name: 'musicalStyle',
      title: 'Musical Style Description',
      type: 'text',
      description: 'Description of musical style and approach',
    },
    {
      name: 'fullBio',
      title: 'Full Biography',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Complete biography with rich text',
    },
    {
      name: 'notableCollaborations',
      title: 'Notable Collaborations',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of notable musicians performed with',
    },
    {
      name: 'education',
      title: 'Educational Background',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'subject',
              title: 'Subject',
              type: 'string',
              description: 'e.g., Classical Guitar, Jazz Guitar',
            },
            {
              name: 'instructor',
              title: 'Instructor',
              type: 'string',
            },
            {
              name: 'institution',
              title: 'Institution',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'teachingExperience',
      title: 'Teaching Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'role',
              title: 'Role/Position',
              type: 'string',
            },
            {
              name: 'institution',
              title: 'Institution',
              type: 'string',
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
              description: 'e.g., 25 years, 2010-2015',
            },
          ],
        },
      ],
    },
    {
      name: 'genres',
      title: 'Musical Genres',
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
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Achievement Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'year',
              title: 'Year',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      name: 'recordLabels',
      title: 'Record Labels',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Labels that have featured recordings',
    },
    {
      name: 'currentActivities',
      title: 'Current Activities',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Current Activities',
        },
        {
          name: 'paragraph1',
          title: 'First Paragraph',
          type: 'text',
          rows: 4,
          initialValue: 'Today, Kinloch Nelson continues to perform, record, and teach from his base in Rochester, New York. His ongoing work includes live performances, recording projects, educational workshops, and collaborations with other musicians who share his passion for acoustic music.',
        },
        {
          name: 'paragraph2',
          title: 'Second Paragraph',
          type: 'text',
          rows: 4,
          initialValue: 'His commitment to the art of fingerstyle guitar remains as strong as ever, with new projects and performances that continue to showcase the evolution of his musical voice.',
        },
      ],
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
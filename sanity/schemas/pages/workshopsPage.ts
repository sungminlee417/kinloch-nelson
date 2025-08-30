import { defineType, defineField } from 'sanity'
import { GraduationCap } from 'lucide-react'

export default defineType({
  name: 'workshopsPage',
  title: 'Workshops & Private Instruction Page',
  type: 'document',
  icon: GraduationCap,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Workshops & Private Instruction',
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
          initialValue: 'Workshops & Private Instruction',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'Learn fingerstyle guitar, classical techniques, and modern folk arrangements with personalized instruction',
        }),
      ],
    }),

    defineField({
      name: 'workshopTopics',
      title: 'Workshop Topics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Workshop Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Music', value: 'Music' },
                  { title: 'BookOpen', value: 'BookOpen' },
                  { title: 'Users', value: 'Users' },
                  { title: 'Guitar', value: 'Guitar' },
                ],
              },
              initialValue: 'Music',
            }),
            defineField({
              name: 'order',
              title: 'Display Order',
              type: 'number',
              validation: Rule => Rule.integer().positive(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'privateInstruction',
      title: 'Private Instruction',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Private Instruction via Skype/Zoom',
        }),
        defineField({
          name: 'lessonTopics',
          title: 'Lesson Topics',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List of topics covered in private lessons',
        }),
        defineField({
          name: 'pricing',
          title: 'Lesson Pricing',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'duration',
                  title: 'Lesson Duration',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'price',
                  title: 'Price',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'recommended',
                  title: 'Recommended Option',
                  type: 'boolean',
                  initialValue: false,
                }),
              ],
              preview: {
                select: {
                  title: 'duration',
                  subtitle: 'price',
                  recommended: 'recommended',
                },
                prepare({ title, subtitle, recommended }) {
                  return {
                    title: `${recommended ? '⭐ ' : ''}${title}`,
                    subtitle,
                  }
                },
              },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'teachingPhilosophy',
      title: 'Teaching Philosophy',
      type: 'object',
      fields: [
        defineField({
          name: 'quote',
          title: 'Philosophy Quote',
          type: 'text',
          initialValue: 'In private lessons, I try to meet a student\'s needs. If I can, I do. If not, I send them somewhere else.',
        }),
        defineField({
          name: 'description',
          title: 'Philosophy Description',
          type: 'text',
          rows: 4,
          initialValue: 'With extensive musical experience spanning multiple genres including folk, rock, and classical music, Kinloch Nelson brings decades of playing and teaching experience to each lesson. Having begun playing guitar in the 1950s, he offers personalized instruction tailored to each student\'s goals and interests.',
        }),
      ],
    }),

    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Ready to Begin?',
        }),
        defineField({
          name: 'content',
          title: 'Section Content',
          type: 'text',
          initialValue: 'Contact Kinloch Nelson to schedule your workshop or private instruction session. Lessons can be arranged by phone or email at your convenience.',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      workshops: 'workshopTopics',
    },
    prepare({ workshops }) {
      return {
        title: 'Workshops & Private Instruction Page',
        subtitle: `${workshops?.length || 0} workshop topics`,
      }
    },
  },
})
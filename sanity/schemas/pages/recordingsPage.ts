import { defineType, defineField } from 'sanity'
import { Disc3 } from 'lucide-react'

export default defineType({
  name: 'recordingsPage',
  title: 'Recordings Page',
  type: 'document',
  icon: Disc3,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Recordings',
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
          initialValue: 'Studio Recordings',
        }),
        defineField({
          name: 'subtitle',
          title: 'Header Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'Original compositions and interpretations captured in the studio',
        }),
      ],
    }),

    defineField({
      name: 'albums',
      title: 'Albums & Recordings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Album Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
              description: 'e.g., "Recordings 1968-1970"',
            }),
            defineField({
              name: 'releaseYear',
              title: 'Release Year',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Album Description',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'coverImage',
              title: 'Album Cover',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'tracks',
              title: 'Track Listing',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'trackNumber',
                      title: 'Track Number',
                      type: 'number',
                    }),
                    defineField({
                      name: 'title',
                      title: 'Track Title',
                      type: 'string',
                      validation: Rule => Rule.required(),
                    }),
                    defineField({
                      name: 'duration',
                      title: 'Duration',
                      type: 'string',
                      description: 'e.g., 3:45',
                    }),
                    defineField({
                      name: 'mp3Sample',
                      title: 'MP3 Sample',
                      type: 'file',
                      options: {
                        accept: 'audio/mp3',
                      },
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'title',
                      trackNumber: 'trackNumber',
                      duration: 'duration',
                    },
                    prepare({ title, trackNumber, duration }) {
                      return {
                        title: `${trackNumber}. ${title}`,
                        subtitle: duration,
                      }
                    },
                  },
                },
              ],
            }),
            defineField({
              name: 'pricing',
              title: 'Pricing & Purchase',
              type: 'object',
              fields: [
                defineField({
                  name: 'price',
                  title: 'CD Price',
                  type: 'number',
                  initialValue: 15.00,
                }),
                defineField({
                  name: 'shipping',
                  title: 'Shipping Cost',
                  type: 'number',
                  initialValue: 3.50,
                }),
                defineField({
                  name: 'paypalButtonId',
                  title: 'PayPal Button ID',
                  type: 'string',
                  description: 'PayPal buy now button ID',
                }),
                defineField({
                  name: 'availableFormats',
                  title: 'Available Formats',
                  type: 'array',
                  of: [
                    {
                      type: 'string',
                      options: {
                        list: [
                          { title: 'CD', value: 'cd' },
                          { title: 'Digital Download', value: 'digital' },
                          { title: 'Vinyl', value: 'vinyl' },
                        ],
                      },
                    },
                  ],
                }),
              ],
            }),
            defineField({
              name: 'streamingLinks',
              title: 'Streaming Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'platform',
                      title: 'Platform',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Spotify', value: 'spotify' },
                          { title: 'Apple Music', value: 'apple' },
                          { title: 'Bandcamp', value: 'bandcamp' },
                          { title: 'SoundCloud', value: 'soundcloud' },
                          { title: 'Tompkins Square', value: 'tompkinssquare' },
                        ],
                      },
                    }),
                    defineField({
                      name: 'url',
                      title: 'URL',
                      type: 'url',
                    }),
                  ],
                },
              ],
            }),
            defineField({
              name: 'reviews',
              title: 'Reviews & Quotes',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'quote',
                      title: 'Review Quote',
                      type: 'text',
                      rows: 2,
                    }),
                    defineField({
                      name: 'source',
                      title: 'Source',
                      type: 'string',
                      description: 'e.g., Mojo Magazine',
                    }),
                  ],
                },
              ],
            }),
            defineField({
              name: 'type',
              title: 'Album Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Studio Album', value: 'studio' },
                  { title: 'Live Recording', value: 'live' },
                  { title: 'Compilation', value: 'compilation' },
                  { title: 'Book', value: 'book' },
                ],
              },
            }),
            defineField({
              name: 'isFeatured',
              title: 'Featured Album',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'order',
              title: 'Display Order',
              type: 'number',
              description: 'Lower numbers appear first',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
              releaseYear: 'releaseYear',
              type: 'type',
            },
            prepare({ title, subtitle, releaseYear, type }) {
              return {
                title: `${title}${subtitle ? `: ${subtitle}` : ''}`,
                subtitle: `${releaseYear || 'Unknown Year'} - ${type || 'Album'}`,
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'additionalInfo',
      title: 'Additional Information Sections',
      type: 'object',
      fields: [
        defineField({
          name: 'showAdditionalInfo',
          title: 'Show Additional Information Section',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'section1',
          title: 'Section 1',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
              initialValue: 'Musical Journey',
            }),
            defineField({
              name: 'content',
              title: 'Section Content',
              type: 'text',
              rows: 4,
              initialValue: 'These recordings showcase the evolution of Kinloch Nelson\'s fingerstyle technique, spanning decades of musical development. From early archival recordings to contemporary releases, each album represents a chapter in an ongoing musical journey.',
            }),
          ],
        }),
        defineField({
          name: 'section2',
          title: 'Section 2',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
              initialValue: 'Purchase Information',
            }),
            defineField({
              name: 'content',
              title: 'Section Content',
              type: 'text',
              rows: 4,
              initialValue: 'CDs are available for $15.00 plus $3.50 shipping via PayPal. All recordings feature high-quality mastering optimized for both critical listening and casual enjoyment. Digital downloads may be available for select releases.',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'callToAction',
      title: 'Call to Action Section',
      type: 'object',
      fields: [
        defineField({
          name: 'showCallToAction',
          title: 'Show Call to Action Section',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'title',
          title: 'CTA Title',
          type: 'string',
          initialValue: 'Experience the Music',
        }),
        defineField({
          name: 'description',
          title: 'CTA Description',
          type: 'text',
          rows: 3,
          initialValue: 'Listen to sample tracks, stream on your preferred platform, or order physical CDs to experience the full depth and warmth of these fingerstyle guitar recordings.',
        }),
        defineField({
          name: 'primaryButton',
          title: 'Primary Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Browse Albums',
            }),
            defineField({
              name: 'url',
              title: 'Button URL',
              type: 'string',
              initialValue: '#albums',
            }),
          ],
        }),
        defineField({
          name: 'secondaryButton',
          title: 'Secondary Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Contact for Inquiries',
            }),
            defineField({
              name: 'url',
              title: 'Button URL',
              type: 'string',
              initialValue: '/contact',
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      albums: 'albums',
    },
    prepare({ albums }) {
      return {
        title: 'Recordings Page',
        subtitle: `${albums?.length || 0} albums`,
      }
    },
  },
})
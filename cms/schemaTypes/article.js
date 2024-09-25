import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title1',
      type: 'string',
    }),
    defineField({
      name: 'title2',
      type: 'string',
    }),
    defineField({
      name: 'title3',
      type: 'string',
    }),
    defineField({
      name: 'pharagraph1',
      type: 'text',
    }),
    defineField({
      name: 'pharagraph2',
      type: 'text',
    }),
    defineField({
      name: 'pharagraph3',
      type: 'text',
    }),
  ],
})

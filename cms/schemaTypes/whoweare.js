import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'whoweare',
  title: 'Кто мы',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Текст',
      type: 'text',
    }),
  ],
})

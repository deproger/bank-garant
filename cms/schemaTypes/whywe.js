import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'whywe',
  title: 'Почему выбирают нас',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Текст',
      type: 'text',
    }),
  ],
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'otziv',
  title: 'Отзывы',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название банка',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
})

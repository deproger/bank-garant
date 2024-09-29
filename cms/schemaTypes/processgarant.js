import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'processgarant',
  title: 'Процесс получения гарантии',
  type: 'document',
  fields: [
    defineField({
      name: 'step',
      title: 'Номер шага',
      type: 'number',
    }),
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

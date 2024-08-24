import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image of the dish',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'short_description',
      title: ' Short description',
      type: 'string',
    }),

    defineField({
      name: 'price',
      title: 'price of the dish in dollars',
      type: 'number',
    }),
  ],
})

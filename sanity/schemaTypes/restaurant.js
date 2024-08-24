import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      title: 'Restaurant',
      type: 'string',
      name: 'restaurant',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Short description',
      type: 'string',
      name: 'short_description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Image of the restaurant',
      name: 'image',
      type: 'image',
    }),
    defineField({
      title: 'Latitude of the restaurant',
      name: 'latitude',
      type: 'number',
    }),
    defineField({
      title: 'Longitude of the restaurant',
      name: 'longitude',
      type: 'number',
    }),
    defineField({
      title: 'Address of the restaurant',
      name: 'address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Enter a rating from (1 to 5) stars',
      name: 'rating',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a valuae between 1 and 5'),
    }),
    defineField({
      title: 'Category',
      name: 'type',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}],
    }),
    defineField({
      title: 'Dishes',
      name: 'dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
    defineField({
      title: 'Delivery time',
      name: 'delivery_time',
      type: 'number',
    }),
  ],
})

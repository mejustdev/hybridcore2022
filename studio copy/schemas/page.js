export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: "Menu Item Title",
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'hero' },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title = "No title"}) {
      return {
        title,
      };
    },
  },
}

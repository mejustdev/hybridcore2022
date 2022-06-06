// page.js

export default {
  // Setup a 'document' type to house the page builder field

  name: 'page',
  type: 'document',
  title: 'Page',
  // fieldsets: [
  //   {
  //     name: 'general',
  //     title: 'General',
  //     options: { columns: 2, collapsible: true, collapsed: false },
  //   },
  // ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      // fieldset: 'general',
      description: 'Title of the page',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        { type: 'hero' },
        { type: 'iconList' },
        { type: 'textBlock' },
        { type: 'icon' },
        { type: 'mainImage' },
      ],
      hidden: ({ parent }) => parent?.title !== 'Home',
    },
    {
      name: 'teamBuilder',
      type: 'array',
      title: 'Team',
      of: [{ type: 'iconListItem' }],
      hidden: ({ parent }) => parent?.title !== 'Team',
    },
    {
      name: 'advisoryBuilder',
      type: 'array',
      title: 'Advisory',
      of: [{ type: 'iconListItem' }],
      hidden: ({ parent }) => parent?.title !== 'Team',
    },
    {
      type: 'partners',
      name: 'partners',
      title: 'Partners',
      hidden: ({ parent }) => parent?.title !== 'Home',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `${title}`,
      };
    },
  },
};

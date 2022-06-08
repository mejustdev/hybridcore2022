// page.js

export default {
  // Setup a 'document' type to house the page builder field

  name: 'page',
  type: 'document',
  title: 'Page',
  // groups: [
  //   {
  //     name: 'team',
  //     title: 'Team',
  //     hidden: ({ parent }) => parent?.title !== 'Team',
  //   },
  //   {
  //     name: 'advisors',
  //     title: 'Advisors',
  //     hidden: ({ parent }) => parent?.title !== 'Team',
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
      // readOnly: true,
    },
    {
      name: 'headerTitle',
      title: 'Page header title',
      type: 'string',
      // validation: (Rule) => Rule.required(),
      hidden: ({ parent }) => parent?.title === 'Home',
      // group: 'team',
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
        { type: 'textSlider' },
      ],
      hidden: ({ parent }) => parent?.title === 'Team',
    },

    {
      name: 'teamBuilder',
      type: 'array',
      title: 'Team members',
      of: [{ type: 'iconListItem' }],
      hidden: ({ parent }) => parent?.title !== 'Team',
      // group: 'team',
    },
    {
      name: 'advisorsTitle',
      title: 'Title for advisors',
      type: 'string',
      // validation: (Rule) => Rule.required(),
      hidden: ({ parent }) => parent?.title !== 'Team',
      // group: 'advisors',
    },
    {
      name: 'advisoryBuilder',
      type: 'array',
      title: 'Advisory',
      of: [{ type: 'iconListItem' }],
      hidden: ({ parent }) => parent?.title !== 'Team',
      // group: 'advisors',
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

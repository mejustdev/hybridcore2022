export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',

  // fieldsets: [
  //   {
  //     title: 'SEO & metadata',
  //     name: 'metadata',
  //     options: {
  //       collapsible: true,
  //       collapsed: false,
  //     },
  //   },
  //   {
  //     title: 'Social Media',
  //     name: 'social',
  //   },
  //   {
  //     title: 'Website Logo',
  //     name: 'logos',
  //     options: {
  //       collapsible: true,
  //       collapsed: false,
  //     },
  //   },
  // ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    },
    // {
    //   name: 'copyright',
    //   type: 'string',
    //   title: 'Copyright Name',
    //   description: 'Enter company name to appear in footer after ©',
    // },

    {
      title: 'Main logo',
      description: 'Upload your main logo here. ',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
    {
      title: 'Footer Image',
      description: 'Upload your extra footer image here. ',
      name: 'footerImage',
      type: 'logo',
    },
    {
      name: 'footerImageCaption',
      title: 'Image caption',
      type: 'string',
    },
    {
      name: 'address',
      type: 'simpleBlockContent',
      title: 'Address',
    },
  ],
};

export default {
  name: 'logo',
  type: 'image',
  title: 'Logo',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
    },
  },
};

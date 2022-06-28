// import YouTubePreview from '../components/preview/youtube';

export default {
  name: 'embed',
  type: 'object',
  title: 'Page Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
  ],
  preview: {
    select: {
      title: 'title',
      // media: 'image',
    },
  },
};

import CodePenPreview from './preview/codepen';

export default {
  name: 'codepen',
  type: 'object',
  title: 'CodePen Embed',
  preview: {
    select: {
      url: 'url',
    },
    component: CodePenPreview,
  },
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'CodePen URL',
    },
  ],
};

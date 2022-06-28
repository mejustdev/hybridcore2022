import { format } from 'date-fns';
import sanityClient from 'part:@sanity/base/client';
const client = sanityClient.withConfig({ apiVersion: '2021-03-25' });

import { MdPostAdd } from 'react-icons/md';
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: MdPostAdd,
  //   validation: Rule => Rule.custom(async () => {

  //     const result = await client.fetch(`count(*[ _type == 'post' && isHighlighted && !(_id in path("drafts.**")) ])  <= 3`)

  // return result ? true : "You can select maximum 3 featured post, please check highligted posts number"
  //   }),

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Is it text or only video?',
      name: 'posttype',
      type: 'string',
      options: {
        list: [
          { title: 'Text', value: 'text' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Automatically generate from Title of the post',
      options: {
        source: 'title',
        maxLength: 96,
      },
      hidden: ({ parent }) => parent.isParentText === false || parent?.posttype === 'video',
      validation: (Rule) =>
        Rule.required().warning('Please only click the button without typing for now'),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'excerptPortableText',
      hidden: ({ parent }) => parent?.posttype === 'video',
    },

    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      hidden: ({ parent }) => parent?.posttype === 'video',
    },
    // {
    //   title: 'Related Posts',
    //   name: 'relatedPosts',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'post' } }],
    // },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'category' } }],
    // },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText',
      hidden: ({ parent }) => parent?.posttype === 'video',
    },
    { name: 'youtube', type: 'youtube' },
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new->old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'mainImage',
    },
    prepare({ title = 'No title', publishedAt, media }) {
      const dateSegment = format(new Date(publishedAt), 'd/M/yy');
      const path = `${dateSegment}`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date',
      };
    },
  },
};

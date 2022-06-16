import React from 'react';
import { Highlight, InlineCode } from '../marks';

const highlightIcon = () => <span style={{ fontWeight: 'bold' }}>H</span>;
const codeIcon = () => <code style={{ fontWeight: 'bold' }}>C</code>;

export default {
  title: 'Post body',
  name: 'bodyPortableText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          {
            title: 'Highlight',
            value: 'highlight',
            blockEditor: {
              icon: highlightIcon,
              render: Highlight,
            },
          },
          {
            title: 'Inline Code',
            value: 'inlineCode',
            blockEditor: {
              icon: codeIcon,
              render: InlineCode,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            title: 'Internal link',
            name: 'internalLink',
            type: 'object',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'post' },
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
    },
    {
      type: 'mainImage',
      options: { hotspot: true },
    },
    // {
    //   title: 'Code Example',
    //   type: 'code',
    // },
    // { type: 'youtube' },
    // { type: 'instagram' },
    // { type: "codepen" }
  ],
};

import React from 'react';
import MainImage from './mainImage';
import Icon from './icon';

import ReactPlayer from 'react-player';

import BlockContent from '@sanity/block-content-to-react';
import TextBlock from './textBlock';

const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node;
  if (style === 'blockquote') {
    return (
      <blockquote
        style={{
          backgroundColor: 'yellow',
          borderColor: 'currentColor',
          borderLeftWidth: '2px',
          borderRadius: '0.5rem',
          borderRightWidth: '2px',
          display: 'block',
          marginBottom: '0.75rem',
          marginTop: '0',
          paddingBottom: '0.5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '0.5rem',
          position: 'relative',
        }}
      >
        {props.children}
      </blockquote>
    );
  }
  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  link: ({ node }) => <pre> {JSON.stringify(node, null, 2)}</pre>,
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark;
      const href = `/posts/${slug}`;
      return (
        <a className='text-blue-600' href={href}>
          {children}
        </a>
      );
    },
    link: (props) => {
      return (
        <a className='text-red-800' href={props.mark.href}>
          {props.children}
        </a>
      );
    },
    // link: ({ mark, children }) => <pre> {JSON.stringify(children, null, 2)}</pre>,
  },
  types: {
    block: BlockRenderer,
    // textBlock: ({ node }) => <pre> {JSON.stringify(node.text, null, 2)}</pre>,
    textBlock: ({ node }) => <TextBlock content={node.text} />,
    mainImage: ({ node }) => <MainImage mainImage={node} />,
    icon: ({ node }) => <Icon icon={node} />,
    // youtube: ({ node }) => <ReactPlayer className='mx-auto' url={node.url} controls />,
  },
};

export default serializers;

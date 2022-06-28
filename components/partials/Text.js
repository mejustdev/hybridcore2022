import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import serializers from '../serializers';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

function Text({ content, highlighted } = {}) {
  const isHighlighted = highlighted
    ? 'text-gradient bg-gradient-to-r from-green-400 to-blue-500'
    : '';
  return (
    <section className='relative pt-16 px-4 mx-auto max-w-8xl sm:px-6 space-y-16'>
      <div className='max-w-6xl mx-auto text-center'>
        <h1
          className={`mb-4 text-3xl font-extrabold leading-tight tracking-tighter ${isHighlighted}`}
        >
          <BlockContent
            blocks={content}
            serializers={serializers}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          />
        </h1>
      </div>
    </section>
  );
}

export default Text;

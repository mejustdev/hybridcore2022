import React from 'react';
import Link from 'next/link';

import MainImage from '../mainImage';
import HeroImage from './HeroImage';
import BlockContent from '@sanity/block-content-to-react';
import serializers from '../../components/serializers';
import Date from '../../components/date';

const ArticlePost = ({ post }) => {
  const { _id, author, coverImage, posttype, publishedAt, slug, subtitle, title, excerpt } = post;

  return (
    <div key={_id} className='pb-12 md:pb-20'>
      <article className='max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center'>
        <Link href={`/posts/${slug}`} className='relative block group'>
          <a className='relative block group'>
            <div
              className='absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none'
              aria-hidden='true'
            ></div>
            <figure className='relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out'>
              <HeroImage
                mainImage={coverImage}
                width={540}
                height={303}
                // url={slug}
                stil={
                  'absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                }
              />
            </figure>
          </a>
        </Link>
        <div>
          <header>
            <h3 className='h3 text-2xl lg:text-3xl mb-2'>
              <Link href={`/posts/${slug}`}>
                <a className='hover:text-gray-100 transition duration-150 ease-in-out'>{title}</a>
              </Link>
            </h3>
          </header>
          <p className='text-lg text-gray-400 flex-grow'>
            <BlockContent
              blocks={excerpt}
              serializers={serializers}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </p>
          <footer className='flex items-center mt-4'>
            <Link href={`/posts/${slug}`}>
              <HeroImage
                mainImage={author.picture}
                width={40}
                height={40}
                stil={'rounded-full flex-shrink-0 mr-4'}
              />
            </Link>
            <div>
              <Link href={`/posts/${slug}`}>
                <a className='font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out'>
                  {author.name}
                </a>
              </Link>
              <span className='text-gray-700'> - </span>
              <span className='text-gray-500'>
                <Date dateString={publishedAt} />
              </span>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default ArticlePost;

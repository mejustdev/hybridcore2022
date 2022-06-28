import React, { useState } from 'react';

import Link from 'next/link';
import PostBody from 'components/post-body';
import Container from 'components/container';
import Layout from 'components/layout';
import Date from 'components/date';

import { getReusableBlocksSmartSonar } from 'lib/api';
import Icon from 'components/icon';
import MainImage from 'components/mainImage';
import TextBlock from 'components/textBlock';
import TextCarousel from 'components/TextCarousel';
import Samples from 'components/partials/Samples';

export default function SmartSonar({ reusableBlocks, preview }) {
  return (
    <>
      <section className='relative'>
        {/* Background image */}
        <div className='absolute inset-0'>
          {/* <Img
            className='object-cover w-full h-full'
            src={require('../images/logo-3.webp')}
            width='1440'
            height='394'
            alt='About'
          /> */}
          <div className='absolute inset-0 bg-gray-900 opacity-25' aria-hidden='true'></div>
        </div>

        {/* Hero content */}
        <div className='relative max-w-6xl px-4 mx-auto sm:px-6'>
          <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
            <div className='max-w-3xl mx-auto text-center'>
              <h1
                className='mb-4 h1 text-gradient bg-gradient-to-r from-green-400 to-blue-500'
                data-aos='fade-up'
              >
                {reusableBlocks.headerTitle}
              </h1>
            </div>
          </div>
        </div>
        {/* <Wave /> */}
      </section>

      {reusableBlocks?.pageBuilder?.map((block) => (
        <div key={block._key}>
          {/* HERO START -------------------------------------------- */}
          {block._type == 'hero' && (
            <>
              <div>{block.title}</div>
              <div>
                <PostBody content={block?.subtitle} />
              </div>
              <div>
                <MainImage mainImage={block?.mainImage} width={300} />
              </div>
            </>
          )}
          {/* HERO END -------------------------------------------- */}
          {console.log('BB', block)}
          {/* TEXT BLOCK START -------------------------------------------- */}
          {block._type == 'textBlock' && (
            <>
              {/* <TextCarousel block={block} /> */}
              {/* <TextBlock content={block} /> */}
              {/* <div>{block.title}</div>
              <div>
                <PostBody content={block?.subtitle} />
              </div>
              <div>
                <MainImage mainImage={block?.mainImage} width={300} />
              </div> */}
            </>
          )}
          {/* TEXT BLOCK END -------------------------------------------- */}

          {block._type == 'iconList' && (
            <section>
              <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                <div className='py-12 md:py-20 '>
                  {/* Section header */}
                  <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
                    <h2 className='h2 mb-4'>{block.header}</h2>
                    <p className='text-xl text-gray-400'>
                      <PostBody content={block?.subHeader} />
                    </p>
                  </div>
                  {/* Check list */}
                  <div className='max-w-3xl mx-auto pb-16'>
                    <ul className='flex flex-col sm:flex-row flex-wrap justify-center items-center text-lg text-gray-400 -mx-3 -my-2'>
                      {block.items.map((item) => {
                        return (
                          <li className='flex items-center mx-3 my-2'>
                            <svg
                              className='w-6 h-6 mr-3 flex-shrink-0'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <circle
                                className='fill-current text-green-500'
                                cx='12'
                                cy='12'
                                r='12'
                              />
                              <path
                                className='fill-current text-white'
                                d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                              />
                            </svg>
                            <span>{item.header}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* <div>
                  {block.items.map((item) => {
                    return (
                      <div key={item._key}>
                        <div>{item?.header}</div>
                        {<Icon icon={item?.icon} /> }
                        <MainImage mainImage={item?.itemImage} width={300} />
                        <PostBody content={item?.subHeader} />
                      </div>
                    );
                  })}
                </div> */}
                </div>
              </div>
            </section>
          )}

          {block._type == 'icon' && (
            <>
              <Icon icon={block} />
              <div>{block.caption}</div>
            </>
          )}
          {block._type == 'mainImage' && (
            <>
              <MainImage mainImage={block} width={300} />
              <div>{block.caption}</div>
            </>
          )}
          {block._type == 'textSlider' && <TextCarousel text={block.text} />}
        </div>
      ))}

      <Samples />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const reusableBlocks = await getReusableBlocksSmartSonar(preview);

  return {
    props: { reusableBlocks, preview },
    revalidate: 1,
  };
}

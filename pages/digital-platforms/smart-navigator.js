import React, { useState } from 'react';

import Link from 'next/link';
import PostBody from 'components/post-body';
import ListWith from 'components/partials/ListWith';
import Tab from 'components/partials/Tab';
import Container from 'components/container';
import Layout from 'components/layout';
import Date from 'components/date';
import Text from 'components/partials/Text';
import { getReusableBlocksSmartNavigator } from 'lib/api';
import Icon from 'components/icon';
import MainImage from 'components/mainImage';
import TextBlock from 'components/textBlock';
import { useRouter } from 'next/router';
export default function SmartNavigator({ reusableBlocks, preview }) {
  console.log(reusableBlocks);
  const router = useRouter();
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
      <section className='relative max-w-6xl px-4 mx-auto sm:px-6'>
        {reusableBlocks?.pageBuilder?.map((block) => (
          <div key={block._key} className='relative pt-16'>
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
            {block._type == 'textBlock' && <Text content={block} highlighted={block.highlighted} />}
            {/* TEXT BLOCK END -------------------------------------------- */}

            {block._type == 'iconList' &&
              (!block.isTab ? (
                <ListWith header={block.header} content={block.subHeader} items={block.items} />
              ) : (
                <Tab header={block.header} content={block.subHeader} items={block.items} />
              ))}

            {block._type == 'icon' && (
              <>
                <Icon icon={block} />
                <div>{block.caption}</div>
              </>
            )}
            {block._type == 'mainImage' && (
              <div className='flex justify-center items-center'>
                <MainImage mainImage={block} width={300} />
                <div>{block.caption}</div>
              </div>
            )}
            {block._type == 'textSlider' && <TextCarousel text={block.text} />}
          </div>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const reusableBlocks = await getReusableBlocksSmartNavigator(preview);

  return {
    props: { reusableBlocks, preview },
    revalidate: 1,
  };
}

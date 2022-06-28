import React from 'react';

import { getAllPosts, getReusableBlocks } from 'lib/api';

import Icon from 'components/icon';
import MainImage from 'components/mainImage';
import Hero from 'components/partials/Hero';
import Text from 'components/partials/Text';
import Tab from 'components/partials/Tab';
import SingleImage from 'components/partials/SingleImage';
import ListWith from 'components/partials/ListWith';
import PostCard from 'components/partials/PostCard';

export default function Index({ allPosts, reusableBlocks, preview }) {
  console.log('ALL POSTS', allPosts);
  return (
    <>
      {console.log(reusableBlocks)}
      {/* REUSABLE BLOCKS */}
      {reusableBlocks?.pageBuilder?.map((block) => (
        <div key={block._key}>
          {console.log('BLOCKS', block)}
          {block._type == 'hero' && (
            <Hero
              type={block._type}
              title={block.title}
              subtitle={block.subtitle}
              mainImage={block.mainImage}
            />
          )}

          {block._type == 'textBlock' && <Text content={block} highlighted={block.highlighted} />}

          {block._type == 'mainImage' && <SingleImage mainImage={block} />}

          {block._type == 'iconList' &&
            (!block.isTab ? (
              <ListWith header={block.header} content={block.subHeader} items={block.items} />
            ) : (
              <Tab header={block.header} content={block.subHeader} items={block.items} />
            ))}

          {block._type == 'icon' && (
            <>
              <Icon icon={block} width={96} height={128} />
              {/* <div>{block.caption}</div> */}
            </>
          )}
        </div>
      ))}
      {/* POSTS */}
      <section>
        <div className='max-w-6xl px-4 mx-auto sm:px-6'>
          <div className='py-12 border-t border-gray-800 md:py-20'>
            {/* Section header */}
            <div className='max-w-3xl pb-12 mx-auto text-center md:pb-20'>
              <h2
                className='h2 text-gradient bg-gradient-to-r from-green-400 to-blue-500'
                data-aos='fade-up'
              >
                OUR BLOG POSTS
              </h2>
            </div>
            <div className='max-w-sm mx-auto md:max-w-none'>
              <div className='grid items-start gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8'>
                {allPosts.map((post) => {
                  return <PostCard post={post} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PARTNERS */}
      <section>
        <div className='max-w-6xl px-4 mx-auto bg-white sm:px-6'>
          <div className='py-12 md:py-20'>
            {/* Section header */}
            <div className='max-w-3xl pb-12 mx-auto text-center text-gray-700 md:pb-16 '>
              <h1 className='mb-4 h2 text-gradient bg-gradient-to-r from-green-400 to-blue-500'>
                {reusableBlocks?.partners?.header}
              </h1>

              <div className='w-full  h-0.5 divider' />
            </div>

            <div className='grid grid-cols-2 gap-2 md:grid-cols-4'>
              {reusableBlocks?.partners?.logos.map((logo) => (
                <div key={logo._key} className='flex items-center justify-center  p-2'>
                  <MainImage mainImage={logo} url={logo.externalUrl} width={300} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPosts(preview);
  const reusableBlocks = await getReusableBlocks(preview);

  return {
    props: { allPosts, reusableBlocks, preview },
    revalidate: 1,
  };
}

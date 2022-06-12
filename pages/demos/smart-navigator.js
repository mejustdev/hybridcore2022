import React, { useState } from 'react';

import Link from 'next/link';
import PostBody from 'components/post-body';

import Container from 'components/container';
import Layout from 'components/layout';
import Date from 'components/date';

import { getReusableBlocksSmartNavigator } from 'lib/api';
import Icon from 'components/icon';
import MainImage from 'components/mainImage';
import TextBlock from 'components/textBlock';

export default function SmartNavigator({ reusableBlocks, preview }) {
  console.log(reusableBlocks);
  return (
    <>
      <div>{reusableBlocks.headerTitle}</div>
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

          {/* TEXT BLOCK START -------------------------------------------- */}
          {block._type == 'textBlock' && (
            <>
              <TextBlock content={block} />
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
            <>
              <div>{block?.header}</div>
              <PostBody content={block?.subHeader} />
              <div>
                {block.items.map((item) => {
                  return (
                    <div key={item._key}>
                      <div>{item?.header}</div>
                      <Icon icon={item?.icon} />
                      <MainImage mainImage={item?.itemImage} width={300} />
                      <PostBody content={item?.subHeader} />
                    </div>
                  );
                })}
              </div>
            </>
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
          {block._type == 'textSlider' && (
            <>
              {block.text.map((text) => {
                return (
                  <div key={text._key}>
                    <TextBlock content={text} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      ))}

      <div>{reusableBlocks?.partners?.header}</div>
      {reusableBlocks?.partners?.logos.map((logo) => (
        <div key={logo._key}>
          <MainImage mainImage={logo} url={logo.externalUrl} width={300} />
        </div>
      ))}
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

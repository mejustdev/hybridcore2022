import React, { useState } from 'react';

import Link from 'next/link';
import PostBody from 'components/post-body';

import Container from 'components/container';
import Layout from 'components/layout';
import Date from 'components/date';

import { getAllPosts, getMenu, getAllCategories, getReusableBlocks, getPartners } from 'lib/api';
import Icon from 'components/icon';
import MainImage from 'components/mainImage';
import TextBlock from 'components/textBlock';

export default function Index({ allPosts, menu, preview, categories, reusableBlocks }) {
  const [tagValue, setTagValue] = useState('');
  const filteredPostsByCategory = allPosts?.filter((post) => post.categories?.includes(tagValue));
  return (
    <>
      <Layout preview={preview} menu={menu}>
        <div>
          {
            <Container>
              <ul>
                {allPosts.map(({ _id, slug, title, subtitle, author, coverImage, publishedAt }) => (
                  <li key={_id}>
                    <Date dateString={publishedAt} />
                    <MainImage mainImage={coverImage} width={300} />
                    <Link as={`/posts/${slug}`} href='/posts/[slug]'>
                      <a className='hover:underline'>{title}</a>
                    </Link>
                    {subtitle}
                    {<Icon icon={author?.picture} />}
                    {author.name}
                  </li>
                ))}
              </ul>
            </Container>
          }
        </div>

        {console.log(reusableBlocks)}
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
          </div>
        ))}

        <div>{reusableBlocks?.partners?.header}</div>
        {reusableBlocks?.partners?.logos.map((logo) => (
          <div key={logo._key}>
            <MainImage mainImage={logo} url={logo.externalUrl} width={300} />
          </div>
        ))}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPosts(preview);
  const menu = await getMenu(preview);
  const categories = await getAllCategories(preview);
  const reusableBlocks = await getReusableBlocks(preview);
  // const partners = await getPartners(preview);

  return {
    props: { allPosts, menu, categories, reusableBlocks, preview },
    revalidate: 1,
  };
}

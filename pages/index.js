import React ,{useState,useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from 'components/container'
import MoreStories from 'components/more-stories'
import HeroPost from 'components/hero-post'
import Intro from 'components/intro'
import Layout from 'components/layout'
import Date from 'components/date'

import { getAllPosts, getMenu, getAllCategories } from 'lib/api'
import { CMS_NAME } from 'lib/constants'


export default function Index({ allPosts,menu, preview, categories }) {

  const [tagValue, setTagValue] = useState('')

  const filteredPostsByCategory = allPosts?.filter((post) =>
  post.categories?.includes(tagValue))

  return (
    <>
      <Layout preview={preview} menu={menu}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <div>
          <ul>
            {categories?.map(({_id,title,count}) => (
              <li key={_id} onClick={() => setTagValue(title)}>
              {title}{count}
              </li> ))
            }
          </ul>
          {
            !tagValue && (
              <Container>
                <ul>
                  {allPosts.map(({_id,slug,title,subtitle,categories,publishedAt}) => (
                    <li key={_id}>
                      <Date dateString={publishedAt}/>
                      <Link as={`/posts/${slug}`} href="/posts/[slug]">
                        <a className="hover:underline">{ title}</a>
                      </Link>
                      {subtitle}
                      {
                        <ul>
                        {categories?.map((title,index) => (
                          <li key={index} >
                          {title}
                          </li> ))}
                        </ul>
                      }
                    </li> ))
                  }
                </ul>
              </Container>
            )
          }
{
  tagValue && (
    <ul>
    {filteredPostsByCategory.map(({_id,title,subtitle,slug}) => (
      <li key={_id}>
          {console.log(slug)}
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{ title}</a>
        </Link>
        {subtitle}
      </li> ))
    }
    </ul>
  )
}

        </div>

      </Layout>
    </>
  )
}


export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPosts(preview)
  const menu = await getMenu(preview)
  const categories = await getAllCategories(preview)

  return {
    props: { allPosts, menu, categories, preview },
    revalidate: 1
  }
}

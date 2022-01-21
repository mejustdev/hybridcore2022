import React ,{useState} from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import Container from 'components/container'

import Layout from 'components/layout'
import Date from 'components/date'

import { getAllPosts, getMenu, getAllCategories } from 'lib/api'



export default function Index({ allPosts,menu, preview, categories }) {
  const { theme, setTheme } = useTheme()
  const [tagValue, setTagValue] = useState('')

  const filteredPostsByCategory = allPosts?.filter((post) =>
  post.categories?.includes(tagValue))

  return (
    <>
      <Layout preview={preview} menu={menu}>
      <div>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
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

import Layout from 'components/layout';
import { getAllPosts, getHeaderTitle, getSlug } from 'lib/api';
import { useRouter } from 'next/router';
import Post from '../components/partials/Post';

export default function Blog({ headerTitle, allPosts }) {
  console.log('allPosts', allPosts);
  return (
    <>
      <section className='relative'>
        {/* Background image */}
        {/* <div className='absolute inset-0'>
        <Img
          className='object-cover w-full h-full '
          src={require('../images/logo-3.webp')}
          width='1440'
          height='394'
          alt='About'
        />
        <div className='absolute inset-0 bg-gray-900 opacity-25' aria-hidden='true'></div>
      </div> */}

        {/* Hero content */}
        <div className='relative max-w-6xl px-4 mx-auto sm:px-6'>
          <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
            <div className='max-w-3xl mx-auto text-center'>
              <h1
                className='mb-4 h1 text-gradient bg-gradient-to-r from-green-400 to-blue-500'
                data-aos='fade-up'
              >
                {headerTitle}
              </h1>
            </div>
          </div>
        </div>
        {/* <Wave /> */}
      </section>
      <section className='relative'>
        <div className='max-w-6xl px-4 mx-auto sm:px-6'>
          <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
            <Post allPosts={allPosts} />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allpages = await getHeaderTitle(preview);
  const [blogPage] = allpages.filter((page) => {
    return page.slug == 'blog';
  });
  const { headerTitle } = blogPage;

  // console.log('headerTitle', headerTitle);
  const allPosts = await getAllPosts(preview);

  return {
    props: { headerTitle, allPosts, preview },
  };
}

// export async function getStaticPaths() {
//   const posts = await getSlug();
//   return {
//     paths:
//       posts?.map((post) => ({
//         params: {
//           slug: post.slug,
//         },
//       })) || [],
//     fallback: true,
//   };
// }

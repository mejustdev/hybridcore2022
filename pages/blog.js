import Layout from 'components/layout';
import { getAllPosts } from 'lib/api';

export default function Blog(allPosts) {
  console.log(allPosts);
  return (
    <>
      <Layout>This is Blog Page</Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPosts(preview);

  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}

import Head from 'next/head'
import { useRouter } from 'next/router';

import PreviewAlert from 'components/previewAlert'
import Footer from 'components/footer'
import Header from 'components/header'

import { HOME_OG_IMAGE_URL } from 'lib/constants'

export default function Layout({ preview,children,...custom_meta }) {


  const router = useRouter();
  const meta = {
    title: 'YOUR NAME AND POSITION',
    description: `YOUR DESCRIPTION`,
    image: 'https://cdn.sanity.io/images/el8kf8uk/production/fa27e881f7a74e87fa373915260ddeb42ff5c5ed-7680x7680.jpg',
    type: 'website',
    ...custom_meta
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`http://localhost:3000${router.asPath}`} />
        <link rel="canonical" href={`http://localhost:3000${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="SITE NAME" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="TWITTER USERNAME" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <Header/>

      {preview && <PreviewAlert preview={preview}/>}

      <div className="min-h-screen">
        <main>{children}</main>
      </div>

      <Footer />
    </>
  )
}

import Link from 'next/link';
import MainImage from '../../components/mainImage';
import HeroImage from './HeroImage';
import Date from './date';

export default function PostCard({ post }) {
  const { _id, slug, title, subtitle, author, coverImage, publishedAt } = post;
  console.log('publishedAt', publishedAt);
  return (
    <article className='flex flex-col h-full'>
      <header>
        {/* <Link
          className='block mb-6'
          to={`/blog/hybrid-intelligence-in-decision-support-and-use-case`}
        > */}
        <Link href={`/posts/${slug}`}>
          <a className='block mb-6'>
            <figure className='relative h-0 overflow-hidden rounded-sm pb-9/16'>
              <HeroImage
                mainImage={coverImage}
                url={`/posts/${slug}`}
                width={352}
                height={198}
                stil={
                  'absolute inset-0 object-fill w-full h-full transition duration-700 ease-out transform hover:scale-105'
                }
              />
            </figure>
          </a>
        </Link>

        <h3 className='mb-2 h4'>
          {
            <Link href={`/posts/${slug}`}>
              <a className='transition duration-150 ease-in-out hover:text-gray-100'>{title}</a>
            </Link>
          }
        </h3>
      </header>

      <footer className='flex items-center mt-4'>
        {/* <LazyLoadImage
          className='flex-shrink-0 mr-4 rounded-full'
          src={require('../images/logo-post.png')}
          width='40'
          height='40'
          alt='Author 02'
        /> */}
        <HeroImage
          mainImage={author.picture}
          width={40}
          height={40}
          stil={'flex-shrink-0 mr-4 rounded-full w-10 h-10'}
        />

        <div className='flex items-center font-medium text-gray-200 transition duration-150 ease-in-out hover:text-gray-100'>
          <p>{author.name}</p>
          <span className='text-gray-700'> - </span>
          <span className='text-gray-500'>{/* <Date dateString={publishedAt} /> */}</span>
        </div>
      </footer>
    </article>
  );
}

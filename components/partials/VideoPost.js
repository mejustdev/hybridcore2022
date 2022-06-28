import React, { useState } from 'react';
import Modal from '../../lib/utils/Modal';
import HeroImage from './HeroImage';
import Date from '../../components/date';

const VideoPost = ({ post }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const {
    _id,
    author,
    coverImage,
    posttype,
    publishedAt,
    slug,
    subtitle,
    title,
    excerpt,
    youtube_url,
  } = post;
  const handleClick = (e) => {
    e.preventDefault();
    setVideoModalOpen(true);
  };
  return (
    <div className='pb-12 md:pb-20'>
      <article className='max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center'>
        <div className='relative block group'>
          <div
            className='absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none'
            aria-hidden='true'
          ></div>
          <figure className='relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out'>
            <HeroImage
              mainImage={coverImage}
              width={540}
              height={303}
              stil={
                'absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out cursor-pointer'
              }
              alt={title}
              onClick={handleClick}
            />
          </figure>
        </div>
        <div>
          <header>
            <h3 className='h3 text-2xl lg:text-3xl mb-2 cursor-pointer'>{title}</h3>
          </header>

          <footer className='flex items-center mt-4'>
            <div>
              <span className='text-gray-500'>
                <Date dateString={publishedAt} />
              </span>
            </div>
          </footer>
        </div>
      </article>
      <Modal
        id='modal'
        ariaLabel='modal-headline'
        show={videoModalOpen}
        handleClose={() => setVideoModalOpen(false)}
      >
        <div className='relative pb-9/16'>
          <iframe
            className='absolute w-full h-full'
            src={youtube_url}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Video'
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default VideoPost;

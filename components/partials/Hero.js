import React, { useState } from 'react';
import Modal from '../../lib/utils/Modal';
// import CircleIllustration from './CircleIllustration';
import Youtube from '../../lib/utils/Youtube';
import PostBody from 'components/post-body';
import HeroImage from 'components/partials/HeroImage';
function Hero({ type, title, subtitle, mainImage }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className='relative max-w-6xl px-4 mx-auto sm:px-6'>
        {/* Illustration behind hero content */}

        {/* <div
          className='absolute bottom-0 left-0 hidden -ml-20 pointer-events-none lg:block'
          aria-hidden='true'
          data-aos='fade-up'
          data-aos-delay='400'
        >
          <CircleIllustration
            className={'max-w-full'}
            width={'564'}
            height={'552'}
            fill={'url(#illustration-02)'}
          />
        </div> */}

        {/* Hero content */}
        <div className='relative pt-32 pb-10 md:pt-40 md:pb-16'>
          {/* Section header */}
          <div className='max-w-3xl pb-12 mx-auto text-center md:pb-16'>
            <h1
              className='mb-4 h1 text-gradient bg-gradient-to-r from-green-400 to-blue-500'
              data-aos='fade-up'
            >
              {title}
            </h1>
            <p className='mt-8 mb-8 text-xl text-gray-400' data-aos='fade-up' data-aos-delay='200'>
              <PostBody content={subtitle} />
            </p>
          </div>

          {/* Hero image */}
          <div>
            <div
              className='relative flex items-center justify-center'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <HeroImage
                mainImage={mainImage}
                width={1024}
                height={504}
                stil={'mx-auto rounded-full'}
              />
              <a
                className='absolute group'
                href='#0'
                onClick={(e) => {
                  e.preventDefault();
                  setVideoModalOpen(true);
                }}
                aria-controls='modal'
              >
                <svg
                  className='w-16 h-16 transition duration-150 ease-in-out sm:w-20 sm:h-20 hover:opacity-75'
                  viewBox='0 0 88 88'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs>
                    <linearGradient x1='78.169%' y1='9.507%' x2='24.434%' y2='90.469%' id='a'>
                      <stop stopColor='#EBF1F5' stopOpacity='.8' offset='0%' />
                      <stop stopColor='#EBF1F5' offset='100%' />
                    </linearGradient>
                  </defs>
                  <circle fill='url(#a)' cx='44' cy='44' r='44' />
                  <path
                    className='text-purple-600 fill-current'
                    d='M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z'
                  />
                </svg>
              </a>
            </div>

            {/* Modal */}

            <Modal
              id='modal'
              ariaLabel='modal-headline'
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className='relative pb-9/16'>
                <Youtube fallback={<div>Loading...</div>} />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

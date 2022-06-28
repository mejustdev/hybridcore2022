import React, { useState, useRef, useEffect } from 'react';
import PostBody from 'components/post-body.js';

// import { LazyLoadImage } from 'react-lazy-load-image-component';
import Transition from '../../lib/utils/Transition.js';
import SingleImage from '../../components/partials/SingleImage.js';
import IconList from '../../components/partials/IconList.js';

function Tab({ header, content, items }) {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  // const heightFix = () => {
  //   if (tabs.current.children[tab]) {
  //     tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px';
  //   }
  // };

  // useEffect(() => {
  //   heightFix();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [tab]);

  function ButtonTab({ title, tabIndex, svgPath }) {
    return (
      <button
        className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
          tab !== tabIndex && 'opacity-50'
        }`}
        onClick={() => setTab(tabIndex)}
      >
        <svg
          className='w-4 h-4 mr-2 text-purple-600 fill-current'
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d={svgPath} />
        </svg>
        <span className='text-gray-400 transition-colors duration-150 ease-in-out group-hover:text-gray-200'>
          {title}
        </span>
      </button>
    );
  }

  return (
    <section id='explore'>
      <div className='max-w-6xl px-4 mx-auto sm:px-6'>
        <div className='py-12 border-t border-gray-800 md:py-20'>
          {/* Section header */}
          <div className='max-w-3xl pb-12 mx-auto text-center' data-aos-id-tabs>
            <h2
              className='mb-4 h2 text-gradient bg-gradient-to-r from-green-400 to-blue-500'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-tabs]'
            >
              {header}
            </h2>
            <p className='text-xl text-gray-400'>
              <PostBody content={content} />
            </p>
          </div>

          {/* Section content */}
          <div>
            {/* Tabs buttons */}
            <div className='flex flex-wrap justify-center -m-2'>
              {items.map((item, index) => (
                <ButtonTab
                  title={item.header}
                  tabIndex={index}
                  svgPath={
                    'M13.5 5.5c-.311.001-.62.061-.909.177l-2.268-2.268c.116-.29.176-.598.177-.909a2.5 2.5 0 00-5 0c.001.311.061.62.177.909L3.409 5.677A2.473 2.473 0 002.5 5.5a2.5 2.5 0 000 5c.311-.001.62-.061.909-.177l2.268 2.268c-.116.29-.176.598-.177.909a2.5 2.5 0 105 0 2.473 2.473 0 00-.177-.909l2.268-2.268c.29.116.598.176.909.177a2.5 2.5 0 100-5zM8 11c-.311.001-.62.061-.909.177L4.823 8.909a2.423 2.423 0 000-1.818l2.268-2.268a2.423 2.423 0 001.818 0l2.268 2.268a2.423 2.423 0 000 1.818l-2.268 2.268A2.473 2.473 0 008 11z'
                  }
                />
              ))}
            </div>

            {/* Tabs items */}
            <div className='relative flex flex-col md:mt-16' data-aos='fade-up' ref={tabs}>
              {/* Item 1 */}
              {items.map((item, index) => (
                <Transition
                  show={tab === index}
                  appear={true}
                  className='w-full'
                  enter='transition ease-in-out duration-500 transform order-first'
                  enterStart='opacity-0 scale-98'
                  enterEnd='opacity-100 scale-100'
                  leave='transition ease-out duration-300 transform absolute'
                  leaveStart='opacity-100 scale-100'
                  leaveEnd='opacity-0 scale-98'
                >
                  <article className='relative max-w-md mx-auto md:max-w-none'>
                    <figure className='py-4 flex justify-center items-center md:absolute md:inset-y-0 md:right-0 md:w-1/2'>
                      <IconList icon={item.itemImage} width={400} height={600} />
                    </figure>
                    <div className='relative px-6 py-8 bg-gray-800 md:py-16 md:pr-16 md:max-w-lg lg:max-w-xl'>
                      <h4 className='mb-2 h4'>{item.header}</h4>
                      <p className='text-lg text-gray-400'>
                        <PostBody content={item.subHeader} />
                      </p>
                      {item.button && (
                        <a
                          className='mt-6 text-white bg-purple-600 btn-sm hover:bg-purple-700'
                          href={item.link.external ?? item.link.internal}
                        >
                          <span className='text-sm'>{item.link.buttonText}</span>
                          <svg
                            className='flex-shrink-0 w-3 h-3 ml-2 text-purple-400 fill-current'
                            viewBox='0 0 12 12'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M6 5H0v2h6v4l6-5-6-5z' />
                          </svg>
                        </a>
                      )}
                    </div>
                  </article>
                </Transition>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tab;

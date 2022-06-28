import React, { useState, useRef, useEffect } from 'react';
import TextBlock from './textBlock';
// import Wave from './Wave';
import Transition from '../lib/utils/Transition';

function TextCarousel({ text }) {
  console.log('TEXT:', text);
  const [items] = Array(text);
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const [autorotateTiming] = useState(7000);
  const testimonials = useRef(null);

  const stopAutorotate = () => {
    setAutorotate(null);
  };

  const heightFix = () => {
    if (testimonials.current.children[active]) {
      testimonials.current.style.height = testimonials.current.children[active].offsetHeight + 'px';
    }
  };

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : (active) => active + 1);
    }, autorotateTiming);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, autorotate]);

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 '>
          {/* Carousel area*/}
          <div className='max-w-2xl mx-auto pb-12'>
            {/* Carousel */}
            <div className='mt-6 '>
              {/* Testimonials */}
              <div className='relative flex items-start' ref={testimonials}>
                {items.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    appear={true}
                    className='text-center'
                    enter='transition ease-in-out duration-500 transform order-first'
                    enterStart='opacity-0 scale-98'
                    enterEnd='opacity-100 scale-100'
                    leave='transition ease-out duration-300 transform absolute'
                    leaveStart='opacity-100 scale-100'
                    leaveEnd='opacity-0 scale-98'
                  >
                    <blockquote className='text-lg md:text-xl text-gray-400'>
                      <TextBlock content={item.text} />
                    </blockquote>
                  </Transition>
                ))}
              </div>

              {/* Bullets  */}
              {
                <div className='flex justify-center mt-6'>
                  {items.map((item, index) => (
                    <button
                      className='p-1 group'
                      key={index}
                      onClick={() => {
                        setActive(index);
                        stopAutorotate();
                      }}
                    >
                      <span
                        className={`block w-2 h-2 rounded-full group-hover:bg-gray-400 transition duration-150 ease-in-out ${
                          active === index ? 'bg-gray-200' : 'bg-gray-500'
                        }`}
                      ></span>
                    </button>
                  ))}
                </div>
              }
            </div>
          </div>
          {/* Section header */}
          {/* <div
              className='max-w-3xl mx-auto text-center pb-12 md:pb-16'
              data-aos-id-testimonialcar
            >
              <h2
                className='h2 mb-4'
                data-aos='fade-up'
                data-aos-anchor='[data-aos-id-testimonialcar]'
              >
                Data Collected by Smart Sonar from
              </h2>
              <p
                className='text-xl text-gray-400'
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-anchor='[data-aos-id-testimonialcar]'
              >
                Online Retailers, Social Media Channels, Google/Bing Search, Ranking and Customer
                Services Data, Companies’ Raw Data, and Our Own Data Bases
              </p>
            </div> */}

          {/* Check list */}
          {/* <div className='max-w-3xl mx-auto pb-16'>
              <ul className='flex flex-col sm:flex-row flex-wrap justify-center items-center text-lg text-gray-400 -mx-3 -my-2'>
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='400'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Website visits</span>
                </li>
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='500'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Products bought</span>
                </li>
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='600'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Products added to cart</span>
                </li>
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='700'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Conversion paths</span>
                </li>
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='800'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Conversion sources</span>
                </li>
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='900'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Buyers’ trends data</span>
                </li>{' '}
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='1000'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Purchase transactions</span>
                </li>{' '}
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='1100'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Price history</span>
                </li>{' '}
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='1200'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Trend seasons</span>
                </li>{' '}
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='1300'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Reactions to direct marketing</span>
                </li>{' '}
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='1400'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Search terms used</span>
                </li>
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='1500'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Chat conversations</span>
                </li>
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='1600'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Products displayed</span>
                </li>
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='1700'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Cart value</span>
                </li>
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='1800'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Ranking value</span>
                </li>
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='1900'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Customers’ opinions (Sentiment analysis, social media interactions)</span>
                </li>
                <li
                  className='flex items-center mx-3 my-2'
                  data-aos='fade-up'
                  data-aos-delay='2000'
                  data-aos-anchor='[data-aos-id-testimonialcar]'
                >
                  <svg
                    className='w-6 h-6 mr-3 flex-shrink-0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle className='fill-current text-green-500' cx='12' cy='12' r='12' />
                    <path
                      className='fill-current text-white'
                      d='M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z'
                    />
                  </svg>
                  <span>Offline behaviours</span>
                </li>
              </ul>
            </div> */}
        </div>
      </div>
    </section>
  );
}

export default TextCarousel;

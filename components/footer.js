import React from 'react';
import NextLink from 'next/link';
import useSite from 'lib/hooks/use-site';
// import Wave from './Wave';
const svgBgColor = '#FFFFFF';
import { slugify } from 'lib/helpers';
import Logo from '../components/partials/logo';
import PostBody from './post-body';

function Footer() {
  const { menus, siteSettings } = useSite();
  const directRoutes = menus.filter((menu) => {
    return menu.routesDirect;
  });
  const parentRoutes = menus.filter((menu) => {
    return menu.parentText;
  });

  console.log('menus', menus);
  console.log('parentRoutes', parentRoutes);
  return (
    <footer id='contact' className='pt-12'>
      {/* <Wave footerSvg={svgBgColor} /> */}
      <div className='pt-12 bg-white md:py-8'>
        <div className='max-w-6xl px-4 mx-auto sm:px-6 '>
          {/* Top area: Blocks */}
          <div className='grid gap-8 md:grid-cols-12 lg:gap-20'>
            {/* 1st block */}
            <div className='sm:col-span-6 '>
              <div className='mb-2'>
                <NextLink href='/'>
                  <Logo
                    mainImage={siteSettings.logo}
                    stil={'text-purple-600 fill-current w-auto h-20'}
                    url={'/'}
                  />
                </NextLink>
              </div>
              <div className='text-gray-700'>
                <PostBody content={siteSettings.address} />
              </div>
            </div>
            <div className='sm:col-span-6'>
              <div className='mb-2'>
                {/* Logo */}
                {/* <NextLink
                  href={siteSettings.footerImage.externalUrl}
                  className='inline-block '
                  aria-label='Cruip'
                >
                  <img
                    className='text-purple-600 fill-current w-18 h-18'
                    src={siteSettings.footerImage}
                    width='300'
                    height='300'
                    alt='footer'
                  />
                </NextLink> */}
                <NextLink href={siteSettings.footerImage.externalUrl}>
                  <Logo
                    mainImage={siteSettings.footerImage}
                    // width={300}
                    // height={300}
                    stil={'text-purple-600 fill-current '}
                    url={siteSettings.footerImage.externalUrl}
                  />
                </NextLink>
              </div>
              <div className='text-gray-700'>{siteSettings.footerImageCaption}</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className='grid gap-8 md:col-span-12 lg:col-span-12 sm:grid-cols-3'>
              <div className='flex flex-col text-sm justify-evenly'>
                {directRoutes[0].routesDirect?.map((el) => {
                  return (
                    <NextLink href={el.slug == 'home' ? '/' : el.slug}>
                      <a className='inline-block'>
                        <h6 className='mr-1 font-medium text-gray-700 hover:text-purple-600'>
                          {el.title}
                        </h6>
                      </a>
                    </NextLink>
                  );
                })}
              </div>
              {parentRoutes?.map(({ parentText, routesUnderParent }) => {
                const slugifiedParent = slugify(parentText);
                return (
                  <>
                    <div className='py-2 my-2 '>
                      <h6 className='mb-1 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'>
                        {parentText}
                      </h6>

                      <ul>
                        {routesUnderParent?.map((el) => {
                          const slugifiedExternalUrlText = slugify(el?.externalUrlText);
                          return (
                            <li className='mb-1'>
                              <NextLink
                                href={`${slugifiedParent}/${el?.slug ?? slugifiedExternalUrlText}`}
                              >
                                <a className='text-gray-500 transition duration-150 ease-in-out hover:text-purple-600'>
                                  {el?.title ?? el?.externalUrlText}
                                </a>
                              </NextLink>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

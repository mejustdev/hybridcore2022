import { useState, useEffect, useRef } from 'react';
import NextLink from 'next/link';
import useSite from 'lib/hooks/use-site';
import Dropdown from 'lib/utils/Dropdown';
import Logo from '../components/partials/logo';

import { slugify } from 'lib/helpers';

export default function Header() {
  const { menus, siteSettings } = useSite();
  console.log('menus', menus);
  console.log('siteSettings', siteSettings);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen || mobileNav.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <>
      <header className='absolute z-30 w-full'>
        <div className='max-w-6xl px-4 mx-auto sm:px-6'>
          <div className='flex items-center justify-between h-20'>
            {/* Site branding */}
            {/* @TODO: Add Logo */}
            <div className='flex items-center flex-shrink-0 '>
              <NextLink href='/'>
                <Logo
                  mainImage={siteSettings.logo}
                  stil={'w-auto mt-3 h-12 sm:h-14 md:h-16'}
                  url={'/'}
                />
              </NextLink>
            </div>

            {/* Desktop navigation */}
            <nav className='hidden md:flex md:flex-grow'>
              <ul className='flex flex-wrap items-center justify-end flex-grow'>
                {/* Desktop menu links */}
                {menus?.map(({ parentText, routesDirect, routesUnderParent }) => {
                  const slugifiedParent = slugify(parentText);
                  return (
                    <>
                      {parentText ? (
                        <Dropdown title={parentText}>
                          {routesUnderParent?.map((el, index) => {
                            const slugifiedExternalUrlText = slugify(el?.externalUrlText);
                            return (
                              <NextLink
                                href={`${slugifiedParent}/${el?.slug ?? slugifiedExternalUrlText}`}
                                replace
                              >
                                <a className='flex px-4 py-2 text-sm font-medium leading-tight text-gray-400 hover:text-purple-600'>
                                  {el?.title ?? el?.externalUrlText}
                                </a>
                              </NextLink>
                            );
                          })}
                        </Dropdown>
                      ) : (
                        routesDirect?.map((el, index) => {
                          return (
                            <li>
                              <NextLink href={el.slug == 'home' ? '/' : el.slug} replace>
                                <a className='flex px-4 py-2 text-sm font-medium leading-tight text-gray-400 hover:text-purple-600'>
                                  {el.title}
                                </a>
                              </NextLink>
                            </li>
                          );
                        })
                      )}
                    </>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile menu */}
            <div className='md:hidden'>
              {/* Hamburger button */}
              <button
                className={`hamburger ${mobileNavOpen && 'active'}`}
                aria-controls='mobile-nav'
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <span className='sr-only'>Menu</span>
                <svg
                  className='w-6 h-6 text-gray-300 transition duration-150 ease-in-out fill-current hover:text-gray-200'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect y='4' width='24' height='2' rx='1' />
                  <rect y='11' width='24' height='2' rx='1' />
                  <rect y='18' width='24' height='2' rx='1' />
                </svg>
              </button>

              {/*Mobile navigation */}
              <nav
                id='mobile-nav'
                ref={mobileNav}
                className='absolute left-0 z-20 w-full px-4 overflow-hidden transition-all duration-300 ease-in-out top-full sm:px-6'
                style={
                  mobileNavOpen
                    ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                    : { maxHeight: 0, opacity: 0.8 }
                }
              >
                <ul className='px-4 py-2 bg-gray-800'>
                  {menus?.map(({ parentText, routesDirect, routesUnderParent }) => {
                    const slugifiedParent = slugify(parentText);
                    return (
                      <>
                        {parentText ? (
                          <li className='py-2 my-2 '>
                            <span className='flex py-2 text-gray-300'>{parentText}</span>
                            <ul className='pl-4'>
                              {routesUnderParent?.map((el) => {
                                const slugifiedExternalUrlText = slugify(el?.externalUrlText);
                                return (
                                  <li>
                                    <NextLink
                                      href={`${slugifiedParent}/${
                                        el?.slug ?? slugifiedExternalUrlText
                                      }`}
                                    >
                                      <a className='flex py-2 text-sm font-medium text-gray-400 hover:text-gray-200'>
                                        {el?.title ?? el?.externalUrlText}
                                      </a>
                                    </NextLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        ) : (
                          routesDirect?.map((el) => {
                            return (
                              <li>
                                <NextLink href={el.slug == 'home' ? '/' : el.slug}>
                                  <a className='flex py-2 text-gray-300 hover:text-gray-200'>
                                    {el.title}
                                  </a>
                                </NextLink>
                              </li>
                            );
                          })
                        )}
                      </>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

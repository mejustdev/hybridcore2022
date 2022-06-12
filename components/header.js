import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import { useTheme } from 'next-themes';
import useSite from '../lib/hooks/use-site';
import cn from 'classnames';

import { slugify } from '../lib/helpers';

function NavItem(href, title) {
  console.log('TITLeaddaa', title);
  const router = useRouter();
  const isActive = router.asPath === href;
  // const { parentTitle, childTitle } = title;
  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
        )}
      >
        {title}
      </a>
    </NextLink>
  );
}

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const { menus } = useSite();
  console.log('DATA', menus);

  return (
    <>
      <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
        {menus?.map(({ parentText, routesDirect, routesUnderParent }) => {
          const slugifiedParent = slugify(parentText);

          return (
            <div className='flex flex-col md:flex-row items-center'>
              {parentText ? (
                <div>
                  <div>{parentText}</div>
                  <div>
                    {routesDirect?.map((el) => {
                      const slugifiedExternalUrlText = slugify(el?.externalUrlText);
                      return (
                        <a
                          href={`
                          ${slugifiedParent}/${el?.slug ?? slugifiedExternalUrlText}`}
                        >
                          {el?.title ?? el?.externalUrlText}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div>
                  {routesUnderParent?.map((el) => {
                    return <a href={el.slug == 'home' ? '/' : el.slug}>{el.title}</a>;
                  })}
                </div>
              )}
            </div>
          );
        })}
      </h2>
      <button
        aria-label='Toggle Dark Mode'
        type='button'
        className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all'
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            className='w-5 h-5 text-gray-800 dark:text-gray-200'
          >
            {resolvedTheme === 'dark' ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
            )}
          </svg>
        )}
      </button>
    </>
  );
}

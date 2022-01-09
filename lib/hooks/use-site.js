import { useContext, createContext } from 'react';



import { removeLastTrailingSlash } from '../util';

export const SiteContext = createContext();

/**
 * useSiteContext
 */

export function useSiteContext(data) {

  return {
    ...data,
  };
}

/**
 * useSite
 */

export default function useSite() {
  const site = useContext(SiteContext);
  return site;
}
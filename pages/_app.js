import 'styles/index.css'

import NextApp from 'next/app';
// import Layout from 'components/layout'
import { SiteContext, useSiteContext } from 'lib/hooks/use-site';
import {getMenu} from 'lib/api'
function MyApp({ Component, pageProps,menus }) {

  const site = useSiteContext({
    menus,
  });

  return (
    <SiteContext.Provider value={site}>
        <Component {...pageProps} />
    </SiteContext.Provider>
  )
}
MyApp.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  const menus  = await getMenu();

  return {
    ...appProps,
    menus,
  };
};


export default MyApp

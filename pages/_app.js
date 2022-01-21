import 'styles/index.css'

import NextApp from 'next/app';
// import Layout from 'components/layout'
import { ThemeProvider } from 'next-themes'
import { SiteContext, useSiteContext } from 'lib/hooks/use-site';
import {getMenu} from 'lib/api'
function MyApp({ Component, pageProps,menus }) {

  const site = useSiteContext({
    menus,
  });

  return (
    <ThemeProvider>
      <SiteContext.Provider value={site}>
        <Component {...pageProps} />
      </SiteContext.Provider>
    </ThemeProvider>
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

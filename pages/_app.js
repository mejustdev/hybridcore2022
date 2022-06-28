import 'styles/index.scss';

import NextApp from 'next/app';
import Layout from 'components/layout';
import { ThemeProvider } from 'next-themes';
import { SiteContext, useSiteContext } from 'lib/hooks/use-site';
import { getMenu, getSettings } from 'lib/api';
function MyApp({ Component, pageProps, menus, siteSettings }) {
  const site = useSiteContext({
    menus,
    siteSettings,
  });

  return (
    <ThemeProvider>
      <SiteContext.Provider value={site}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SiteContext.Provider>
    </ThemeProvider>
  );
}
MyApp.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  const menus = await getMenu();
  const siteSettings = await getSettings();

  return {
    ...appProps,
    menus,
    siteSettings,
  };
};

export default MyApp;

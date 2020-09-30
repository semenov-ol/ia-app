import React from 'react';
import App, { AppInitialProps } from 'next/app';
import type { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from 'ustudio-ui/theme';
import { appWithTranslation } from '../i18n';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext): Promise<AppInitialProps> => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);

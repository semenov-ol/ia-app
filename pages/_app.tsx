import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'ustudio-ui/theme';
import { appWithTranslation } from '../i18n';

const MyApp = ({ Component, pageProps }) => <ThemeProvider><Component {...pageProps} /></ThemeProvider>;

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);

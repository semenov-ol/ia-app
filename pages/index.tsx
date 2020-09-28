import React, { FC, useState } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Text from 'ustudio-ui/components/Text';
import Link from 'next/link';
import Styled from './index.styles';

import Header from '../components/header';
import { I18nPage, includeDefaultNamespaces } from '../i18n';

const Home: I18nPage = () => {
  const { t } = useTranslation('common');
  const [loggedIn, setLoggedIn] = useState(false);



  return (
    <>
      <Head>
        <title>I-A app</title>
      </Head>
      <Header />
      <Styled.Container>
        <p>
          <Styled.Title>{t('title')}</Styled.Title>
        </p>
        <Styled.Main>{t('main-info')}</Styled.Main>
        <Link href="/sign-up/sign-up-page">
          <a href="#">
            {loggedIn ? (
              <Text variant="body">Sign-in page </Text>
            ) : (
              <Text variant="body">Sign-up page </Text>
            )}
          </a>
        </Link>
      </Styled.Container>
    </>
  );
};

Home.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  };
};

export default Home;

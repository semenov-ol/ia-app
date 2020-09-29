import React, { useState } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Text from 'ustudio-ui/components/Text';
import Link from 'next/link';
import Cookies from 'js-cookie';

import Styled from './index.styles';
import Header from '../components/header';
import { I18nPage, includeDefaultNamespaces } from '../i18n';

const Home: I18nPage = () => {
  const token = Cookies.get('token');
  const { t } = useTranslation('common');
  const [loggedIn] = useState(!!token);

  return (
    <>
      <Head>
        <title>I-A app</title>
      </Head>
      <Header />
      <Styled.Container>
        <Styled.Title>{t('title')}</Styled.Title>
        <Styled.Main>{t('main-info')}</Styled.Main>
        <Link href="/sign-up">
          <a href="/sign-up">
            {loggedIn ? null : <Text variant="body">Sign-up page </Text>}
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

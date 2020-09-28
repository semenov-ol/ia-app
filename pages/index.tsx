import React, { FC } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Text from 'ustudio-ui/components/Text';
import Link from 'next/link';
import Styled from './index.styles';

import Header from '../components/header';

const Home: FC = () => {
  const { t } = useTranslation('common');

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
        <Link href="/authorization/login-page">
          <a href="#">
            <Text variant="body">Login page </Text>{' '}
          </a>
        </Link>
      </Styled.Container>
    </>
  );
};

export default Home;

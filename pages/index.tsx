import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
// @ts-ignore
import { i18n, withTranslation } from '../i18n';
import Styled from './index.styles';
import Button from "ustudio-ui/components/Button";

const Home = ({ t }) => {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
  return (
    <Styled.Container>
      <Head>
        <title>I-A app</title>
      </Head>
      <Styled.LngBtnContainer>
        <Button onClick={() => changeLanguage('en')}>English</Button>
        <Button onClick={() => changeLanguage('ua')}>Ukrainian</Button>
      </Styled.LngBtnContainer>
      <p>
        <Styled.Title>{t('title')}</Styled.Title>
      </p>
      <Styled.Main>{t('main-info')}</Styled.Main>
    </Styled.Container>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Home);

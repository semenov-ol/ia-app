import React, {FC} from 'react';
import Head from 'next/head';
import Button from 'ustudio-ui/components/Button';
import { useTranslation } from '../i18n';
import Styled from './index.styles';

const Home: FC = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <Styled.Container>
      <Head>
        <title>I-A app</title>
      </Head>

      <Styled.ButtonContainer>
        <Button onClick={() => i18n.changeLanguage('en')} style={{'margin': '5px'}}>English</Button>
        <Button onClick={() => i18n.changeLanguage('ua')} style={{'margin': '5px'}}>Ukrainian</Button>
      </Styled.ButtonContainer>

      <p>
        <Styled.Title>{t('title')}</Styled.Title>
      </p>
      <Styled.Main>{t('main-info')}</Styled.Main>
    </Styled.Container>
  );
};

export default Home;

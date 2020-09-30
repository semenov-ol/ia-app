import React from 'react';
import Text from 'ustudio-ui/components/Text';
import Cookies from 'js-cookie';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import Styled from './styles';
import { handleAuthSSR } from '../../utils/auth';
import Header from '../../components/header';

const Index: NextPage = () => {
  const userId = Cookies.get('userId');

  const { t } = useTranslation(['dashboard', 'common']);
  const router = useRouter();

  const logOutHandle = (): void => {
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    Cookies.remove('userId');
    router.push('/sign-in');
  };

  return (
    <>
      <Header />
      <Styled.ButtonContainer>
        <Styled.LogOutButton onClick={() => logOutHandle()}>
          {t('common:log-out')}
        </Styled.LogOutButton>
      </Styled.ButtonContainer>
      <Styled.Container>
        <Text variant="h3">{t('secret-info')}</Text>
        <Text variant="code">
          {t('user-id')}
          {userId}
        </Text>
      </Styled.Container>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  await handleAuthSSR(ctx);
  return {};
};

export default Index;

import React, { FC, useEffect, useState } from 'react';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Button from 'ustudio-ui/components/Button';
import Text from 'ustudio-ui/components/Text';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import Styled from './sign-in-pages.styles';

import Header from '../../components/header';

const Index: FC = () => {
  const token = Cookies.get('token');
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const { t } = useTranslation('sign-up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const serverUrl = 'http://185.25.116.133:5888';

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  const onSignInClick = async (e): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch(`${serverUrl}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Connection: 'keep-alive',
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();
      const { userId, accessToken, refreshToken } = json;
      Cookies.set('token', accessToken, { path: '/' });
      Cookies.set('refreshToken', refreshToken);
      Cookies.set('userId', userId);
      if (response.ok) {
        setIsLoggedIn(true);
        setIsError(false);
      }
    } catch (err) {
      setIsError(true);
    }
  };

  const onLoggedOutClick = (): void => {
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    Cookies.remove('userId');
    setIsLoggedIn(false);
  };

  return (
    <>
      <Header />
      {isError ? (
        <Styled.ErrorContainer>
          <Text variant="code">{t('_error:something-wrong')}</Text>
        </Styled.ErrorContainer>
      ) : null}
      {isLoggedIn === undefined ? null : isLoggedIn ? (
        <Styled.FormContainer>
          <Text variant="h4">{t('user-logged-in')}</Text>
          <Button onClick={() => onLoggedOutClick()}>Logged out</Button>
        </Styled.FormContainer>
      ) : (
        <Styled.FormContainer>
          <form onSubmit={(e) => onSignInClick(e)}>
            <Text variant="h3">{t('authorization')}</Text>
            {t('email')}
            <TextInput
              name="email"
              placeholder="Enter email"
              // @ts-ignore
              type="email"
              onChange={(value) => setEmail(value)}
            />
            {t('password')}
            <TextInput
              name="password"
              placeholder="Enter password"
              // @ts-ignore
              type="password"
              onChange={(value) => setPassword(value)}
            />
            <a>{t('forgot-password')}</a>
            <Button>Sign in</Button>
          </form>
        </Styled.FormContainer>
      )}
    </>
  );
};

export default Index;

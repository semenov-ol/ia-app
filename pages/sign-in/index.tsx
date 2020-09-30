import React, { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'ustudio-ui/components/Button';
import Text from 'ustudio-ui/components/Text';
import Cookies from 'js-cookie';
import Link from 'next/link';

import type { NextPage } from 'next';

import Header from '../../components/header';

import Styled from './sign-in-pages.styles';

const Index: NextPage = () => {
  const token = Cookies.get('token');
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const { t } = useTranslation('sign-up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [isUserNotExist, setIsUserNotExist] = useState(false);
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
      if (response && response.status === 200) {
        Cookies.set('token', accessToken, { path: '/' });
        Cookies.set('refreshToken', refreshToken);
        Cookies.set('userId', userId);
        setIsLoggedIn(true);
        setIsError(false);
      } else {
        setIsUserNotExist(true);
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
      {isUserNotExist && (
        <Styled.ErrorContainer>
          <Text variant="article">
            This email is not exist, please make{' '}
            <Link href="/sign-up">
              <a href="/sign-up">registration</a>
            </Link>
          </Text>
        </Styled.ErrorContainer>
      )}
      {isError && (
        <Styled.ErrorContainer>
          <Text variant="article">{t('_error:something-wrong')}</Text>
        </Styled.ErrorContainer>
      )}
      {isLoggedIn === undefined ? null : isLoggedIn ? (
        <Styled.FormContainer>
          <Styled.Title variant="h4" align="center">
            {t('user-logged-in')}
          </Styled.Title>
          <Button onClick={() => onLoggedOutClick()}>Logged out</Button>
        </Styled.FormContainer>
      ) : (
        <Styled.FormContainer>
          <form onSubmit={(e: FormEvent<HTMLFormElement>) => onSignInClick(e)}>
            <Styled.Title variant="h3" align="center">
              {t('authorization')}
            </Styled.Title>
            {t('email')}
            <Styled.Input
              name="email"
              placeholder="Enter email"
              // @ts-ignore
              type="email"
              onChange={(value) => setEmail(value)}
            />
            {t('password')}
            <Styled.Input
              name="password"
              placeholder="Enter password"
              // @ts-ignore
              type="password"
              onChange={(value) => setPassword(value)}
            />
            <Styled.ForgotLink href="/auth/forgot-password">
              {t('forgot-password')}
            </Styled.ForgotLink>
            <Styled.SignInButton>{t('sign-in')}</Styled.SignInButton>
          </form>
        </Styled.FormContainer>
      )}
    </>
  );
};

export default Index;

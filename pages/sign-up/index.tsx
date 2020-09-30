import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Text from 'ustudio-ui/components/Text';
import Cookies from 'js-cookie';

import type { NextPage } from 'next';

import Header from '../../components/header';

import Styled from './sign-up-page.styles';

const Index: NextPage = () => {
  const token = Cookies.get('token');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [confirmMessage, setConfirmMessage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [isError, setIsError] = useState(false);
  const { t } = useTranslation('sign-up');
  const serverUrl = 'http://185.25.116.133:5888';

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  const isSignUpDisabled = (): boolean => {
    return !(email !== '' && password !== '' && password === confirmedPassword);
  };

  const onSignUpClick = async (): Promise<void> => {
    try {
      const response = await fetch(`${serverUrl}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 201) {
        setConfirmMessage(true);
        setIsError(false);
      }
    } catch (err) {
      setIsError(true);
    }
  };

  return (
    <>
      <Header />
      {isError ? (
        <Styled.ErrorContainer>
          <Text variant='code'>{t('_error:something-wrong')}</Text>
        </Styled.ErrorContainer>
      ) : null}

      {isLoggedIn === undefined ? null : isLoggedIn ? (
        <Styled.FormContainer>
          <Text variant='h5' align='center'>
            {t('user-logged-in')}
          </Text>
        </Styled.FormContainer>
      ) : (
        <Styled.FormContainer>
          <Styled.Title variant='h3' align='center'>
            {t('registration')}
          </Styled.Title>
          {t('email')}
          <Styled.Input
            name='email'
            placeholder='Enter email'
            // @ts-ignore
            type='email'
            onChange={(value) => setEmail(value)}
          />
          {t('password')}
          <Styled.Input
            name='password'
            placeholder='Enter password'
            // @ts-ignore
            type='password'
            onChange={(value) => setPassword(value)}
          />
          {t('confirm_password')}
          <TextInput
            name='confirm_password'
            placeholder='Confirm password'
            // @ts-ignore
            type='password'
            onChange={(value) => setConfirmedPassword(value)}
          />
          <Styled.SignUpButton
            onClick={() => onSignUpClick()}
            isDisabled={isSignUpDisabled()}
          >
            Sign up
          </Styled.SignUpButton>
          {confirmMessage ? (
            <Text variant='h6'>{t('confirm-message')}</Text>
          ) : null}
        </Styled.FormContainer>
      )}
    </>
  );
};

export default Index;

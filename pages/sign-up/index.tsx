import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Text from 'ustudio-ui/components/Text';
import Button from 'ustudio-ui/components/Button';
import Cookies from 'js-cookie';

import Styled from './sign-up-page.styles';
import Header from '../../components/header';

const Index: FC = () => {
  const token = Cookies.get('token');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [confirmMessage, setConfirmMessage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
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
    const response = await fetch(`${serverUrl}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.status === 201) {
      setConfirmMessage(true);
    }
  };
  return (
    <>
      <Header />
      {isLoggedIn === undefined ? null : isLoggedIn ? (
        <Styled.FormContainer>
          <Text variant="h5" align="center">{t('user-logged-in')}</Text>
        </Styled.FormContainer>
      ) : (
        <Styled.FormContainer>
          <Styled.Title variant="h3">{t('registration')}</Styled.Title>
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
          {t('confirm_password')}
          <TextInput
            name="confirm_password"
            placeholder="Confirm password"
            // @ts-ignore
            type="password"
            onChange={(value) => setConfirmedPassword(value)}
          />
          <Styled.SignUpButton
            onClick={() => onSignUpClick()}
            isDisabled={isSignUpDisabled()}
          >
            Sign up
          </Styled.SignUpButton>
          {confirmMessage ? (
            <Styled.ConfirmText variant="h6">{t('confirm-message')}</Styled.ConfirmText>
          ) : null}
        </Styled.FormContainer>
      )}
    </>
  );
};

export default Index;

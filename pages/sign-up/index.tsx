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
          <Text variant="h5">{t('user-logged-in')}</Text>
        </Styled.FormContainer>
      ) : (
        <Styled.FormContainer>
          <Text variant="h3">{t('registration')}</Text>
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
          {t('confirm_password')}
          <TextInput
            name="confirm_password"
            placeholder="Confirm password"
            // @ts-ignore
            type="password"
            onChange={(value) => setConfirmedPassword(value)}
          />
          <Button
            onClick={() => onSignUpClick()}
            isDisabled={isSignUpDisabled()}
          >
            Sign up
          </Button>
          {confirmMessage ? (
            <Text variant="h6">{t('confirm-message')}</Text>
          ) : null}
        </Styled.FormContainer>
      )}
    </>
  );
};

export default Index;

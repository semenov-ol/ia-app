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
  const [errorText, setErrorText] = useState('');
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

  const arePasswordsIdentical = (): boolean => {
    return (
      password === confirmedPassword &&
      password.length === confirmedPassword.length
    );
  };

  const showMessage = (): boolean => {
    return (
      isSignUpDisabled() &&
      !arePasswordsIdentical() &&
      confirmedPassword.length >= password.length
    );
  };

  const onSignUpClick = async (e): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch(`${serverUrl}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();
      if (response.status === 201) {
        setConfirmMessage(true);
        setIsError(false);
        (document.getElementById('email') as HTMLInputElement).value = '';
        (document.getElementById('password') as HTMLInputElement).value = '';
        (document.getElementById(
          'confirm_password'
        ) as HTMLInputElement).value = '';
      } else {
        setErrorText(json.message);
        setIsError(true);
      }
    } catch (err) {
      setErrorText(err.statusText);
      setIsError(true);
    }
  };

  const isLoggedInFunc = () => {
    return isLoggedIn ? (
      <Styled.FormContainer>
        <Text variant="h5" align="center">
          {t('user-logged-in')}
        </Text>
      </Styled.FormContainer>
    ) : (
      <Styled.FormContainer>
        <form onSubmit={(e) => onSignUpClick(e)}>
          <Styled.Title variant="h3" align="center">
            {t('registration')}
          </Styled.Title>
          {t('email')}
          <Styled.Input
            id="email"
            placeholder="Enter email"
            // @ts-ignore
            type="email"
            onChange={(value) => setEmail(value)}
          />
          {t('password')}
          <Styled.Input
            id="password"
            placeholder="Enter password"
            // @ts-ignore
            type="password"
            onChange={(value) => setPassword(value)}
          />
          {t('confirm_password')}
          <Styled.InputContainer>
            <TextInput
              id="confirm_password"
              placeholder="Confirm password"
              // @ts-ignore
              type="password"
              onChange={(value) => setConfirmedPassword(value)}
            />
            {showMessage() && (
              <Styled.PasswordErrorMessage variant="small">
                {t('password!=confirm')}
              </Styled.PasswordErrorMessage>
            )}
          </Styled.InputContainer>
          <Styled.SignUpButton isDisabled={isSignUpDisabled()}>
            {t('sign-up')}
          </Styled.SignUpButton>
        </form>
        {confirmMessage ? (
          <Styled.ConfirmText variant="h6">
            {t('confirm-message')}
          </Styled.ConfirmText>
        ) : null}
      </Styled.FormContainer>
    );
  };

  return (
    <>
      <Header />
      {isError ? (
        <Styled.ErrorContainer>
          <Text variant="code">
            {t('_error:something-wrong')} {errorText}
          </Text>
        </Styled.ErrorContainer>
      ) : null}

      {isLoggedIn === undefined ? null : isLoggedInFunc()}
    </>
  );
};

export default Index;

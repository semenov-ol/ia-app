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
    return (password === confirmedPassword) && (password.length === confirmedPassword.length);
  };

  const showMessage = (): boolean => {
    return isSignUpDisabled() && !arePasswordsIdentical() && (confirmedPassword.length >= password.length);
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

      if (response.status === 201) {
        setConfirmMessage(true);
        setIsError(false);
      } else {
        setErrorText(response.statusText);
        setIsError(true);
      }
    } catch (err) {
      setErrorText(err.statusText);
      setIsError(true);
    }
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

      {isLoggedIn === undefined ? null : isLoggedIn ? (
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
            <Styled.InputContainer>
              <TextInput
                name="confirm_password"
                placeholder="Confirm password"
                // @ts-ignore
                type="password"
                onChange={(value) => setConfirmedPassword(value)}
              />
              {showMessage() && (
                <Styled.PasswordErrorMessage>
                  The password and confirm password fields do not match.
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
      )}
    </>
  );
};

export default Index;

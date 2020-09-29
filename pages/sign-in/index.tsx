import React, { FC, useState } from 'react';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Button from 'ustudio-ui/components/Button';
import Text from 'ustudio-ui/components/Text';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import Styled from './sign-in-pages.styles';

import Header from '../../components/header';

const Index: FC = () => {
  const token = Cookies.get('token');

  const { t } = useTranslation('sign-up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const serverUrl = 'http://185.25.116.133:5888';

  const onSignInClick = async (): void => {
    const response = await fetch(`${serverUrl}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    const { userId, accessToken } = json;
    document.cookie = `token=${accessToken}; path=/`;
    document.cookie = `userId=${userId}`;
    if (response.ok) {
      setIsLoggedIn(true);
    }
  };

  const onLoggedOutClick = (): void => {
    Cookies.remove('token');
    setIsLoggedIn(false);
  };

  return (
    <>
      <Header />
      {isLoggedIn ? (
        <Styled.FormContainer>
          <Text variant="h4">Your are logged in</Text>
          <Button onClick={() => onLoggedOutClick()}>Logged out</Button>
        </Styled.FormContainer>
      ) : (
        <Styled.FormContainer>
          <Text variant="h3">{t('authorization')}</Text>
          {t('email')}
          <TextInput
            name="email"
            placeholder="Enter email"
            type="email"
            onChange={(value) => setEmail(value)}
          />
          {t('password')}
          <TextInput
            name="password"
            placeholder="Enter password"
            type="password"
            onChange={(value) => setPassword(value)}
          />
          <Button onClick={() => onSignInClick()}>Sign in</Button>
        </Styled.FormContainer>
      )}
    </>
  );
};

export default Index;

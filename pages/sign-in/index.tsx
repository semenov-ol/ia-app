import React, { useState } from 'react';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Button from 'ustudio-ui/components/Button';
import Text from 'ustudio-ui/components/Text';
import Header from '../../components/header';
import Styled from './sign-in-pages.styles';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const Index = () => {
  const { t } = useTranslation('sign-up');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const serverUrl = 'http://185.25.116.133:5888';

  const onSignInClick = async () => {
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
    document.cookie = `userId=${userId}`
    if (response.ok) {
      await router.push('/');
    }
  };

  return (
    <>
      <Header />
      <Styled.FormContainer>
        <Text variant="h3">{t('authorization')}</Text>
        {t('email')}
        <TextInput
          name="email"
          placeholder="Enter email"
          type="email"
          onChange={(e) => setEmail(e)}
        />
        {t('password')}
        <TextInput
          name="password"
          placeholder="Enter password"
          type="password"
          onChange={(e) => setPassword(e)}
        />
        <Button onClick={() => onSignInClick()}>Sign in</Button>
      </Styled.FormContainer>
    </>
  );
};

export default Index;

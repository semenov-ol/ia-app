import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Text from 'ustudio-ui/components/Text';
import Button from 'ustudio-ui/components/Button';

import Styled from './sign-up-page.styles';
import Header from '../../components/header';

const Index: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [confirmMessage, setConfirmMessage] = useState(false)
  const { t } = useTranslation('sign-up');
  const serverUrl = 'http://185.25.116.133:5888';

  const isSignUpDisabled = () => {
    if (email !== '' && password !== '' && password === confirmedPassword) {
      return false;
    }
    return true;
  };

  const onSignUpClick = async () => {
    console.log(email, password)
    const response = await fetch(`${serverUrl}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if(response.status === 201){
      setConfirmMessage(true)
    }
  };
  return (
    <>
      <Header />
      <Styled.FormContainer>
        <Text variant='h3'>{t('registration')}</Text>
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
        {t('confirm_password')}
        <TextInput
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          onChange={(e) => setConfirmedPassword(e)}
        />
        <Button onClick={() => onSignUpClick()} isDisabled={isSignUpDisabled()}>
          Sign up
        </Button>
        {confirmMessage ? <Text variant='h6'>{t('confirm-message')}</Text> : null}
      </Styled.FormContainer>
    </>
  );
};

export default Index;

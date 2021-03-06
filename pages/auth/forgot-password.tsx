import React, { useState } from 'react';
import Text from 'ustudio-ui/components/Text';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

import Styled from './styles';
import Header from '../../components/header';

const ForgotPassword: NextPage = () => {
  const serverUrl = 'http://185.25.116.133:5888';

  const { t } = useTranslation('sign-up');

  const [email, setEmail] = useState('');
  const [isSentRequest, setIsSentRequest] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const resetPassword = async (): Promise<void> => {
    try {
      const response = await fetch(`${serverUrl}/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Connection: 'keep-alive',
        },
        body: JSON.stringify({ email }),
      });
      if (response && response.status === 201) {
        setIsSentRequest(true);
        setError(false);
      } else {
        setError(true);
        setErrorMessage(response.statusText);
      }
    } catch (err) {
      setError(true);
      setErrorMessage(err.statusText);
    }
  };
  return (
    <>
      <Header />
      {error && (
        <Styled.ErrorContainer>
          <Text>{errorMessage}</Text>
        </Styled.ErrorContainer>
      )}
      <Styled.Container>
        {t('email')}
        <Styled.Input
          placeholder={t('email')}
          onChange={(value) => setEmail(value)}
        />
        {isSentRequest && (
          <Styled.ConfirmMessage variant="article">
            {t('confirm-message')}
          </Styled.ConfirmMessage>
        )}
        <Styled.ResetButton onClick={() => resetPassword()}>
          {t('confirm')}
        </Styled.ResetButton>
      </Styled.Container>
    </>
  );
};

export default ForgotPassword;

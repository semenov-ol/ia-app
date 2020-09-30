import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';
import Text from 'ustudio-ui/components/Text';
import Styled from './styles';
import Header from '../../components/header';

const ChangePassword: NextPage = () => {
  const serverUrl = 'http://185.25.116.133:5888';
  const router = useRouter();
  const { t } = useTranslation('sign-up');
  const { token } = router?.query;

  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmitHandle = async (e): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch(`${serverUrl}/auth/change-password`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Connection: 'keep-alive',
        },
        body: JSON.stringify({ password }),
      });
      if (response && response.status === 200) {
        await router.push('/sign-in');
      } else {
        setIsError(true);
        setErrorMessage(response.statusText);
      }
    } catch (err) {
      setIsError(true);
      setErrorMessage(err.statusText);
    }
  };

  const isButtonDisabled = (): boolean => {
    return !(password !== '' && password === confirmedPassword);
  };
  return (
    <>
      <Header />
      {isError && (
        <Styled.ErrorContainer>
          <Text>{errorMessage}</Text>
        </Styled.ErrorContainer>
      )}
      <Styled.Container>
        <form onSubmit={(e) => onSubmitHandle(e)}>
          {t('new-password')}
          <Styled.Input
            placeholder="Enter new password"
            onChange={(value) => setPassword(value)}
          />
          {t('confirm_password')}
          <Styled.Input
            placeholder="Confirm new password"
            onChange={(value) => setConfirmedPassword(value)}
          />
          <Styled.ResetButton isDisabled={isButtonDisabled()}>
            {t('confirm')}
          </Styled.ResetButton>
        </form>
      </Styled.Container>
    </>
  );
};

export default ChangePassword;

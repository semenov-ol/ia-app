import React, { useState } from 'react';
import Router from 'next/router';
import { NextPage } from 'next';
import Text from 'ustudio-ui/components/Text';
import Styled from './styles';
import Header from '../../components/header';

const ChangePassword: NextPage = () => {
  const serverUrl = 'http://185.25.116.133:5888';

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
          'Content-Type': 'application/json',
          Connection: 'keep-alive',
        },
        body: JSON.stringify({ password }),
      });
      if (response && response.status === 200) {
        await Router.push('/sign-in');
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
          New Password:
          <Styled.Input
            placeholder="Enter new password"
            onChange={(value) => setPassword(value)}
          />
          Confirm password:
          <Styled.Input
            placeholder="Confirm new password"
            onChange={(value) => setConfirmedPassword(value)}
          />
          <Styled.ResetButton isDisabled={isButtonDisabled()}>
            Confirm
          </Styled.ResetButton>
        </form>
      </Styled.Container>
    </>
  );
};

export default ChangePassword;

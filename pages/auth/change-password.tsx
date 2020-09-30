import React, { useState } from 'react';
import Styled from './styles';
import Header from '../../components/header';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const onSubmitHandle = (e) => {
    e.preventDefault()
  };

  const isButtonDisabled = (): boolean => {
    return !(password !== '' && password === confirmedPassword);
  };
  return (
    <>
      <Header />
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

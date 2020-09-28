import React, { FC } from 'react';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Button from 'ustudio-ui/components/Button';
import Styled from './sign-up-page.styles';

import Header from '../../components/header';

const SignUpPage: FC = () => {
  return (
    <>
      <Header />
      <Styled.FormContainer>
        <TextInput name='email' placeholder="Enter email" />
        <TextInput name='password' placeholder="Enter password" />
        <Button>Login</Button>
      </Styled.FormContainer>
    </>
  );
};

export default SignUpPage;

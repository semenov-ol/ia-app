import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Button from 'ustudio-ui/components/Button';
import Styled from './header.styles';

const Header: FC = () => {
  const { i18n } = useTranslation();
  return (
    <Styled.HeaderContainer>
      <Styled.NavContainer>
        <Link href="/">
          <a>Main</a>
        </Link>
        <Link href="/authorization/sign-up-page">
          <a>Sign up</a>
        </Link>
        <Link href={'/'}>
          <a>Login</a>
        </Link>
        <Link href={'/'}>
          <a>My Page</a>
        </Link>
      </Styled.NavContainer>
      <Styled.ButtonContainer>
        <Button
          onClick={() => i18n.changeLanguage('en')}
          style={{ margin: '5px' }}
        >
          English
        </Button>
        <Button
          onClick={() => i18n.changeLanguage('ua')}
          style={{ margin: '5px' }}
        >
          Ukrainian
        </Button>
      </Styled.ButtonContainer>
    </Styled.HeaderContainer>
  );
};

export default Header;

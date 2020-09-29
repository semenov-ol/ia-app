import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Button from 'ustudio-ui/components/Button';
import Styled from './header.styles';

const Header: FC = () => {
  const { t, i18n } = useTranslation('common');
  return (
    <Styled.HeaderContainer>
      <Styled.NavContainer>
        <Link href="/">
          <a>{t('main')}</a>
        </Link>
        <Link href="/sign-up">
          <a>{t('sign-up')}</a>
        </Link>
        <Link href="/sign-in">
          <a>{t('sign-in')}</a>
        </Link>
        <Link href={'/dashboard'}>
          <a>{t('my-page')}</a>
        </Link>
      </Styled.NavContainer>
      <Styled.ButtonContainer>
        <Button
          onClick={() => i18n.changeLanguage('en')}
          style={{ margin: '5px' }}
        >
          {t('en-lng')}
        </Button>
        <Button
          onClick={() => i18n.changeLanguage('ua')}
          style={{ margin: '5px' }}
        >
          {t('ua-lng')}
        </Button>
      </Styled.ButtonContainer>
    </Styled.HeaderContainer>
  );
};

export default Header;

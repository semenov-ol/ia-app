import React from 'react';
import Text from 'ustudio-ui/components/Text';
import Cookies from 'js-cookie';
import type { NextPage } from 'next';

import { handleAuthSSR } from '../../utils/auth';
import Header from '../../components/header';

const Index: NextPage = () => {
  const userId = Cookies.get('userId');

  return (
    <>
      <Header />
      <Text variant="h3">Secret info here:</Text>
      <Text variant="code">Your user id: {userId}</Text>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  await handleAuthSSR(ctx);
  return {};
};

export default Index;

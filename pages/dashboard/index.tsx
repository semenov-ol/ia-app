import React from 'react';
import Text from 'ustudio-ui/components/Text';
import Header from '../../components/header';
import { handleAuthSSR } from '../../utils/auth';

const Index = () => {
  return (
    <>
      <Header />
      <Text variant="h2">Secret info here</Text>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  await handleAuthSSR(ctx);
  return {};
};

export default Index;

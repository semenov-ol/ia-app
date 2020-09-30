import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Text from 'ustudio-ui/components/Text';

import type { NextPage } from 'next';

const Indexes: NextPage = () => {
  const { query } = useRouter();
  const serverUrl = 'http://185.25.116.133:5888';

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await fetch(
        `${serverUrl}/auth/confirm/?token=${query.token}`,
        {
          method: 'GET',
        }
      );
      console.log(response);
      if (response.status !== 200) {
        console.log('ERROR');
      } else {
        await Router.push('/sign-in');
      }
    }

    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Text variant="h2" align="center">
      You will be redirected to the authorization page
    </Text>
  );
};

export default Indexes;

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
      if (response.status !== 200) {
        console.log('ERROR');
      } else {
        await Router.push('/');
      }
    }

    fetchData();
  }, []);

  return (
    <Text variant="h2" align="center">
      You will be redirect to the main page
    </Text>
  );
};

export default Indexes;

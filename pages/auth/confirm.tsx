import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Text from 'ustudio-ui/components/Text';

const Indexes = () => {
  const { query } = useRouter();
  const serverUrl = 'http://185.25.116.133:5888';

  useEffect(() => {
    async function fetchData() {
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

  return <Text variant="h2">You will be redirect to the main page</Text>;
};

export default Indexes;

// Indexes.getInitialProps = async (ctx) => {
//   if (ctx.req) {
//     ctx.res.writeHead(302, { Location: '/' });
//     ctx.res.end();
//   } else {
//     Router.push('/');
//   }
//   return {};
// };

// export async function getStaticProps({params}) {
//   return {
//     props: {
//       params
//     }
//   }
// }
//
// export async function getStaticPaths() {
//   return {
//     query: [{params: {id: 'value'}}],
//     fallback: false,
//   };
// }

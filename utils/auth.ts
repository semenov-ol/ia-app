import Router from 'next/router';
import Cookies from 'js-cookie';

const serverUrl = 'http://185.25.116.133:5888';

const handleAuthSSR = async (ctx) => {
  const token = Cookies.get('token');

  try {
    const response = await fetch(`${serverUrl}/users/secret`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
    });
    if (response && response.status !== 200) {
      throw new Error('Bad Request');
    }
  } catch (err) {
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: '/sign-in' });
      ctx.res.end();
    } else {
      await Router.push('/sign-in');
    }
  }
};

export { handleAuthSSR };

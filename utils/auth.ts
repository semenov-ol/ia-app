import Router from 'next/router';
import Cookies from 'js-cookie';

const serverUrl = 'http://185.25.116.133:5888';

const handleAuthSSR = async (ctx) => {
  const userId = Cookies.get('userId');
  const refreshToken = Cookies.get('refreshToken');

  try {
    const response = await fetch(`${serverUrl}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
      body: JSON.stringify({ userId, refreshToken }),
    });
    if (response && response.status !== 201) {
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

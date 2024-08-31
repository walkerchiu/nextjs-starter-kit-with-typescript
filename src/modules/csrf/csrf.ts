import { ServerResponse } from 'http';

import { serialize } from 'cookie';
import csrf from 'csrf';
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiRequest,
  NextApiResponse,
} from 'next';

const tokens = new csrf();
const secret = process.env.CSRF_SECRET;

export function generateCSRFToken() {
  if (!secret) throw new Error('The secret of CSRF is not defined!');

  const token = tokens.create(secret);

  return token;
}

export function verifyCSRFToken(req: NextApiRequest, res: NextApiResponse) {
  const Token = req.cookies['CSRF-Token'] as string;

  if (!secret) {
    res.status(400).json({ message: 'The secret of CSRF is not defined!' });
    return;
  }
  if (!Token || Token === '') {
    res.status(400).json({ message: 'The CSRF-Token is required!' });
    return;
  }

  const isTokenValid = tokens.verify(secret, Token);

  if (!isTokenValid) {
    res.status(400).json({ message: 'The CSRF-Token is invalid!' });
    return;
  }
}

function setCSRFTokenCookie(
  res: NextApiResponse | ServerResponse,
  Token: string,
) {
  const cookie = getCSRFTokenCookie(Token);
  res.setHeader('Set-Cookie', [cookie]);
}

function getCSRFTokenCookie(Token: string) {
  const cookie = serialize('CSRF-Token', Token, {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    path: `/`,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
  });

  return cookie;
}

export default function setCSRFTokenCookieGetServerSideProps(
  getServerSideProps: (
    context: GetServerSidePropsContext,
  ) => Promise<GetServerSidePropsResult<any>> | GetServerSidePropsResult<any>,
) {
  return async (context: GetServerSidePropsContext) => {
    const { res } = context;
    const Token = generateCSRFToken();

    setCSRFTokenCookie(res, Token);

    return await getServerSideProps(context);
  };
}

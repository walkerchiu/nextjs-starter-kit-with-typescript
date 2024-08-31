import { NextApiRequest, NextApiResponse } from 'next';

import { verifyCSRFToken } from '../../../modules/csrf/csrf';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  verifyCSRFToken(req, res);
  res.status(200).json({ message: 'OK!' });
}

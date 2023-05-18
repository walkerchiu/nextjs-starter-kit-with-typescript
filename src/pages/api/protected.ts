import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { csrf } from "../../modules/next-csrf/csrf";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  // Return a success message
  return res.status(200).json({ message: "This API route is protected." });
};

export default csrf(handler);

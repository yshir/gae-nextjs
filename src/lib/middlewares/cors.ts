import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

export const cors = (req: NextApiRequest, res: NextApiResponse): Promise<Error> => {
  return new Promise((resolve, reject) => {
    Cors({
      origin: 'https://playground-322909.an.r.appspot.com/',
    })(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

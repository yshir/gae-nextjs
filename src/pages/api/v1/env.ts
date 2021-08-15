import { NextApiRequest, NextApiResponse } from 'next';

export default async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  res.status(200).json({
    APP_ENV: process.env['APP_ENV'],
    REVISION_HASH: process.env['REVISION_HASH'],
    REVISION_TIMESTAMP: process.env['REVISION_TIMESTAMP'],
  });
};

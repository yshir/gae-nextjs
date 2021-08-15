import { Storage } from '@google-cloud/storage';
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

const GCP_PROJECT_ID = process.env['GCP_PROJECT_ID'] || '';
const GCP_CLIENT_EMAIL = process.env['GCP_CLIENT_EMAIL'] || '';
const GCP_PRIVATE_KEY = process.env['GCP_PRIVATE_KEY'] || '';
const GCP_BUCKET_NAME = process.env['GCP_BUCKET_NAME'] || '';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
  }

  const storage = new Storage({
    projectId: GCP_PROJECT_ID,
    credentials: {
      client_email: GCP_CLIENT_EMAIL,
      private_key: GCP_PRIVATE_KEY,
    },
  });
  const bucket = storage.bucket(GCP_BUCKET_NAME);

  const name = uuidv4();
  const data = base64ToBuffer(req.body.base64);

  const file = bucket.file(name);
  await file.save(data, {
    public: false,
    resumable: false,
    validation: false,
  });
  const [metadata] = await file.getMetadata();

  res.status(200).json({ ...metadata });
};

const base64ToBuffer = (base64: string): Buffer => {
  return Buffer.from(base64.replace(/^data:\w+\/\w+;base64,/, ''), 'base64');
};

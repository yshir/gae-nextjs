import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <>
      <p>Hello, World.</p>
      <p>{JSON.stringify(process.env['REVISION_HASH'])}</p>
    </>
  );
};

export default Page;

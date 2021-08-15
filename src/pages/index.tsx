import { NextPage } from 'next';
import { useState } from 'react';

const Page: NextPage = () => {
  const [base64, setBase64] = useState<string | null>(null);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setBase64(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/v1/storage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ base64 }),
    });
    const json = await res.json();
    console.log({ json });

    alert('ok');
  };

  return (
    <>
      <p>upload:</p>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div>
          <input type="file" accept="image/*" onChange={handleChangeFile} />
        </div>
        <div>
          <button type="submit" disabled={!base64}>
            submit
          </button>
        </div>
      </form>
      <p>base64: {base64}</p>

      <hr />

      <div>
        <button
          onClick={async () => {
            const res = await fetch('/api/v1/ping', {
              method: 'POST',
            });
            const json = await res.json();
            alert(JSON.stringify(json, null, 2));
          }}
        >
          test
        </button>
      </div>
    </>
  );
};

export default Page;

/** @type {import('next/dist/next-server/server/config-shared').NextConfig} */

const config = {
  env: {
    APP_ENV: process.env.APP_ENV,
    REVISION_HASH: process.env.REVISION_HASH,
    REVISION_TIMESTAMP: process.env.REVISION_TIMESTAMP,
  },
};

module.exports = config;

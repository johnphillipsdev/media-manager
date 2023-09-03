/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MOVIE_TOKEN: process.env.MOVIE_TOKEN,
  },
};

module.exports = nextConfig;

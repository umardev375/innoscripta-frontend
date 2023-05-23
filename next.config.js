/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "waffa-fe.s3.amazonaws.com",
      "meta-ruffy.s3.amazonaws.com",
      "ipfs.infura.io",
      "metaruffy.infura-ipfs.io",
      "images.unsplash.com",
      "oom.infura-ipfs.io",
      "lh3.googleusercontent.com",
      "oneofamint.infura-ipfs.io"
    ],
  },
};

module.exports = nextConfig;

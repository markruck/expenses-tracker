/** @type {import("next").NextConfig} */
module.exports = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com/u/25143280?v=4',
        port: '',
        pathname: '/*',
      },
    ],
  },
};

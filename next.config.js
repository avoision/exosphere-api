/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://chat.openai.com',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig

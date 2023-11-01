/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ENDPOINT: 'https://api.ucbad.com',
        DOMAIN: 'https://ijepem.com'
    },
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true,
    }
};

module.exports = nextConfig;


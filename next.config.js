/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ENDPOINT: 'https://api.iseser.com',
        DOMAIN: 'https://ijepem.com'
    },
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true,
    }
};

module.exports = nextConfig;


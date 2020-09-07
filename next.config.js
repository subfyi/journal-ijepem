const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = phase => {
    var config = withPlugins([
        [
            optimizedImages, {
            /* config for next-optimized-images */
        }
        ]
    ]).apply(this, arguments);

    if (!config.env) {
        config.env = {};
    }

    config.env.ENDPOINT = phase === PHASE_DEVELOPMENT_SERVER ?
        'http://localhost:8000' :
        'https://api.ucbad.com';

    config.env.DOMAIN = phase === PHASE_DEVELOPMENT_SERVER ?
        'http://localhost:3000' :
        'https://ijepem.com';

    config.env.DEV = phase === PHASE_DEVELOPMENT_SERVER ? true : false;

    config.trailingSlash = true;

    return config;
};

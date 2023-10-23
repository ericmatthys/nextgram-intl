const withNextIntl = require('next-intl/plugin')();

/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com'],
  },
};

module.exports = withNextIntl(config);
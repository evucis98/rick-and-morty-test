const path = require('path');

const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  images: {
    domains: ['rickandmortyapi.com'],
  },
});

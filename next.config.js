const { nextI18NextRewrites } = require('next-i18next/rewrites');

// @ts-ignore
const localeSubpaths = {};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};

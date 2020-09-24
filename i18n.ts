// @ts-ignore
const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  otherLanguages: ['ua'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
});

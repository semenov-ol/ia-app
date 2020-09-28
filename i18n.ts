import NextI18Next from 'next-i18next';
import path from 'path';
import { NextComponentType, NextPageContext } from 'next';

const languages = ['en', 'ua'];

export const nextI18next = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ua'],
  localePath: path.resolve('public/static/locales'),
});

nextI18next.i18n.languages = languages;

export const includeDefaultNamespaces = (namespaces: string[]) =>
  ['common', '_error'].concat(namespaces);

export const { Trans, appWithTranslation, i18n } = nextI18next;

export type I18nPage<P = Record<string, unknown>> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>;

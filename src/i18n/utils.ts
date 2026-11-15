import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in ui ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: keyof (typeof ui)[typeof defaultLang]) =>
    ui[lang][key] ?? ui[defaultLang][key];
}

export function localePath(lang: Lang, path: string) {
  return lang === defaultLang ? path : `/${lang}${path}`;
}
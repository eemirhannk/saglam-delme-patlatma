import { tr, en } from './resources';

export function getDictionary(locale) {
  return locale === 'en' ? en.translation : tr.translation;
}

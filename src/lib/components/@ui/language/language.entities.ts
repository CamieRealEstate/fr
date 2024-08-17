export const KEY_LANG = 'lang'
export const DEFAULT_LANG = 'en'

export interface Lang {
  code: string;
  name: string;
  icon: string;
}

export const langs: Lang[] = [
  { code: 'en', name: 'English', icon: 'en.png' },
  { code: 'vi', name: 'Tiếng Việt', icon: 'vi.png' },
];
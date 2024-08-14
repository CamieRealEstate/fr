export interface Lang {
  code: string;
  name: string;
  icon: string;
}

export interface Link {
  name: string;
  route: string;
}

export const langs: Lang[] = [
  { code: 'en', name: 'English', icon: 'en.png' },
  { code: 'vi', name: 'Tiếng Việt', icon: 'vi.png' },
];

export const links: Link[] = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Regions', route: '/regions' },
];
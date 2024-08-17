export interface Link {
  name: string;
  route: string;
}

export const links: Link[] = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Regions', route: '/regions' },
];
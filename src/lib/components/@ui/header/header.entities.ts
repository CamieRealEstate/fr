export interface Link {
  name: string;
  route: string;
}

export const links: Link[] = [
  { name: 'Regions', route: '/home' },
  { name: 'Listing', route: '/listing' },
  // { name: 'About', route: '/about' },
];
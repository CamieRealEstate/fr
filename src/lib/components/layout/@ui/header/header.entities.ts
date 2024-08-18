export interface Link {
  name: string;
  route: string;
}

export const links: Link[] = [
  { name: 'About', route: '/about' },
  { name: 'Listing', route: '/listing' },
];
export interface InfoList {
  area?: string;
  averageAreaOfUnit?: string;
  developer?: string;
  estimatedHandoverDate?: number;
  phase?: number;
  subzone?: number;
  handoverStandard?: string;
  height?: number;
  numberOfUnit?: number;
  startingPrice?: number;
  maxPrice?: number;
  towers?: number;
  type?: string[];
}

export interface Layout {
  imgUrl?: string;
  imgDesc?: string;
  imgVisible?: boolean;
}

export interface Description {
  imgUrl?: string;
  imgDesc?: string;
}

export interface Image {
  id: number;
  url: string;
}

export interface ListItem {
  address?: string;
  brochureUrl?: string;
  descriptions?: Description[];
  detail?: string;
  facilities?: string[];
  id: number;
  imgUrls?: Image[];
  info?: InfoList;
  layouts?: Layout[];
  locationImgUrl?: string;
  logoUrl?: string;
  name?: string;
  state?: string;
  tags?: string[];
}

export interface Data {
  [key: string]: ListItem[];
}

export const data: Data = {
  HN: [

  ],
  DN: [

  ],
  HCM: [
    {
      id: 0,
      name: 'SYCAMORE',
      state: 'Hot',
      detail: 'SY-0-details',
      logoUrl: '/fr/sycamore/logo.png',
      brochureUrl: 'http://google.com',
      descriptions: [
        { imgDesc: 'SY-1-details', imgUrl: '/fr/sycamore/detail-1.png' },
        { imgDesc: 'SY-2-details', imgUrl: '/fr/sycamore/detail-2.png' },
      ],
      address: 'Binh Duong New City, Viet Nam',
      locationImgUrl: 'cat.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg' },
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat.jpg  ' }
      ],
      info: {
        phase: 2,
        subzone: 7,
        area: '18.9 hectors',
        averageAreaOfUnit: '60 m² to 250 m²',
        developer: 'CapitaLand and UOA Group',
        maxPrice: 95,
        numberOfUnit: 3500,
        startingPrice: 48,
        type: ['Apartment', 'Townhouse', 'Villa'],
      },
      imgUrls: [
        { id: 1, url: 'cat.jpg' },
        { id: 2, url: 'cat-2.jpg' },
        { id: 3, url: 'cat-3.jpg' },
      ]
    },
  ]
};
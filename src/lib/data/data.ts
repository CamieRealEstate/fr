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
  region: Region;
  state?: string;
  tags?: string[];
}

export type Region = 'BK' | 'TK' | 'NK';

export interface Data {
  [key: string]: ListItem[];
}

export const data: Data = {
  BK: [

  ],
  TK: [

  ],
  NK: [
    {
      id: 0,
      region: 'NK',
      name: 'SYCAMORE',
      state: 'Hot',
      detail: 'SY-0-details',
      logoUrl: '/fr/sycamore/logo.png',
      brochureUrl: 'https://drive.google.com/drive/folders/1KlO8EPYlCKi8ukHP6IRphjWTTW2ooTPZ?usp=sharing',
      descriptions: [
        { imgDesc: 'SY-1-details', imgUrl: '/fr/sycamore/detail-1.jpg' },
        { imgDesc: 'SY-2-details', imgUrl: '/fr/sycamore/detail-2.jpg' },
      ],
      address: 'Binh Duong New City, Viet Nam',
      locationImgUrl: '/fr/sycamore/location.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg' },
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat-2.jpg  ' }
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
        { id: 1, url: '/fr/sycamore/slide-1.jpg' },
        { id: 2, url: '/fr/sycamore/slide-2.jpg' },
        { id: 3, url: '/fr/sycamore/slide-3.jpg' },
      ]
    },
    {
      id: 1,
      name: 'THE OPUSK',
      state: 'Hot',
      detail: 'OP-0-details',
      logoUrl: '/fr/Opusk/cover/2.png',
      brochureUrl: 'https://drive.google.com/file/d/1xMJUK8j4lLeCiAOf62jzqg7YOPj4A4HL/view?usp=sharing',
      descriptions: [
        { imgDesc: 'OP-1-details', imgUrl: '/fr/Opusk/Location1.jpg' },
        { imgDesc: 'SY-2-details', imgUrl: '/fr/sycamore/detail-2.jpg' },
      ],
      address: 'Thu Thiem, Ho Chi Minh City, Viet Nam',
      locationImgUrl: '/fr/Opusk/Location.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan floor 9-18 and 20-23', imgUrl: '/fr/Opusk/FloorPlan/1.png' },
        { imgDesc: 'Typical floor plan floor 24-33', imgUrl: '/fr/Opusk/FloorPlan/2.jpg' }
      ],
      info: {
        phase: 4,
        area: '8518 m²',
        averageAreaOfUnit: '84 m² to 214 m²',
        developer: 'Son Kim Land & Quoc Loc Phat',
        maxPrice: 300,
        startingPrice: 250,
        type: ['Apartment', 'Shophouse', 'Officetel'],
      },
      imgUrls: [
        { id: 1, url: '/fr/Opusk/cover/1.jpg' },
        { id: 2, url: '/fr/Opusk/cover/3.jpg' },
        { id: 3, url: '/fr/Opusk/cover/4.jpg' },
        { id: 4, url: '/fr/Opusk/cover/6.jpg' },
        { id: 5, url: '/fr/Opusk/cover/7.jpg' },
      ]
    },
  ]
};
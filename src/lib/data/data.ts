export interface InfoList {
  area?: string;
  averageAreaOfUnit?: string;
  developer?: string;
  designer?: string;
  estimatedHandoverDate?: string;
  handoverStandard?: string;
  height?: number;
  maxPrice?: number;
  numberOfUnit?: string;
  operator?: string;
  phase?: number;
  startingPrice?: number;
  startFrom?: number;
  subzone?: number;
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

export interface Location {
  id: number;
  url: string;
  desc: string;
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
  location?: Location;
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
  BK: [],
  TK: [
    {
      id: 0,
      region: 'TK',
      name: 'NOBU DA NANG',
      state: 'Hot',
      detail: 'NB-0-details',
      logoUrl: '/fr/nobu/logo.png',
      brochureUrl: 'https://drive.google.com/drive/folders/1_gUKNEFaiwDqKbAZ5AILyTypZxgI2-nK?usp=sharing',
      descriptions: [
        { imgDesc: 'NB-1-details', imgUrl: '/fr/nobu/podium.jpg' },
      ],
      address: 'Son Tra, Da Nang, Viet Nam',
      location: { id: 0, url: '/fr/nobu/location.png', desc: 'NB-location' },
      layouts: [
        { imgDesc: 'Tower overview', imgUrl: '/fr/nobu/floor-plan/1.jpg' },
      ],
      info: {
        area: '3000 m²',
        averageAreaOfUnit: '42 m² to 425 m²',
        developer: 'VCRE',
        operator: 'Managed by Nobu Hospitality',
        designer: 'Planetworks (USA)',
        numberOfUnit: '186 hotels and 264 vacation apartment',
        startFrom: 120,
        type: ['Vacation Apartment', 'Restaurant', 'Hotel'],
        estimatedHandoverDate: "Q1.2027"
      },
      imgUrls: [
        { id: 0, url: '/fr/nobu/logo.png' },
        { id: 1, url: '/fr/nobu/hotel.png' },
        { id: 2, url: '/fr/nobu/capture.png'},
        { id: 3, url: '/fr/nobu/fineDining.jpg'},
        { id: 4, url: '/fr/nobu/chef.jpg'}
      ]
    }
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
        { imgDesc: 'SY-2-details', imgUrl: '/fr/sycamore/detail-2.jpg' }
      ],
      address: 'Binh Duong New City, Viet Nam',
      location: { id: 0, url: '/fr/sycamore/location.jpg', desc: '' },
      layouts: [
        { imgDesc: 'Typical floor plan of Orchard Hill I', imgUrl: '/fr/sycamore/floor-plan/1.jpg' },
        { imgDesc: 'Typical floor plan of Orchard Hill II', imgUrl: '/fr/sycamore/floor-plan/2.jpg' },
        { imgDesc: 'Duplex floor plan', imgUrl: '/fr/sycamore/floor-plan/3.png' },
        { imgDesc: 'Penthouse floor plan', imgUrl: '/fr/sycamore/floor-plan/4.png' }
      ],
      info: {
        phase: 2,
        subzone: 7,
        area: '18.9 hectors',
        averageAreaOfUnit: '60 m² to 250 m²',
        developer: 'CapitaLand and UOA Group',
        maxPrice: 95,
        numberOfUnit: '3500',
        startingPrice: 48,
        type: ['Apartment', 'Townhouse', 'Villa']
      },
      imgUrls: [
        { id: 0, url: '/fr/sycamore/slide-1.jpg' },
        { id: 1, url: '/fr/sycamore/slide-2.jpg' },
        { id: 2, url: '/fr/sycamore/slide-3.jpg' }
      ]
    },
    {
      id: 1,
      region: 'NK',
      name: 'THE OPUSK',
      state: 'Hot',
      detail: 'OP-0-details',
      logoUrl: '/fr/Opusk/cover/2.png',
      brochureUrl: 'https://drive.google.com/file/d/1xMJUK8j4lLeCiAOf62jzqg7YOPj4A4HL/view?usp=sharing',
      descriptions: [
        { imgDesc: 'OP-1-details', imgUrl: '/fr/Opusk/Location1.jpg' }
      ],
      address: 'Thu Thiem, Ho Chi Minh City, Viet Nam',
      location: { id: 0, url: '/fr/Opusk/Location.jpg', desc: 'OP-Location-Desc' },
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
        type: ['Apartment', 'Shophouse', 'Officetel']
      },
      imgUrls: [
        { id: 0, url: '/fr/Opusk/cover/1.jpg' },
        { id: 1, url: '/fr/Opusk/cover/3.jpg' },
        { id: 2, url: '/fr/Opusk/cover/4.jpg' },
        { id: 3, url: '/fr/Opusk/cover/6.jpg' },
        { id: 4, url: '/fr/Opusk/cover/7.jpg' }
      ]
    }
  ]
};
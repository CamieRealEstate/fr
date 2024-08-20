export interface InfoList {
  area?: string;
  averageAreaOfUnit?: string;
  developer?: string;
  estimatedHandoverDate?: number;
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
    {
      id: 0,
      name: 'lỏdland',
      state: 'Hot',
      detail: 'HN-1-details',
      brochureUrl: 'http://google.com',
      descriptions: [
        { imgDesc: 'Desc 1', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 2', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 3', imgUrl: 'cat.jpg'},
      ],
      address: '69 Nibba nae nae',
      locationImgUrl: 'cat.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg'},
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat.jpg  '}
      ],
      info: {
        area: '69 hectors',
        averageAreaOfUnit: '30 m² to 100 m²',
        developer: 'Lmao Inc',
        estimatedHandoverDate: 2025,
        handoverStandard: 'Completed',
        height: 14,
        maxPrice: 40,
        numberOfUnit: 5678,
        startingPrice: 3,
        towers: 3,
        type: ['Apartment','Villa'],
      },
      imgUrls:[
        { id: 1, url: 'cat.jpg'},
        { id: 2, url: 'cat-2.jpg'},
        { id: 3, url: 'cat-3.jpg'},
      ]
    },
    {
      id: 1,
      name: 'lỏdland',
      state: 'Hot',
      detail: 'HN-1-details',
      brochureUrl: 'http://google.com',
      descriptions: [
        { imgDesc: 'Desc 1', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 2', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 3', imgUrl: 'cat.jpg'},
      ],
      address: '69 Nibba nae nae',
      locationImgUrl: 'cat.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg'},
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat.jpg  '}
      ],
      info: {
        area: '69 hectors',
        averageAreaOfUnit: '30 m² to 100 m²',
        developer: 'Lmao Inc',
        estimatedHandoverDate: 2025,
        handoverStandard: 'Completed',
        height: 14,
        maxPrice: 40,
        numberOfUnit: 5678,
        startingPrice: 3,
        towers: 3,
        type: ['Apartment','Villa'],
      },
      imgUrls:[
        { id: 1, url: 'cat.jpg'},
        { id: 2, url: 'cat-2.jpg'},
        { id: 3, url: 'cat-3.jpg'},
      ]
    },
    {
      id: 2,
      name: 'lỏdland',
      state: 'Hot',
      detail: 'HN-1-details',
      brochureUrl: 'http://google.com',
      descriptions: [
        { imgDesc: 'Desc 1', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 2', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 3', imgUrl: 'cat.jpg'},
      ],
      address: '69 Nibba nae nae',
      locationImgUrl: 'cat.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg'},
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat.jpg  '}
      ],
      info: {
        area: '69 hectors',
        averageAreaOfUnit: '30 m² to 100 m²',
        developer: 'Lmao Inc',
        estimatedHandoverDate: 2025,
        handoverStandard: 'Completed',
        height: 14,
        maxPrice: 40,
        numberOfUnit: 5678,
        startingPrice: 3,
        towers: 3,
        type: ['Apartment','Villa'],
      },
      imgUrls:[
        { id: 1, url: 'cat.jpg'},
        { id: 2, url: 'cat-2.jpg'},
        { id: 3, url: 'cat-3.jpg'},
      ]
    },
    {
      id: 3,
      name: 'lỏdland',
      state: 'Hot',
      detail: 'HN-1-details',
      brochureUrl: 'http://google.com',
      descriptions: [
        { imgDesc: 'Desc 1', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 2', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 3', imgUrl: 'cat.jpg'},
      ],
      address: '69 Nibba nae nae',
      locationImgUrl: 'cat.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg'},
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat.jpg  '}
      ],
      info: {
        area: '69 hectors',
        averageAreaOfUnit: '30 m² to 100 m²',
        developer: 'Lmao Inc',
        estimatedHandoverDate: 2025,
        handoverStandard: 'Completed',
        height: 14,
        maxPrice: 40,
        numberOfUnit: 5678,
        startingPrice: 3,
        towers: 3,
        type: ['Apartment','Villa'],
      },
      imgUrls:[
        { id: 1, url: 'cat.jpg'},
        { id: 2, url: 'cat-2.jpg'},
        { id: 3, url: 'cat-3.jpg'},
      ]
    },
  ],
  DN: [
    {
      id: 0,
      name: 'lỏdland',
      state: 'Hot',
      detail: 'HN-1-details',
      brochureUrl: 'http://google.com',
      descriptions: [
        { imgDesc: 'Desc 1', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 2', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 3', imgUrl: 'cat.jpg'},
      ],
      address: '69 Nibba nae nae',
      locationImgUrl: 'cat.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg'},
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat.jpg  '}
      ],
      info: {
        area: '69 hectors',
        averageAreaOfUnit: '30 m² to 100 m²',
        developer: 'Lmao Inc',
        estimatedHandoverDate: 2025,
        handoverStandard: 'Completed',
        height: 14,
        maxPrice: 40,
        numberOfUnit: 5678,
        startingPrice: 3,
        towers: 3,
        type: ['Apartment','Villa'],
      },
      imgUrls:[
        { id: 1, url: 'cat.jpg'},
        { id: 2, url: 'cat-2.jpg'},
        { id: 3, url: 'cat-3.jpg'},
      ]
    },
    {
      id: 1,
      name: 'lỏdland',
      state: 'Hot',
      detail: 'HN-1-details',
      brochureUrl: 'http://google.com',
      descriptions: [
        { imgDesc: 'Desc 1', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 2', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 3', imgUrl: 'cat.jpg'},
      ],
      address: '69 Nibba nae nae',
      locationImgUrl: 'cat.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg'},
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat.jpg  '}
      ],
      info: {
        area: '69 hectors',
        averageAreaOfUnit: '30 m² to 100 m²',
        developer: 'Lmao Inc',
        estimatedHandoverDate: 2025,
        handoverStandard: 'Completed',
        height: 14,
        maxPrice: 40,
        numberOfUnit: 5678,
        startingPrice: 3,
        towers: 3,
        type: ['Apartment','Villa'],
      },
      imgUrls:[
        { id: 1, url: 'cat.jpg'},
        { id: 2, url: 'cat-2.jpg'},
        { id: 3, url: 'cat-3.jpg'},
      ]
    },
    {
      id: 2,
      name: 'lỏdland',
      state: 'Hot',
      detail: 'HN-1-details',
      brochureUrl: 'http://google.com',
      descriptions: [
        { imgDesc: 'Desc 1', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 2', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 3', imgUrl: 'cat.jpg'},
      ],
      address: '69 Nibba nae nae',
      locationImgUrl: 'cat.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg'},
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat.jpg  '}
      ],
      info: {
        area: '69 hectors',
        averageAreaOfUnit: '30 m² to 100 m²',
        developer: 'Lmao Inc',
        estimatedHandoverDate: 2025,
        handoverStandard: 'Completed',
        height: 14,
        maxPrice: 40,
        numberOfUnit: 5678,
        startingPrice: 3,
        towers: 3,
        type: ['Apartment','Villa'],
      },
      imgUrls:[
        { id: 1, url: 'cat.jpg'},
        { id: 2, url: 'cat-2.jpg'},
        { id: 3, url: 'cat-3.jpg'},
      ]
    },
    {
      id: 3,
      name: 'lỏdland',
      state: 'Hot',
      detail: 'HN-1-details',
      brochureUrl: 'http://google.com',
      descriptions: [
        { imgDesc: 'Desc 1', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 2', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 3', imgUrl: 'cat.jpg'},
      ],
      address: '69 Nibba nae nae',
      locationImgUrl: 'cat.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg'},
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat.jpg  '}
      ],
      info: {
        area: '69 hectors',
        averageAreaOfUnit: '30 m² to 100 m²',
        developer: 'Lmao Inc',
        estimatedHandoverDate: 2025,
        handoverStandard: 'Completed',
        height: 14,
        maxPrice: 40,
        numberOfUnit: 5678,
        startingPrice: 3,
        towers: 3,
        type: ['Apartment','Villa'],
      },
      imgUrls:[
        { id: 1, url: 'cat.jpg'},
        { id: 2, url: 'cat-2.jpg'},
        { id: 3, url: 'cat-3.jpg'},
      ]
    },
  ],
  HCM: [
    {
      id: 0,
      name: 'lỏdland',
      state: 'Hot',
      detail: 'HN-1-details',
      brochureUrl: 'http://google.com',
      descriptions: [
        { imgDesc: 'Desc 1', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 2', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 3', imgUrl: 'cat.jpg'},
      ],
      address: '69 Nibba nae nae',
      locationImgUrl: 'cat.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg'},
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat.jpg  '}
      ],
      info: {
        area: '69 hectors',
        averageAreaOfUnit: '30 m² to 100 m²',
        developer: 'Lmao Inc',
        estimatedHandoverDate: 2025,
        handoverStandard: 'Completed',
        height: 14,
        maxPrice: 40,
        numberOfUnit: 5678,
        startingPrice: 3,
        towers: 3,
        type: ['Apartment','Villa'],
      },
      imgUrls:[
        { id: 1, url: 'cat.jpg'},
        { id: 2, url: 'cat-2.jpg'},
        { id: 3, url: 'cat-3.jpg'},
      ]
    },
    {
      id: 1,
      name: 'lỏdland',
      state: 'Hot',
      detail: 'HN-1-details',
      brochureUrl: 'http://google.com',
      descriptions: [
        { imgDesc: 'Desc 1', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 2', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 3', imgUrl: 'cat.jpg'},
      ],
      address: '69 Nibba nae nae',
      locationImgUrl: 'cat.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg'},
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat.jpg  '}
      ],
      info: {
        area: '69 hectors',
        averageAreaOfUnit: '30 m² to 100 m²',
        developer: 'Lmao Inc',
        estimatedHandoverDate: 2025,
        handoverStandard: 'Completed',
        height: 14,
        maxPrice: 40,
        numberOfUnit: 5678,
        startingPrice: 3,
        towers: 3,
        type: ['Apartment','Villa'],
      },
      imgUrls:[
        { id: 1, url: 'cat.jpg'},
        { id: 2, url: 'cat-2.jpg'},
        { id: 3, url: 'cat-3.jpg'},
      ]
    },
    {
      id: 2,
      name: 'lỏdland',
      state: 'Hot',
      detail: 'HN-1-details',
      brochureUrl: 'http://google.com',
      descriptions: [
        { imgDesc: 'Desc 1', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 2', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 3', imgUrl: 'cat.jpg'},
      ],
      address: '69 Nibba nae nae',
      locationImgUrl: 'cat.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg'},
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat.jpg  '}
      ],
      info: {
        area: '69 hectors',
        averageAreaOfUnit: '30 m² to 100 m²',
        developer: 'Lmao Inc',
        estimatedHandoverDate: 2025,
        handoverStandard: 'Completed',
        height: 14,
        maxPrice: 40,
        numberOfUnit: 5678,
        startingPrice: 3,
        towers: 3,
        type: ['Apartment','Villa'],
      },
      imgUrls:[
        { id: 1, url: 'cat.jpg'},
        { id: 2, url: 'cat-2.jpg'},
        { id: 3, url: 'cat-3.jpg'},
      ]
    },
    {
      id: 3,
      name: 'lỏdland',
      state: 'Hot',
      detail: 'HN-1-details',
      brochureUrl: 'http://google.com',
      descriptions: [
        { imgDesc: 'Desc 1', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 2', imgUrl: 'cat.jpg'},
        { imgDesc: 'Desc 3', imgUrl: 'cat.jpg'},
      ],
      address: '69 Nibba nae nae',
      locationImgUrl: 'cat.jpg',
      layouts: [
        { imgDesc: 'Typical floor plan', imgUrl: 'cat.jpg'},
        { imgDesc: 'Penhouse floor plan', imgUrl: 'cat.jpg  '}
      ],
      info: {
        area: '69 hectors',
        averageAreaOfUnit: '30 m² to 100 m²',
        developer: 'Lmao Inc',
        estimatedHandoverDate: 2025,
        handoverStandard: 'Completed',
        height: 14,
        maxPrice: 40,
        numberOfUnit: 5678,
        startingPrice: 3,
        towers: 3,
        type: ['Apartment','Villa'],
      },
      imgUrls:[
        { id: 1, url: 'cat.jpg'},
        { id: 2, url: 'cat-2.jpg'},
        { id: 3, url: 'cat-3.jpg'},
      ]
    },
  ]
};
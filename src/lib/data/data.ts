export interface InfoList {
  developer?: string;
  area?: string;
  type?: string;
  towers?: string;
  height?: number;
  numberOfUnit?: number;
  averageAreaOfUnit?: string;
  estimatedHandoverDate?: Date;
  handoverStandard?: string;
}

export interface Layout {
  imgUrl?: string;
}

export interface ListItem {
  id: number;
  name?: string;
  address?: string;
  state?: string;
  locationImgUrl?: string;
  info?: InfoList;
  detail?: string;
  layouts?: Layout[];
  facilities?: string[];
  tags?: string[];
  logoUrl?: string;
  descriptions?: string[];
  images?: string[];
  brochureUrl?: string;
}

export interface Data {
  [key: string]: ListItem[];
}

export const data: Data = {
  HN: [
    {
      id: 0,
      name: 'dumaland',
      state: 'Hot',
      detail: 'HN-1-details',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 1,
      name: 'dumami',
      detail: 'HN-1-details',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 2,
      name: 'dumami',
      detail: 'HN-1-details',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 3,
      name: 'dumami',
      detail: 'HN-1-details',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 4,
      name: 'dumami',
      detail: 'HN-1-details',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 5,
      name: 'dumami',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    }
  ],
  DN: [
    {
      id: 0,
      name: 'dumaland',
      state: 'Hot',
      detail: 'HN-1-details',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 1,
      name: 'dumami',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 2,
      name: 'dumami',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 3,
      name: 'dumami',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 4,
      name: 'dumami',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 5,
      name: 'dumami',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    }
  ],
  HCM: [
    {
      id: 0,
      name: 'dumaland',
      state: 'Hot',
      detail: 'HN-1-details',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 1,
      name: 'dumami',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 2,
      name: 'dumami',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 3,
      name: 'dumami',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 4,
      name: 'dumami',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    },
    {
      id: 5,
      name: 'dumami',
      address: '668 Lê Đức Thọ, Gò Vấp',
      info: {
        averageAreaOfUnit: '37 hectors',
        type: 'Apartment'
      }
    }
  ]
};
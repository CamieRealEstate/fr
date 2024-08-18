export const KEY_REGION = 'region';
export const DEFAULT_REGION = 'HCM';

export interface InfoList {
  developer?: string;
  area?: string;
  type?: string;
  towers?: string;
  height?: number;
  numberOfUnit?: number;
  averageAreaOfUnit?: number;
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
  locationImgUrl?: string;
  info?: InfoList;
  detail?: string;
  layouts?: Layout[];
  facilities?: string[];
  tags?: string[];
  logo?: string;
  descriptions?: string[];
  images?: string[];
  brochureUrl?: string;
}

export interface Data {
  [key: string]: ListItem[];
}
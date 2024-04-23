import { StaticImageData } from "next/image";

export interface IItemImage {
  id?: number;
  title: string;
  src: string | StaticImageData;
  description: string;
}

export interface IDbItem {
  title: string;
  content: string | string[];
  images: IItemImage[];
  isSeparatePage: boolean;
}

export interface IDbItems {
  [key: string]: IDbItem;
}

export interface IDbManufacturer {
  id: number;
  title: string;
  image: StaticImageData;
  itemTypes: {
    sudo: string;
    title: string;
  }[];
}

export interface ISliderData {
  id?: string;
  title: string;
  src: string | StaticImageData;
  description?: string;
}

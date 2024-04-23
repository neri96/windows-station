"use client";

import { createContext } from "react";

import { ItemType } from "../components/ui/Item/ts/types";
import { IDbItems, ISliderData } from "../db/ts/interfaces";

export const CtxItemData = createContext<{
  items: IDbItems;
  itemType: ItemType;
} | null>(null);

export const CtxGalleryImages = createContext<{
  items: ISliderData[];
  initialIndex: number;
  toggleCarousel: () => void;
}>({ items: [], initialIndex: 0, toggleCarousel: () => null });

export const CtxImageZoom = createContext<number>(1);

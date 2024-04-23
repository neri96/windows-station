"use client";

import ItemManufacturer from "./ItemManufacturer";

import { CtxItemData } from "@/app/context";

import { ItemType } from "../ts/types";
import { IDbItems, IDbManufacturer } from "@/app/db/ts/interfaces";

export const Item = ({
  data,
  itemType,
}: {
  data: { items: IDbItems; manufacturers: IDbManufacturer[] };
  itemType: ItemType;
}) => {
  const { items, manufacturers } = data;

  return (
    <>
      <CtxItemData.Provider value={{ items, itemType }}>
        <ItemManufacturer manufacturers={manufacturers} />
      </CtxItemData.Provider>
    </>
  );
};

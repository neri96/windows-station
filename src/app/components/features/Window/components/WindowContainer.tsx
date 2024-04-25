import PageTop from "@/app/components/ui/PageTop";
import Item from "@/app/components/ui/Item";

import imgWindow from "@/app/assets/windows.webp";

import items from "@/app/db/window/items";
import manufacturers from "@/app/db/window/manufacturers";

import { ItemType } from "@/app/components/ui/Item/ts/types";

export const WindowContainer = () => {
  return (
    <>
      <PageTop title="our windows offered" background={imgWindow} />
      <Item data={{ items, manufacturers }} itemType={ItemType.Window} />
    </>
  );
};

import PageTop from "@/app/components/ui/PageTop";
import Item from "@/app/components/ui/Item";

import imgDoor from "@/app/assets/doors.jpg";

import items from "@/app/db/door/items";
import manufacturers from "@/app/db/door/manufacturers";

import { ItemType } from "@/app/components/ui/Item/ts/types";

export const DoorContainer = () => {
  return (
    <>
      <PageTop
        title={"need a better door? we can do that!"}
        background={imgDoor}
      />
      <Item data={{ items, manufacturers }} itemType={ItemType.Door} />
    </>
  );
};

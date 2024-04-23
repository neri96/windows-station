import { v4 as uuid } from "uuid";

import Image from "next/image";
import Link from "next/link";

import DropDown from "@/app/components/ui/DropDown";
import ToolTip, {
  ToolTipPositionHorizontal,
  ToolTipPositionVertical,
} from "@/app/components/ui/ToolTip";

import { StyledMainNavLi, StyledMainNavTitle } from "./MainNavDetails.style";

const serviceList = [
  { id: uuid(), title: "windows", link: "/windows" },
  { id: uuid(), title: "doors", link: "/doors" },
];

const MainNavDetails = ({
  index,
  data,
  isMenuOpen,
}: {
  index: number;
  data: { id: string; title: string; link: string; icon: string };
  isMenuOpen: boolean;
}) => {
  const { title, link, icon } = data;

  return (
    <StyledMainNavLi $isOpen={isMenuOpen} $index={index} $noIcon={!icon}>
      {icon ? (
        title === "windows" ? (
          <DropDown list={serviceList}>
            <ToolTip
              content={"services"}
              position={{
                horizontal: ToolTipPositionHorizontal.Top,
                vertical: ToolTipPositionVertical.Center,
              }}
            >
              <Image
                src={icon}
                alt={title}
                height={25}
                width={25}
                style={{ cursor: "pointer", margin: "0 5px" }}
              />
            </ToolTip>
          </DropDown>
        ) : (
          <ToolTip
            content={title}
            position={{
              horizontal: ToolTipPositionHorizontal.Bottom,
              vertical: ToolTipPositionVertical.Center,
            }}
          >
            <Link href={link}>
              <Image
                src={icon}
                alt={title}
                height={25}
                width={25}
                style={{ cursor: "pointer", margin: "0 5px" }}
              />
            </Link>
          </ToolTip>
        )
      ) : null}
      <StyledMainNavTitle $isOpen={isMenuOpen}>
        <Link href={link}>{title}</Link>
      </StyledMainNavTitle>
    </StyledMainNavLi>
  );
};

export default MainNavDetails;

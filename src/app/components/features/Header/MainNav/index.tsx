"use client";

import { useEffect } from "react";
import Link from "next/link";

import { v4 as uuid } from "uuid";

import { isMobile } from "react-device-detect";

import HamburgerMenu from "@/app/components/ui/HamburgerMenu";
import MainNavDetails from "./MainNavDetails";

import IcHome from "@/app/assets/icons/home.svg";
import IcServices from "@/app/assets/icons/services.svg";
import IcContact from "@/app/assets/icons/contact.svg";
import IcWork from "@/app/assets/icons/our-work.svg";
import IcTestimonals from "@/app/assets/icons/testimonals.svg";

import Image from "next/image";

import useToggle from "@/app/hooks/useToggle";

import ImgMainNav from "../../../../assets/main-icon.webp";
import ImgMainNavSmall from "../../../../assets/main-icon-small.webp";

import {
  StyledHeaderContent,
  StyledMainIcon,
  StyledMainNav,
  StyledMainList,
} from "./style";

const navList = [
  { id: uuid(), title: "home", icon: IcHome, link: "/" },
  { id: uuid(), title: "windows", icon: IcServices, link: "/windows" },
  { id: uuid(), title: "doors", icon: null, link: "/doors" },
  { id: uuid(), title: "view our work", icon: IcWork, link: "/ourwork" },
  {
    id: uuid(),
    title: "testimonals",
    icon: IcTestimonals,
    link: "/testimonals",
  },
  { id: uuid(), title: "contact", icon: IcContact, link: "/contact" },
];

const MainNav = () => {
  const [isMenuOpen, handleMenu, setIsMenuOpen] = useToggle(true);

  useEffect(() => {
    if (isMobile) setIsMenuOpen(false);
  }, [setIsMenuOpen]);

  return (
    <StyledHeaderContent>
      <Link href={"/"}>
        <StyledMainIcon>
          <Image className="mainIconLarge" src={ImgMainNav} alt="Main Icon" />
          <Image
            className="mainIconSmall"
            src={ImgMainNavSmall}
            alt="Main Icon"
          />
        </StyledMainIcon>
      </Link>
      <StyledMainNav>
        <StyledMainList>
          {navList.map((listElem, index) => (
            <MainNavDetails
              key={listElem.id}
              index={index}
              data={listElem}
              isMenuOpen={isMenuOpen}
            />
          ))}
        </StyledMainList>

        <div className="mainNavIcon">
          <HamburgerMenu isOpen={isMenuOpen} handleClick={handleMenu} />
        </div>
      </StyledMainNav>
    </StyledHeaderContent>
  );
};

export default MainNav;

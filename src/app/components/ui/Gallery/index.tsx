import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styled from "styled-components";

import Image from "next/image";
import GalleryCarousel from "./GalleryCarousel";

import useToggle from "@/app/hooks/useToggle";

import { appear } from "@/app/helpers/variants";

import { PortfolioOption } from "../../features/OurWork/ts/types";

import { CtxGalleryImages } from "@/app/context";

import { ISliderData } from "@/app/db/ts/interfaces";

const StyledGallery = styled.div`
  column-count: 3;
  column-gap: 15px;
`;

const StyledGalleryImage = styled.div`
  cursor: pointer;
  margin: 15px 0;
  &:first-child {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transition: 0.5s ease-in-out;
  }
`;

const Gallery = ({
  currentOption,
  items,
}: {
  currentOption: PortfolioOption;
  items: ISliderData[];
}) => {
  const [carouselOpen, toggleCarousel] = useToggle();
  const [initialIndex, setInitialIndex] = useState<number>(0);

  return (
    <>
      <StyledGallery
        key={currentOption}
        as={motion.div}
        variants={appear}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {items.map(({ id, title, src }, index) => {
          return (
            <StyledGalleryImage
              key={id}
              className="galleryImage"
              onClick={() => {
                setInitialIndex(index);
                toggleCarousel();
              }}
            >
              <Image src={src} alt={title || "Window"} />
            </StyledGalleryImage>
          );
        })}
      </StyledGallery>
      <CtxGalleryImages.Provider
        value={{ items, initialIndex, toggleCarousel }}
      >
        <AnimatePresence>{carouselOpen && <GalleryCarousel />}</AnimatePresence>
      </CtxGalleryImages.Provider>
    </>
  );
};

export default Gallery;

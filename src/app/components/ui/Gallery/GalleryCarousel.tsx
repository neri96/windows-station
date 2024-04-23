import { motion } from "framer-motion";

import styled from "styled-components";

import GalleryCarouselTop from "./GalleryCarouselTop";
import GalleryCarouselBody from "./GalleryCarouselBody";

import useZoom from "@/app/hooks/useZoom";

import { CtxImageZoom } from "@/app/context";

import { appear } from "@/app/helpers/variants";

const StyledGalleryCarousel = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  cursor: pointer;
  z-index: 10000;
  display: flex;
  flex-direction: column;
`;

const GalleryCarousel = () => {
  const { currentZoom, ...zoomData } = useZoom();

  return (
    <StyledGalleryCarousel
      as={motion.div}
      variants={appear}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <GalleryCarouselTop zoomData={zoomData} />
      <CtxImageZoom.Provider value={currentZoom || 1}>
        <GalleryCarouselBody />
      </CtxImageZoom.Provider>
    </StyledGalleryCarousel>
  );
};

export default GalleryCarousel;

import { useContext } from "react";

import styled from "styled-components";

import { CtxGalleryImages } from "@/app/context";

import Slider from "../Slider";

const StyledGalleryCarouselBody = styled.div`
  flex-grow: 1;
  height: calc(100% - 50px);
`;

const GalleryCarouselBody = () => {
  const { items, initialIndex } = useContext(CtxGalleryImages);

  return (
    <StyledGalleryCarouselBody>
      <Slider
        items={items}
        initialIndex={initialIndex}
        isFooterNav
        zoomControllers
        height={"100%"}
      />
    </StyledGalleryCarouselBody>
  );
};

export default GalleryCarouselBody;

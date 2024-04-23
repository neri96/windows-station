import { useContext } from "react";

import styled from "styled-components";

import Icon from "../Icon";

import { CtxGalleryImages } from "@/app/context";

import IcZoomIn from "@/app/assets/icons/zoom-in.svg";
import IcZoomOut from "@/app/assets/icons/zoom-out.svg";
import Close from "@/app/assets/icons/close.svg";

import { IZoomResult } from "@/app/hooks/useZoom";

const StyledGalleryCarouselTop = styled.div<{
  $reachedMin: boolean;
  $reachedMax: boolean;
}>`
  height: 50px;
  width: 100%;
  background-color: #000;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 20px;
    li {
      margin: 0 5px;
    }
  }
  .galleryZoomIn {
    ${({ $reachedMax }) => $reachedMax && "opacity: .5"};
  }
  .galleryZoomOut {
    ${({ $reachedMin }) => $reachedMin && "opacity: .5"};
  }
`;

const GalleryCarouselTop = ({ zoomData }: { zoomData: IZoomResult }) => {
  const { toggleCarousel } = useContext(CtxGalleryImages);
  const { incrementZoom, decrementZoom, reachedMin, reachedMax } = zoomData;

  return (
    <StyledGalleryCarouselTop $reachedMin={reachedMin} $reachedMax={reachedMax}>
      <ul>
        <li
          className="galleryZoomIn"
          onClick={() => (reachedMax ? undefined : incrementZoom())}
        >
          <Icon src={IcZoomIn} alt="Zoom in" />
        </li>
        <li
          className="galleryZoomOut"
          onClick={() => (reachedMin ? undefined : decrementZoom())}
        >
          <Icon src={IcZoomOut} alt="Zoom out" />
        </li>
        <li onClick={toggleCarousel}>
          <Icon
            src={Close}
            alt="Close carousel"
            style={{ height: "22px", width: "22px" }}
          />
        </li>
      </ul>
    </StyledGalleryCarouselTop>
  );
};

export default GalleryCarouselTop;

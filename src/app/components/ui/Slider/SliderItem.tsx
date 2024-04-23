import { useEffect, useRef, useState, useReducer, memo } from "react";

import styled, { css } from "styled-components";

import Image from "next/image";
import SliderZoomControllers from "./SliderZoomControllers";
import SliderContent from "./SliderContent";

import { ISliderData } from "@/app/db/ts/interfaces";
import { ITranslate, TranslateAction } from "./ts/interfaces";

interface IProps {
  data: ISliderData;
  currentZoom: number;
  isFullWidthImg: boolean;
  zoomControllers: boolean;
  carouselLength: number;
}

const arePropsEqual = (prevProps: IProps, nextProps: IProps) => {
  return (
    prevProps.data.id === nextProps.data.id &&
    prevProps.data.title === nextProps.data.title &&
    prevProps.currentZoom == nextProps.currentZoom
  );
};

const StyledSliderItem = styled.div<{
  $width: number;
}>`
  height: 100%;
  ${({ $width }) => `width: ${$width + "%"}`};
  display: flex;
  position: relative;
  justify-content: center;
`;

const StyledSliderImage = styled.div<{
  $currentImgWidth: boolean;
  $currentZoom: number;
  $currentTranslate: ITranslate;
  $isFullWidthImg: boolean;
  $imgSrc: any;
  $isDescr: boolean;
}>`
  ${({ $currentImgWidth, $isFullWidthImg }) =>
    $isFullWidthImg ? `width: 100%` : `max-width: ${$currentImgWidth}px`};
  ${({ $isDescr, $imgSrc }) =>
    $isDescr &&
    css`
      background-size: contain;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${$imgSrc.src});
      filter: blur(25px);
      -webkit-filter: blur(25px);
      -moz-filter: blur(25px);
      -o-filter: blur(25px);
      -ms-filter: blur(25px);
    `};
  overflow: hidden;
  position: relative;
  .sliderImage {
    ${({ $currentZoom, $currentTranslate: { translateY, translateX } }) =>
      `transform: scale(${$currentZoom}) translate(${translateX}%, ${translateY}%)`};
    height: 100%;
    width: 100%;
    transition: 300ms ease-in-out;
    ${({ $isFullWidthImg }) =>
      `object-fit: ${$isFullWidthImg ? "cover" : "contain"}`};
  }
`;

const reducer = (
  state: ITranslate,
  action: { type: TranslateAction; value: number }
): ITranslate => {
  if (action.type === "set_translateY") {
    return {
      ...state,
      translateY: action.value,
    };
  } else if (action.type === "set_translateX") {
    return {
      ...state,
      translateX: action.value,
    };
  } else {
    return state;
  }
};

const SliderItem = ({
  data: { title, src, description },
  currentZoom,
  isFullWidthImg,
  zoomControllers,
  carouselLength,
}: IProps) => {
  const ref = useRef<HTMLImageElement | null>(null);

  const [currentTranslate, dispatch] = useReducer(reducer, {
    translateY: 0,
    translateX: 0,
  });
  const [currentImgWidth, setCurrentImgWidth] = useState<number>(0);

  useEffect(() => {
    if (!description && ref.current)
      setCurrentImgWidth(ref.current.clientWidth);
  }, [description]);

  return (
    <>
      <StyledSliderItem $width={100 / carouselLength}>
        <StyledSliderImage
          $currentImgWidth={Boolean(currentImgWidth)}
          $currentZoom={currentZoom}
          $currentTranslate={currentTranslate}
          $isFullWidthImg={isFullWidthImg}
          $imgSrc={src}
          $isDescr={Boolean(description)}
        >
          {zoomControllers ? (
            <SliderZoomControllers
              currentZoom={currentZoom}
              currentTranslate={currentTranslate}
              dispatchTranslate={(type: TranslateAction, value: number) =>
                dispatch({ type, value })
              }
            />
          ) : null}
          {!description ? (
            <Image ref={ref} className="sliderImage" src={src} alt={title} />
          ) : null}
        </StyledSliderImage>
        {description ? (
          <SliderContent title={title} src={src} description={description} />
        ) : null}
      </StyledSliderItem>
    </>
  );
};

export default memo(SliderItem, arePropsEqual);

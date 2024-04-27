import {
  useEffect,
  useRef,
  useState,
  useReducer,
  memo,
  useCallback,
} from "react";

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
  align-items: center;
  justify-content: center;

  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
`;

const StyledSliderImage = styled.div<{
  $currentImgHeight: number | undefined;
  $currentImgWidth: number | undefined;
  $currentZoom: number;
  $currentTranslate: ITranslate;
  $isFullWidthImg: boolean;
  $imgSrc: any;
  $isDescr: boolean;
}>`
  ${({ $currentImgHeight, $currentImgWidth, $isFullWidthImg }) => {
    return $isFullWidthImg
      ? `height: 100%; width: 100%`
      : $currentImgHeight &&
          $currentImgWidth &&
          `max-height: 100%; height: ${$currentImgHeight}px; max-width: ${$currentImgWidth}px`;
  }};
  ${({ $isDescr, $imgSrc }) =>
    $isDescr &&
    css`
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)));

      /* to be impelemented later  */
      
      /* filter: blur(25px);
      -webkit-filter: blur(25px);
      -moz-filter: blur(25px);
      -o-filter: blur(25px);
      -ms-filter: blur(25px); */
    `};
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  .sliderImage {
    ${({ $currentZoom, $currentTranslate: { translateY, translateX } }) =>
      `transform: scale(${$currentZoom}) translate(${translateX}%, ${translateY}%)`};
    transition: 300ms ease-in-out;
    ${({ $isFullWidthImg }) =>
      $isFullWidthImg
        ? css`
            height: 100%;
            width: 100%;
            object-fit: cover;
          `
        : css`
            max-height: 100%;
            max-width: 100%;
            object-fit: cover;
          `};
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
  const [currentImgHeight, setCurrentImgHeight] = useState<number>(0);
  const [currentImgWidth, setCurrentImgWidth] = useState<number>(0);

  const dispatchTranslate = useCallback(
    (type: TranslateAction, value: number) => dispatch({ type, value }),
    []
  );

  useEffect(() => {
    if (!description && ref.current) {
      setCurrentImgHeight(ref.current.clientHeight);
      setCurrentImgWidth(ref.current.clientWidth);
    }
  }, [description]);

  return (
    <>
      <StyledSliderItem $width={100 / carouselLength}>
        <StyledSliderImage
          $currentImgHeight={
            Boolean(currentImgHeight) ? currentImgHeight : undefined
          }
          $currentImgWidth={
            Boolean(currentImgWidth) ? currentImgWidth : undefined
          }
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
              dispatchTranslate={dispatchTranslate}
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

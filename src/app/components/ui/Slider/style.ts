import styled, { css } from "styled-components";

export const StyledSliderWrap = styled.div<{ $height: string | undefined }>`
  min-height: 500px;
  ${({ $height }) => `height: ${$height || "100vh"}`};
  position: relative;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
`;

export const StyledSliderBtn = styled.div<{ $isLeft?: boolean }>`
  cursor: pointer;
  position: absolute;
  top: 50%;
  ${({ $isLeft }) => ($isLeft ? `left: 10px` : `right: 10px`)};
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  img {
    ${({ $isLeft }) => !$isLeft && `transform: rotate(180deg)`};
  }
`;

export const StyledSlider = styled.div<{
  $sliderWidth: number;
  $itemWidth: number;
  $index?: number;
  $transition: boolean;
  $distance: number;
  $isFooterNav: boolean;
}>`
  display: flex;
  ${({ $isFooterNav }) =>
    $isFooterNav
      ? css`
          height: calc(100% - 70px);
          padding: 5px 0;
          box-sizing: border-box;
        `
      : "height: 100%"};
  ${({ $sliderWidth }) => `min-width: ${$sliderWidth}%`};
  ${({ $itemWidth }) => `transform: translateX(-${$itemWidth}%)`};
  ${({ $distance, $itemWidth }) =>
    $distance &&
    `transform: translateX(${`-${$itemWidth}%`}) translateX( 
      ${-$distance}px); touch-action: none;
  `};
  ${({ $transition }) => Boolean($transition) && `transition: 300ms;`};
`;

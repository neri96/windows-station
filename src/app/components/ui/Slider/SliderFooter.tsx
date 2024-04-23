import styled from "styled-components";

import Image from "next/image";

import { IItemImage, ISliderData } from "@/app/db/ts/interfaces";

const StyledSliderFooter = styled.div<{
  $currentIndex: number;
  $length: number;
  $imageWidth: number;
}>`
  height: 70px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  .sliderFooterWrap {
    height: 100%;
    width: 580px;
    margin-left: -5px;
    overflow: hidden;
    @media (max-width: 700px) {
      ${({ $imageWidth }) => `width: ${580 - $imageWidth * 2}px`};
    }
  }
  .sliderFooterInner {
    height: 100%;
    display: flex;
    ${({ $length, $imageWidth }) => `width: ${$imageWidth * $length}px`};
    ${({ $currentIndex, $imageWidth, $length }) => {
      if ($currentIndex >= 2 && !($currentIndex >= $length - 4)) {
        return `transform: translate(-${($currentIndex - 1) * $imageWidth}px)`;
      } else if ($currentIndex >= $length - 4) {
        return `transform: translate(-${($length - 5) * $imageWidth}px)`;
      }
    }};
    transition: 300ms;
  }
`;

export const StyledSliderItemFooter = styled.div<{
  $isCurrent: boolean;
  $imageWidth: number;
}>`
  height: 100%;
  ${({ $imageWidth }) => `width: ${$imageWidth}px`};
  ${({ $isCurrent }) => `opacity: ${$isCurrent ? 1 : 0.6}`};
  display: flex;
  justify-content: center;
  img {
    height: 100%;
    width: calc(100% - 10px);
  }
`;

const SliderFooter = ({
  currentIndex,
  handleSlide,
  items,
}: {
  currentIndex: number;
  handleSlide: (arg0: number) => void;
  items: ISliderData[] | IItemImage[];
}) => {
  const imageWidth = 116;
  return (
    <StyledSliderFooter
      $currentIndex={currentIndex}
      $length={items.length}
      $imageWidth={imageWidth}
    >
      <div className="sliderFooterWrap">
        <div className="sliderFooterInner">
          {items.map(({ id, title, src }, index) => {
            return (
              <StyledSliderItemFooter
                key={id}
                $isCurrent={index === currentIndex}
                $imageWidth={imageWidth}
                onClick={() => handleSlide(index)}
              >
                <Image src={src} alt={title} />
              </StyledSliderItemFooter>
            );
          })}
        </div>
      </div>
    </StyledSliderFooter>
  );
};

export default SliderFooter;

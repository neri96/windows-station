import { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";

import Button from "../Button";
import Icon from "../Icon";

import IcPlay from "@/app/assets/icons/play.svg";
import IcPause from "@/app/assets/icons/pause.svg";

const StyledSliderPagination = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  display: flex;
  button {
    padding: 0;
  }
`;

const StyledSliderPgItem = styled.div<{ $isCurrentIndex: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  button {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .currentIndex {
      display: none;
      background-color: #fff;
      height: 15px;
      width: 15px;
      border-radius: 50%;
    }
    ${({ $isCurrentIndex }) =>
      $isCurrentIndex &&
      css`
        transform: scale(1.3);
        .currentIndex {
          display: block;
        }
      `};
  }
`;

const SliderPagination = ({
  currentIndex,
  setCurrentIndex,
  isInfininte,
  sliderLength,
  isAuto,
  toggleAuto,
}: {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  isInfininte: boolean;
  sliderLength: number;
  isAuto: boolean;
  toggleAuto: () => void;
}) => {
  return (
    <StyledSliderPagination>
      {Array.from(Array(sliderLength)).map((_, i) => {
        const index = isInfininte ? i + 1 : i;

        return (
          <StyledSliderPgItem
            key={index}
            $isCurrentIndex={currentIndex === index}
          >
            <Button onClick={() => setCurrentIndex(index)}>
              <div className="currentIndex" />
            </Button>
          </StyledSliderPgItem>
        );
      })}
      {isInfininte ? (
        <Button
          style={{ backgroundColor: "transparent", marginLeft: "5px" }}
          onClick={toggleAuto}
        >
          <Icon
            src={isAuto ? IcPause : IcPlay}
            alt={isAuto ? "Stop auto swipe" : "Activate auto swipe"}
          />
        </Button>
      ) : null}
    </StyledSliderPagination>
  );
};

export default SliderPagination;

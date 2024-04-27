import { useEffect } from "react";

import styled, { css } from "styled-components";

import Icon from "../Icon";

import IcArrow from "@/app/assets/icons/arrow-2.svg";

import { ITranslate, TranslateAction } from "./ts/interfaces";

const StyledZoomController = styled.div<{
  $direction: Direction;
}>`
  position: absolute;
  ${({ $direction }) => {
    if ($direction === Direction.Up) {
      return css`
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        img {
          height: 100%;
          width: 100%;
        }
      `;
    } else if ($direction === Direction.Left) {
      return css`
        top: 50%;
        left: 0;
        transform: translateY(-50%) rotate(-90deg);
        img {
          height: 100%;
          width: 100%;
        }
      `;
    } else if ($direction === Direction.Right) {
      return css`
        top: 50%;
        right: 0;
        transform: translateY(-50%) rotate(90deg);
        img {
          height: 100%;
          width: 100%;
        }
      `;
    } else if ($direction === Direction.Down) {
      return css`
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) rotate(180deg);
        img {
          height: 100%;
          width: 100%;
        }
      `;
    }
  }};
  z-index: 1000;
`;

enum Direction {
  Up = "top",
  Left = "left",
  Right = "right",
  Down = "bottom",
}

const SliderZoomControllers = ({
  currentZoom,
  currentTranslate,
  dispatchTranslate,
}: {
  currentZoom: number;
  currentTranslate: ITranslate;
  dispatchTranslate: (type: TranslateAction, value: number) => void;
}) => {
  useEffect(() => {
    const moveDistance = (100 - 100 / currentZoom) / 2;

    const { translateY, translateX } = currentTranslate;

    if (translateX) {
      dispatchTranslate(
        "set_translateX",
        translateX > 0 ? moveDistance : -moveDistance
      );
    }

    if (translateY) {
      dispatchTranslate(
        "set_translateY",
        translateY > 0 ? moveDistance : -moveDistance
      );
    }
  }, [currentZoom, JSON.stringify(currentTranslate), dispatchTranslate]);

  const handleDirection = (direction: Direction) => {
    const moveDistance = (100 - 100 / currentZoom) / 2;

    if (direction === Direction.Up) {
      dispatchTranslate("set_translateY", moveDistance);
    } else if (direction === Direction.Down) {
      dispatchTranslate("set_translateY", -moveDistance);
    } else if (direction === Direction.Left) {
      dispatchTranslate("set_translateX", moveDistance);
    } else if (direction === Direction.Right) {
      dispatchTranslate("set_translateX", -moveDistance);
    }
  };

  return currentZoom > 1 ? (
    <>
      <StyledZoomController
        $direction={Direction.Up}
        onClick={() => handleDirection(Direction.Up)}
      >
        <Icon src={IcArrow} alt="Up" />
      </StyledZoomController>
      <StyledZoomController
        $direction={Direction.Left}
        onClick={() => handleDirection(Direction.Left)}
      >
        <Icon src={IcArrow} alt="Left" />
      </StyledZoomController>
      <StyledZoomController
        $direction={Direction.Right}
        onClick={() => handleDirection(Direction.Right)}
      >
        <Icon src={IcArrow} alt="Right" />
      </StyledZoomController>
      <StyledZoomController
        $direction={Direction.Down}
        onClick={() => handleDirection(Direction.Down)}
      >
        <Icon src={IcArrow} alt="Down" />
      </StyledZoomController>
    </>
  ) : null;
};

export default SliderZoomControllers;

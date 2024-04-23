"use client";

import {
  useState,
  useEffect,
  useContext,
  TouchEvent,
  MouseEvent,
  useCallback,
} from "react";

import SliderItem from "./SliderItem";
import SliderFooter from "./SliderFooter";
import Icon from "../Icon";
import Button from "../Button";

import useToggle from "@/app/hooks/useToggle";

import ArrowMove from "../../../assets/icons/arrow-move.svg";

import { CtxImageZoom } from "@/app/context";

import { StyledSliderWrap, StyledSlider, StyledSliderBtn } from "./style";

import { IItemImage, ISliderData } from "@/app/db/ts/interfaces";

interface Props {
  items: ISliderData[] | IItemImage[];
  isFooterNav?: boolean;
  initialIndex?: number;
  height?: string;
  isFullWidthImg?: boolean;
  zoomControllers?: boolean;
}

const transition = 300;

const Slider = ({
  items,
  isFooterNav = false,
  initialIndex,
  height,
  isFullWidthImg = false,
  zoomControllers = false,
}: Props) => {
  const currentZoom = useContext(CtxImageZoom);

  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex || 0);
  const [isTransitionActive, toggleTransition] = useToggle(true);
  const [isAuto, toggleAuto] = useToggle();

  //  swipe
  const [distance, setDistance] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const carouselArrFinite = [...items];
  const carouselArrInfinite = [...items, items[0]];
  const carouselArr = isAuto ? carouselArrInfinite : carouselArrFinite;
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        handleSlide(currentIndex + 1);
      } else {
        handleSlide(currentIndex - 1);
      }
    }

    setDistance(0);
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (touchStart && touchEnd) {
      const _distance = touchStart - touchEnd;

      if (
        (_distance > 0 && currentIndex === carouselArrFinite.length - 1) ||
        (_distance < 0 && currentIndex === 0)
      ) {
        return;
      }

      setDistance(touchStart - touchEnd);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touchStart, touchEnd, carouselArrFinite.length]);
  // swipe

  const handleTransition = useCallback(() => {
    setTimeout(() => {
      toggleTransition();
    }, transition);
  }, []);

  useEffect(() => {
    if (!isTransitionActive) {
      setCurrentIndex(0);

      if (currentIndex === 0) {
        handleTransition();
      }
    }
  }, [isTransitionActive, currentIndex, handleTransition]);

  useEffect(() => {
    if (currentIndex === 0 || currentIndex === carouselArrInfinite.length - 1) {
      handleTransition();
    }
  }, [currentIndex, carouselArrInfinite.length, handleTransition]);

  useEffect(() => {
    if (isAuto) {
      const interval = setInterval(
        () => {
          if (currentIndex === 0 && !isTransitionActive) {
            toggleTransition();
          }
          setCurrentIndex((prevState) => prevState + 1);
        },
        currentIndex === 0 && !isTransitionActive ? 1500 - transition : 1500
      );

      return () => clearInterval(interval);
    }
  }, [currentIndex, isTransitionActive, isAuto, toggleTransition]);

  const handleSlide = (index: number) => {
    if (
      index < 0 ||
      index > carouselArrFinite.length - 1 ||
      !isTransitionActive
    )
      return false;

    setCurrentIndex(index);
  };

  const onMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e: MouseEvent) => {
    setTouchEnd(e.clientX);
  };

  return (
    <StyledSliderWrap $height={height}>
      {currentZoom === 1 ? (
        <StyledSliderBtn $isLeft>
          <Button onClick={() => handleSlide(currentIndex - 1)}>
            <Icon src={ArrowMove} alt="previous slide" />
          </Button>
        </StyledSliderBtn>
      ) : null}

      <StyledSlider
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onTouchEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        $sliderWidth={carouselArr.length * 100}
        $itemWidth={100 / carouselArr.length}
        $index={currentIndex}
        $distance={distance}
        $transition={isTransitionActive}
        $isFooterNav={isFooterNav}
      >
        {(isAuto ? carouselArrInfinite : carouselArr).map(
          ({ id, ...itemData }, index, self) => {
            return (
              <SliderItem
                key={id || index}
                data={itemData}
                currentZoom={currentZoom}
                isFullWidthImg={isFullWidthImg}
                zoomControllers={zoomControllers}
                carouselLength={self.length}
              />
            );
          }
        )}
      </StyledSlider>

      {currentZoom === 1 ? (
        <StyledSliderBtn>
          <Button onClick={() => handleSlide(currentIndex + 1)}>
            <Icon src={ArrowMove} alt="next slide" />
          </Button>
        </StyledSliderBtn>
      ) : null}
      {isFooterNav ? (
        <SliderFooter
          currentIndex={currentIndex}
          handleSlide={handleSlide}
          items={items}
        />
      ) : null}
    </StyledSliderWrap>
  );
};

export default Slider;

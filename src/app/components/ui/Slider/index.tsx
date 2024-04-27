"use client";

import {
  useState,
  useCallback,
  useEffect,
  useContext,
  TouchEvent,
  MouseEvent,
} from "react";

import SliderItem from "./SliderItem";
import SliderFooter from "./SliderFooter";
import SliderPagination from "./SliderPagination";
import Icon from "../Icon";
import Button from "../Button";

import useToggle from "@/app/hooks/useToggle";

import ArrowMove from "../../../assets/icons/arrow-move.svg";

import { CtxImageZoom } from "@/app/context";

import { StyledSliderWrap, StyledSlider, StyledSliderBtn } from "./style";

import { IItemImage, ISliderData } from "@/app/db/ts/interfaces";

interface Props {
  items: ISliderData[] | IItemImage[];
  height?: string;
  initialIndex?: number;
  isFooterNav?: boolean;
  isPagination?: boolean;
  isInfininte?: boolean;
  isAutoDefault?: boolean;
  isFullWidthImg?: boolean;
  zoomControllers?: boolean;
}

const Slider = ({
  items,
  height,
  initialIndex,
  isFooterNav = false,
  isPagination = false,
  isInfininte = false,
  isAutoDefault = false,
  isFullWidthImg = false,
  zoomControllers = false,
}: Props) => {
  const currentZoom = useContext(CtxImageZoom);

  const [currentIndex, setCurrentIndex] = useState<number>(
    initialIndex || isInfininte ? 1 : 0
  );
  const [isTransitionActive, toggleTransition] = useToggle(true);
  const [isAuto, toggleAuto] = useToggle(isAutoDefault);

  //  swipe
  const [distance, setDistance] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const carouselArr = isInfininte
    ? [items[items.length - 1], ...items, items[0]]
    : items;
  const minSwipeDistance = 50;

  const handleSlide = useCallback(
    (index: number) => {
      if (isInfininte) {
        if (index === carouselArr.length - 1) {
          setTimeout(() => {
            toggleTransition();
            setCurrentIndex(1);
          }, 300);
        } else if (index === 0) {
          setTimeout(() => {
            toggleTransition();
            setCurrentIndex(carouselArr.length - 2);
          }, 300);
        }
      } else {
        if (index < 0 || index > carouselArr.length - 1) {
          return null;
        }
      }

      setCurrentIndex(index);
    },
    [carouselArr.length, isInfininte, toggleTransition]
  );

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

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
      setDistance(touchStart - touchEnd);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touchStart, touchEnd]);
  // swipe

  const onMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e: MouseEvent) => {
    setTouchEnd(e.clientX);
  };

  useEffect(() => {
    if (isInfininte) {
      if (
        (currentIndex === 1 && !isTransitionActive) ||
        (currentIndex === carouselArr.length - 2 && !isTransitionActive)
      ) {
        setTimeout(() => {
          toggleTransition();
        }, 300);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isInfininte, isTransitionActive, toggleTransition]);

  useEffect(() => {
    if (isAuto) {
      const interval = setInterval(() => {
        handleSlide(currentIndex + 1);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isAuto, handleSlide]);

  return (
    <StyledSliderWrap $height={height}>
      {currentZoom === 1 ? (
        <StyledSliderBtn $isLeft>
          <Button
            disabled={
              !isTransitionActive || (!isInfininte && currentIndex === 0)
            }
            onClick={() => handleSlide(currentIndex - 1)}
          >
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
        $itemWidth={(100 / carouselArr.length) * currentIndex}
        $index={currentIndex}
        $distance={distance}
        $transition={isTransitionActive}
        $isFooterNav={isFooterNav}
      >
        {carouselArr.map(({ id, ...itemData }, index, self) => {
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
        })}
      </StyledSlider>

      {currentZoom === 1 ? (
        <StyledSliderBtn>
          <Button
            disabled={
              !isTransitionActive ||
              (!isInfininte && currentIndex === carouselArr.length - 1)
            }
            onClick={() => handleSlide(currentIndex + 1)}
          >
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
      {isPagination ? (
        <SliderPagination
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          isInfininte={isInfininte}
          sliderLength={
            isInfininte ? carouselArr.length - 2 : carouselArr.length
          } // in case the carousel is infinite, there are two extra slides that imitate endless loop but they shouldn't appear in pagination
          isAuto={isAuto}
          toggleAuto={toggleAuto}
        />
      ) : null}
    </StyledSliderWrap>
  );
};

export default Slider;

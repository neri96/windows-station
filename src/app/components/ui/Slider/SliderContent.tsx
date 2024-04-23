import styled, { css } from "styled-components";

import { useInView } from "react-intersection-observer";

import Image from "next/image";

import { ISliderData } from "@/app/db/ts/interfaces";

const filterBlur = (value: string | number) => {
  return css`
    filter: blur(${value});
    -webkit-filter: blur(${value});
    -moz-filter: blur(${value});
    -o-filter: blur(${value});
    -ms-filter: blur(${value});
  `;
};

const StyledSliderContent = styled.div<{ $inView: boolean }>`
  height: 50%;
  width: 50rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  p {
    @keyframes textAppear {
      0% {
        opacity: 0;
        transform: translateX(5px);
        ${filterBlur("25px")}
      }
      100% {
        opacity: 1;
        transform: translateX(0);
        ${filterBlur(0)}
      }
    }
    opacity: 0;
    min-width: 12.5rem;
    margin: 0 10px;
    line-height: 25px;
    font-size: 1.3rem;
    ${({ $inView }) => $inView && `animation: textAppear 300ms 100ms forwards`};
  }
  img {
    @keyframes imageAppear {
      0% {
        opacity: 0;
        ${filterBlur("25px")}
      }
      100% {
        opacity: 1;
        ${filterBlur(0)}
      }
    }
    opacity: 0;
    ${filterBlur("25px")}
    border-radius: 5px;
    max-height: 100% !important;
    max-width: 100%;
    height: auto;
    width: auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    ${({ $inView }) =>
      $inView && `animation: imageAppear 300ms 100ms forwards`};
  }

  @media (max-width: 850px) {
    flex-direction: column;
    width: 100%;
    top: 80px;
    transform: translate(-50%, 0);
    p {
      text-align: center;
      margin: 10px;
    }
    img {
      width: 90%;
    }
  }
`;

const SliderContent = ({ title, src, description }: ISliderData) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <StyledSliderContent $inView={inView} ref={ref}>
      <div className="sliderContentText">
        <p>{description}</p>
      </div>
      <Image src={src} alt={title} />
    </StyledSliderContent>
  );
};

export default SliderContent;

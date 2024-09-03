import { glassBaclkground } from "@/app/shared/style";
import styled, { css, keyframes } from "styled-components";

const reverseAnim = keyframes`
  0% { transform: rotateY(180deg); }
  20% { transform: rotateY(40deg); }
  30% { transform: rotateY(-40deg); }
  40% { transform: rotateY(20deg); }
  50% { transform: rotateY(-20deg); }
  60% { transform: rotateY(10deg); }
  70% { transform: rotateY(-10deg); }
  80% { transform: rotateY(5deg); }
  90% { transform: rotateY(-5deg); }
  95% { transform: rotateY(3deg); }
  100% { transform: rotateY(0deg); }
`;

const appeareAnim = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
`;

export const Steps = styled.div`
  height: 500px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const StepsTitle = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${(props) => props.theme.backgroundColor2};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  height: 60px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${glassBaclkground}
  h3 {
    margin: 0;
    text-transform: capitalize;
  }
`;

export const StepsContent = styled.div`
  flex: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  justify-content: start;
  grid-auto-rows: 1fr;
  -webkit-perspective: 1500px;
  perspective: 1500px;

  @media (max-width: 1330px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StepsElem = styled.div<{ $index: number; $inView: boolean }>`
  height: 100%;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor2};
  text-align: center;
  line-height: 22px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  ${glassBaclkground};

  ${({ $index, $inView }) =>
    $inView &&
    css`
      animation-name: ${reverseAnim};
      animation-duration: 2000ms;
      animation-delay: ${$index * 200 + "ms"};
      animation-fill-mode: forwards;
    `};
`;

export const StepsElemContainer = styled.div<{
  $index: number;
  $inView: boolean;
}>`
  opacity: 0;
  ${({ $index, $inView }) =>
    $inView &&
    css`
      animation-name: ${appeareAnim};
      animation-duration: 200ms;
      animation-delay: ${$index * 200 + "ms"};
      animation-fill-mode: forwards;
    `};
`;

export const StepsElemHeader = styled.div`
  height: 200px;
  margin: 0;
  background-image: radial-gradient(
    at top left,
    #629a92 36%,
    #02d2a0 67%,
    transparent 67.5%
  );
  background-size: 120% 100%;
  background-repeat: no-repeat;
  border-top-left-radius: ${(props) => props.theme.borderRadius};
  border-top-right-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StepsIcon = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.backgroundColor2};
  margin-top: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  img {
    height: 40px;
  }
`;

export const StepsElemTitle = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-weight: bold;
`;

export const StepsElemContent = styled.div`
  margin: 10px 0;
`;

export const StepsElemDeadline = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  position: absolute;
  left: 0;
  bottom: 0;
`;

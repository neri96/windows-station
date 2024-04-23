"use client";

import { forwardRef } from "react";

import styled, { css, keyframes } from "styled-components";

const stepData = [
  {
    id: 1,
    title: "schedule your free in-home estimate",
    content:
      "Call us at 415-295-4502 to schedule a date and time for a free in-home estimate that works best for you.",
    deadline: "today",
  },
  {
    id: 2,
    title: "what to expect during your consultation",
    content:
      "During your consultation, your local Window Station Professional Sales Representative will take measurements, show samples, advise you on material options, and discuss your window  or door installation needs. Afterward, you’ll receive your quote.",
    deadline: "in two days",
  },
  {
    id: 3,
    title: "reliable lead time",
    content:
      "We will order your windows as soon as you review and approve the contract. Upon delivery to our warehouse, quality controlled inspections are employed and we will contact you to arrange an installation date.",
    deadline: "after 3-4 weeks",
  },
  {
    id: 4,
    title: "installation completion",
    content:
      "Upon completion, our certified installers will ensure you’re completely satisfied with the installation and inspect each window/door for proper operation, fit and finish.",
    deadline: "once finished",
  },
];

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

const StyledSteps = styled.div`
  margin-bottom: 20px;
`;

const StyledStepsTitle = styled.div`
  border-radius: 5px;
  background-color: #3f4739;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  height: 60px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin: 0;
    text-transform: capitalize;
  }
`;

const StyledStepsContent = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  justify-content: start;
  grid-auto-rows: 350px;
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

const StyledStepsElem = styled.div<{ $index: number; $inView: boolean }>`
  position: relative;
  background-color: #3f4739;
  text-align: center;
  line-height: 22px;
  padding: 0 10px 50px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  ${({ $index, $inView }) =>
    $inView &&
    css`
      animation-name: ${reverseAnim};
      animation-duration: 2000ms;
      animation-delay: ${$index * 400 + "ms"};
      animation-fill-mode: forwards;
    `};
`;

const StyledStepsElemContainer = styled.div<{
  $index: number;
  $inView: boolean;
}>`
  opacity: 0;
  ${({ $index, $inView }) =>
    $inView &&
    css`
      animation-name: ${appeareAnim};
      animation-duration: 200ms;
      animation-delay: ${$index * 400 + "ms"};
      animation-fill-mode: forwards;
    `};
`;

const StyledStepsElemNumber = styled.div`
  background-color: #191c17;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 25px;
`;

const StyledStepsElemTitle = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-weight: bold;
`;

const StyledStepsElemContent = styled.div`
  margin: 10px 0;
`;

const StyledStepsElemDeadline = styled.div`
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

const Steps = ({ inView }: { inView: boolean }, ref: any) => {
  return (
    <StyledSteps ref={ref}>
      <StyledStepsTitle>
        <h3>4 easy steps</h3>
      </StyledStepsTitle>
      <StyledStepsContent>
        {stepData.map(({ id, title, content, deadline }) => {
          return (
            <StyledStepsElem key={id} $index={id} $inView={inView}>
              <StyledStepsElemContainer $index={id} $inView={inView}>
                <StyledStepsElemNumber>{id}</StyledStepsElemNumber>
                <StyledStepsElemTitle>{title}</StyledStepsElemTitle>
                <StyledStepsElemContent>{content}</StyledStepsElemContent>
                <StyledStepsElemDeadline>{deadline}</StyledStepsElemDeadline>
              </StyledStepsElemContainer>
            </StyledStepsElem>
          );
        })}
      </StyledStepsContent>
    </StyledSteps>
  );
};

export default forwardRef(Steps);

"use client";

import styled from "styled-components";

import { PortfolioOption } from "../ts/types";

const StyledOurWorkTop = styled.div<{ $currentOption: PortfolioOption }>`
  height: 70px;
  display: flex;
  justify-content: center;
  .ourWorkInner {
    display: flex;
    position: relative;
    .ourWorkOption {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 140px;
      font-size: 24px;
      cursor: pointer;
    }
    .ourWorkUnderscore {
      height: 5px;
      width: 50%;
      background-color: ${(props) => props.theme.textColor};
      position: absolute;
      left: 0;
      bottom: 7px;
      ${({ $currentOption }) =>
        `transform: translateX(${
          $currentOption === PortfolioOption.Window ? "0" : "100%"
        })`};
      transition: 300ms;
      border-radius: 3px;
    }
  }
`;

const OurWorkTop = ({
  currentOption,
  handleOption,
}: {
  currentOption: PortfolioOption;
  handleOption: (arg1: PortfolioOption) => void;
}) => {
  return (
    <StyledOurWorkTop $currentOption={currentOption}>
      <div className="ourWorkInner">
        <div
          className="ourWorkOption"
          onClick={() => handleOption(PortfolioOption.Window)}
        >
          Windows
        </div>
        <div
          className="ourWorkOption"
          onClick={() => handleOption(PortfolioOption.Door)}
        >
          Doors
        </div>
        <div className="ourWorkUnderscore" />
      </div>
    </StyledOurWorkTop>
  );
};

export default OurWorkTop;

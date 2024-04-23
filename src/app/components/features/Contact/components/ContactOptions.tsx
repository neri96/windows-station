"use client";

import { Dispatch, SetStateAction } from "react";

import styled from "styled-components";

import { ContactOption } from "../ts/types";

const StyledContactOptions = styled.div`
  height: 50px;
  ul {
    height: 100%;
    display: flex;
  }
`;

const StyledContactOption = styled.li<{ $isCurrentOption: boolean }>`
  ${({ $isCurrentOption }) => $isCurrentOption && `background-color: #666`};
  transition: 300ms;
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    margin: 0;
  }
`;

const ContactOptions = ({
  currentOption,
  setCurrentOptions,
}: {
  currentOption: ContactOption;
  setCurrentOptions: Dispatch<SetStateAction<ContactOption>>;
}) => {
  const handleOption = (option: ContactOption) => setCurrentOptions(option);

  return (
    <StyledContactOptions>
      <ul>
        <StyledContactOption
          $isCurrentOption={currentOption === ContactOption.Contact}
          onClick={() => handleOption(ContactOption.Contact)}
        >
          <h4>Contact</h4>
        </StyledContactOption>
        <StyledContactOption
          $isCurrentOption={currentOption === ContactOption.Estimate}
          onClick={() => handleOption(ContactOption.Estimate)}
        >
          <h4>Estimate</h4>
        </StyledContactOption>
      </ul>
    </StyledContactOptions>
  );
};

export default ContactOptions;

import { ReactNode } from "react";

import styled from "styled-components";

export enum BtnType {
  Button = "button",
  Submit = "submit",
}

const StyledButton = styled.button<{
  $disabled: boolean;
  $hidden: boolean;
}>`
  background-color: #3f4739;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 300ms ease-in-out;
  ${({ $hidden }) => $hidden && `display: none`};
  ${({ $disabled }) => $disabled && `opacity: 0.5`};
  &:active {
    transform: scale(1.1) rotate(15deg);
  }
`;

const Button = ({
  hidden = false,
  btnType = BtnType.Button,
  disabled = false,
  onClick,
  children,
}: {
  hidden?: boolean;
  btnType?: BtnType;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) => {
  return (
    <StyledButton
      $hidden={hidden}
      $disabled={disabled}
      disabled={disabled}
      type={btnType === BtnType.Button ? "button" : "submit"}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

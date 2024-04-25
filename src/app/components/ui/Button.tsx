import { CSSProperties, ReactNode } from "react";

import styled, { css } from "styled-components";

export enum BtnType {
  Button = "button",
  Submit = "submit",
}

const StyledButton = styled.button<{
  $disabled: boolean;
  $hidden: boolean;
  $noBackground: boolean;
}>`
  ${({ $noBackground }) =>
    css`
      background-color: ${(props) =>
        $noBackground ? "transparent" : props.theme.backgroundColor2};
    `};
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 300ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
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
  noBackground = false,
  onClick,
  children,
  style,
}: {
  hidden?: boolean;
  btnType?: BtnType;
  disabled?: boolean;
  noBackground?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <StyledButton
      $hidden={hidden}
      $disabled={disabled}
      $noBackground={noBackground}
      disabled={disabled}
      type={btnType === BtnType.Button ? "button" : "submit"}
      onClick={() => !disabled && onClick && onClick()}
      style={style}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

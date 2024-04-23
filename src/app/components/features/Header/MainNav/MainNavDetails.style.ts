import styled, { keyframes, css } from "styled-components";

const iconPopupAnim = keyframes`
  0% { transform: scale(0); position: static; }
  50% { transform: scale(1.1); position: static; }
  100% { transform: scale(1); position: static; }
`;

const navDisappearAfter = keyframes`
  0% { position: static; }
  100% { position: absolute; }
  
`;

export const StyledMainNavLi = styled.li<{
  $isOpen: boolean;
  $index: number;
  $noIcon?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 900ms;
  ${({ $noIcon }) => !$noIcon && `min-width: 45px`};
  img {
    transition: 900ms;
    transform: scale(0);
    position: absolute;
    ${({ $isOpen, $index }) =>
      !$isOpen &&
      css`
        animation-name: ${iconPopupAnim};
        animation-duration: 300ms;
        animation-delay: ${$index * 100 + 400 + "ms"};
        animation-fill-mode: forwards;
      `};
  }
`;

export const StyledMainNavTitle = styled.span<{ $isOpen: boolean }>`
  white-space: nowrap;
  display: block;
  transition: 400ms;
  overflow: hidden;
  text-transform: capitalize;
  opacity: 1;
  margin: 0 5px;
  ${({ $isOpen }) =>
    !$isOpen &&
    css`
      opacity: 0;
      animation-name: ${navDisappearAfter};
      animation-delay: 400ms;
      animation-fill-mode: forwards;
    `};
`;

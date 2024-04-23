import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div<{ $color?: string }>`
  position: relative;
  border-radius: 2px;

  &:after {
    content: "";
    position: absolute;
    border: 10px solid transparent;
    ${({ $color }) => `border-bottom: 10px solid ${$color || "#333"};`}
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Container = ({
  color,
  children,
}: {
  color?: string;
  children: ReactNode;
}) => {
  return <StyledContainer $color={color}>{children}</StyledContainer>;
};

export default Container;

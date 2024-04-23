"use client";

import { ReactNode } from "react";

import styled from "styled-components";

const StyledSection = styled.div<{
  $fixedHeight: boolean;
  $fullWidth: boolean;
}>`
  min-height: 400px;
  margin: 0 auto;
  ${({ $fixedHeight }) => `min-height: ${$fixedHeight ? "100vh" : "auto"}`};
  ${({ $fullWidth }) => `width: ${$fullWidth ? "100%" : "calc(100% - 50px)"}`};
`;

const PageSection = ({
  fixedHeight = false,
  fullWidth = false,
  children,
}: {
  fixedHeight?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}) => {
  return (
    <StyledSection $fixedHeight={fixedHeight} $fullWidth={fullWidth}>
      {children}
    </StyledSection>
  );
};

export default PageSection;

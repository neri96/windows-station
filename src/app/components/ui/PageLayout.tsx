"use client";

import { ReactNode } from "react";

import styled, { css } from "styled-components";

const StyledPage = styled.div<{
  $topMargin: boolean;
  $fullWidth: boolean;
}>`
  min-height: 100vh;
  ${({ $fullWidth }) =>
    $fullWidth
      ? `width: 100%`
      : css`
          width: calc(100% - 50px);
          margin: 0 auto;
        `};
  ${({ $topMargin }) =>
    $topMargin &&
    css`
      margin-top: 90px;
      min-height: calc(100vh - 90px);
    `};
`;

const PageLayout = ({
  topMargin = false,
  fullWidth = false,
  children,
}: {
  topMargin?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}) => {
  return (
    <StyledPage $topMargin={topMargin} $fullWidth={fullWidth}>
      {children}
    </StyledPage>
  );
};

export default PageLayout;

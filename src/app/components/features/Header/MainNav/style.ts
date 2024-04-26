import styled, { css, keyframes } from "styled-components";

export const StyledHeaderContent = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const StyledMainIcon = styled.div`
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  .mainIconSmall {
    display: none;
  }
  img {
    height: 80%;
    width: 100%;
  }
  @media (max-width: 500px) {
    .mainIconSmall {
      display: flex;
      height: 90px;
      width: 110px;
      position: absolute;
      top: -30px;
      left: 0;
    }
    .mainIconLarge {
      display: none;
    }
  }
`;

export const StyledMainNav = styled.nav`
  display: flex;
  margin: 0 10px;
  @media (max-width: 900px) {
    .mainNavIcon {
      display: none;
    }
  }
`;

export const StyledMainList = styled.ul`
  margin: 0 5px;
  transition: 300ms;
  display: flex;
  justify-content: flex-end;
`;

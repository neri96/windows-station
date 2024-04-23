"use client";

import styled from "styled-components";

import TopBar from "./TopBar";
import MainNav from "./MainNav";

export const StyledHeader = styled.header`
  height: 90px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <TopBar />
      <MainNav />
    </StyledHeader>
  );
};

export default Header;

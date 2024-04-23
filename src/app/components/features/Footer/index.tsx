"use client";

import styled from "styled-components";

import FooterInfo from "./FooterInfo";
import FooterIcons from "./FooterIcons";
import FooterSocial from "./FooterSocial";
import FooterContact from "./FooterContact";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.backgroundColor};
  .footerContent {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding: 16px;
    box-sizing: border-box;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footerContent">
        <FooterInfo />
        <FooterIcons />
        <FooterSocial />
        <FooterContact />
      </div>
    </StyledFooter>
  );
};

export default Footer;

"use client";

import styled from "styled-components";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

import ImgContact from "@/app/assets/contact.webp";

const StyledContact = styled.div`
  padding: 20px 0;
  box-sizing: border-box;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${ImgContact.src});
  border-radius: 5px;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 90px);
  width: 100%;
  @media (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const ContactContainer = () => {
  return (
    <>
      <StyledContact>
        <ContactInfo />
        <ContactForm />
      </StyledContact>
    </>
  );
};

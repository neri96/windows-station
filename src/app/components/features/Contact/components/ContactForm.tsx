import { useState } from "react";

import styled from "styled-components";

import ContactOptions from "./ContactOptions";
import ContactMessage from "./ContactMessage";
import ContactEstimate from "./ContactEstimate";

import { ContactOption } from "../ts/types";

const StyledContactForm = styled.div`
  background-color: rgba(0, 0, 0, 0.61);
  max-height: 630px;
  width: 500px;
  margin-left: 10px;
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 1200px) {
    margin: 0;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const ContactForm = () => {
  const [currentOption, setCurrentOptions] = useState<ContactOption>(
    ContactOption.Contact
  );

  return (
    <StyledContactForm>
      <ContactOptions
        currentOption={currentOption}
        setCurrentOptions={setCurrentOptions}
      />
      {currentOption === ContactOption.Contact ? (
        <ContactMessage />
      ) : (
        <ContactEstimate />
      )}
    </StyledContactForm>
  );
};

export default ContactForm;

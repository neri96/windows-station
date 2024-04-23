import { ReactNode, useEffect } from "react";

import { motion } from "framer-motion";

import styled from "styled-components";

import Button from "@/app/components/ui/Button";

const StyledContactSuccess = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.backgroundColor};

  .contactSuccessBody {
    padding: 15px 5px;
    box-sizing: border-box;
  }

  .contactSuccessFooter {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ContactSuccess = ({
  toggleMessage,
  children,
}: {
  toggleMessage: () => void;
  children: ReactNode;
}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      toggleMessage();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [toggleMessage]);

  return (
    <StyledContactSuccess as={motion.div}>
      <div className="contactSuccessBody">{children}</div>
      <div className="contactSuccessFooter">
        <Button onClick={toggleMessage}>Ok</Button>
      </div>
    </StyledContactSuccess>
  );
};

export default ContactSuccess;

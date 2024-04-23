import { ReactNode } from "react";

import { motion, AnimatePresence } from "framer-motion";

import styled from "styled-components";

import { useRouter } from "next/navigation";

import useToggle from "@/app/hooks/useToggle";
import Container from "./Container";

import { appear } from "@/app/helpers/variants";
import Link from "next/link";

const StyledDropDown = styled.div`
  position: relative;
  z-index: 1000;
`;

const StyledDropDownListWrap = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledDropDownList = styled.ul`
  background-color: #717568;
  border-radius: 5px;
  z-index: 1000;
  li {
    padding: 5px 10px;
    box-sizing: border-box;
    text-transform: capitalize;
    position: relative;
    span {
      padding-left: 10px;
      box-sizing: border-box;
    }
  }
`;

interface IList {
  id: string;
  title: string;
  link: string;
}

const DropDown = ({
  list,
  children,
}: {
  list: IList[];
  children: ReactNode;
}) => {
  const [isOpen, toggleDropDown] = useToggle();

  return (
    <StyledDropDown onMouseEnter={toggleDropDown} onMouseLeave={toggleDropDown}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <StyledDropDownListWrap
            as={motion.div}
            variants={appear}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Container color={"#717568"}>
              <StyledDropDownList>
                {list.map(({ id, title, link }) => {
                  return (
                    <li key={id}>
                      <Link href={link}>{title}</Link>
                    </li>
                  );
                })}
              </StyledDropDownList>
            </Container>
          </StyledDropDownListWrap>
        )}
      </AnimatePresence>
    </StyledDropDown>
  );
};

export default DropDown;

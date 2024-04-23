"use client";

import { motion } from "framer-motion";

import styled from "styled-components";

import { appearTransform } from "@/app/helpers/variants";

const StyledItemTop = styled.div<{ $bgImage: any }>`
  min-height: 400px;
  flex-grow: 1;
  ${({
    $bgImage,
  }) => `background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${$bgImage.src}) no-repeat center center fixed;`}
  position: relative;
`;

const StyledItemTopTitle = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: capitalize;
  font-size: 25px;
  h1 {
    margin: 0;
    text-align: center;
  }
`;

const ItemTop = ({ title, background }: { title: string; background: any }) => {
  return (
    <StyledItemTop $bgImage={background}>
      <StyledItemTopTitle
        as={motion.div}
        variants={appearTransform}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
      >
        <h1>{title}</h1>
      </StyledItemTopTitle>
    </StyledItemTop>
  );
};

export default ItemTop;

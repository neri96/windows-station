"use client";

import { motion } from "framer-motion";

import styled from "styled-components";

import { appearTransform } from "@/app/helpers/variants";

const StyledPageTop = styled.section<{ $bgImage: any }>`
  min-height: 400px;
  flex-grow: 1;
  ${({
    $bgImage,
  }) => `background: linear-gradient(to right, rgba(0,0,0, 0.8), rgba(0, 12, 64, 0.7)),
    url(${$bgImage.src}) no-repeat;`};
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const StyledPageTopTitle = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: capitalize;
  padding: 0 10px;
  box-sizing: border-box;
  h1 {
    font-size: 2rem;
    margin: 0;
    text-align: center;
  }
  h2 {
    line-height: 2rem;
    max-width: 900px;
    font-size: 1.3rem;
    text-align: center;
    margin: 10px auto 0;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const PageTop = ({
  title,
  subtitle,
  background,
}: {
  title: string;
  subtitle?: string;
  background: any;
}) => {
  return (
    <StyledPageTop $bgImage={background}>
      <StyledPageTopTitle
        as={motion.div}
        variants={appearTransform}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
      >
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </StyledPageTopTitle>
    </StyledPageTop>
  );
};

export default PageTop;

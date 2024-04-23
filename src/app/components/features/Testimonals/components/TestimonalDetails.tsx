import { motion } from "framer-motion";

import styled from "styled-components";

import { ITestimonalsData } from "@/app/db/testimonals";

const StyledTestimonalDetails = styled(motion.section)`
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  display: inline-block;
`;

const StyledTestimonalParagraph = styled.p<{
  $noTopMargin?: boolean;
  $noBottomMargin?: boolean;
  $noMargin?: boolean;
}>`
  font-style: italic;
  line-height: 1.7rem;
  ${({ $noTopMargin, $noBottomMargin, $noMargin }) =>
    `margin: ${
      $noTopMargin
        ? "0 0 1rem"
        : $noBottomMargin
        ? "1rem 0 0"
        : $noMargin && "0"
    }`}
`;

const StyledTestimonalFooter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px 10px;
  box-sizing: border-box;
  span {
    margin: 3px 0;
  }
`;

const TestimonalDetails = ({
  data,
  itemIndex,
}: {
  data: ITestimonalsData;
  itemIndex: number;
}) => {
  const { name, location, text } = data;

  return (
    <StyledTestimonalDetails
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: itemIndex * 0.2 }}
    >
      {Array.isArray(text) ? (
        <>
          {text.map((paragraph: string, index: number) => (
            <StyledTestimonalParagraph
              $noTopMargin={index === 0}
              $noBottomMargin={index === text.length - 1}
              key={index}
            >
              {paragraph}
            </StyledTestimonalParagraph>
          ))}
        </>
      ) : (
        <StyledTestimonalParagraph $noMargin>{text}</StyledTestimonalParagraph>
      )}
      <StyledTestimonalFooter>
        <span>{name}.</span>
        <span>{location}</span>
      </StyledTestimonalFooter>
    </StyledTestimonalDetails>
  );
};

export default TestimonalDetails;

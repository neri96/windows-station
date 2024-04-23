import styled from "styled-components";

import TestimonalsDetails from "./TestimonalDetails";

import testomonalList from "@/app/db/testimonals";

const StyledTestimonalsList = styled.div`
  column-count: 2;
  column-gap: 20px;
  padding: 20px;
  padding-top: 10px;
  box-sizing: border-box;
  @media (max-width: 900px) {
    column-count: 1;
  }
`;

const TestimonalList = () => {
  return (
    <StyledTestimonalsList>
      {testomonalList.map((data, index: number) => {
        return (
          <TestimonalsDetails key={data.id} data={data} itemIndex={index} />
        );
      })}
    </StyledTestimonalsList>
  );
};

export default TestimonalList;

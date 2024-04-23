"use client";

import styled from "styled-components";

import ItemManufacturerDetails from "./ItemManufacturerDetails";

import { IDbManufacturer } from "@/app/db/ts/interfaces";

const StyledItemManufacturer = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  max-width: 1500px;
  margin: 0 auto;
  /* grid-auto-rows: 350px; */
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const ItemManufacturer = ({
  manufacturers,
}: {
  manufacturers: IDbManufacturer[];
}) => {
  return (
    <StyledItemManufacturer>
      {manufacturers.map((data) => {
        return <ItemManufacturerDetails key={data.id} data={data} />;
      })}
    </StyledItemManufacturer>
  );
};

export default ItemManufacturer;

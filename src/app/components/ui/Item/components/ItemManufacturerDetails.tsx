import styled from "styled-components";

import Image, { StaticImageData } from "next/image";
import ItemList from "./ItemList";

import useToggle from "@/app/hooks/useToggle";

const StyledItemManufacturerDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  img {
    cursor: pointer;
  }
`;
const ItemManufacturerDetails = ({
  data,
}: {
  data: {
    id: number;
    title: string;
    image: StaticImageData;
    itemTypes: { sudo: string; title: string }[];
  };
}) => {
  const [isListOpen, toggleList] = useToggle();

  const { title, image, itemTypes } = data;

  return (
    <StyledItemManufacturerDetails>
      <Image src={image} alt={title} onClick={toggleList} />
      <ItemList isOpen={isListOpen} toggleList={toggleList} data={itemTypes} />
    </StyledItemManufacturerDetails>
  );
};

export default ItemManufacturerDetails;

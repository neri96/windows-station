import { motion } from "framer-motion";

import styled from "styled-components";

import Button from "@/app/components/ui/Button";

import { appear } from "@/app/helpers/variants";

import { IDbItem } from "@/app/db/ts/interfaces";

const StyledItemData = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.backgroundColor};
  width: 400px;
  z-index: 100000;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const StyledItemDataTitle = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px 0;
  box-sizing: border-box;
  h3 {
    line-height: 25px;
  }
`;

const StyledItemDataContent = styled.div`
  max-height: 400px;
  padding: 0 20px;
  box-sizing: border-box;
  line-height: 25px;
  overflow: auto;
  p {
    margin: 0;
  }
`;

const StyledItemDataFooter = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemModal = ({
  toggleModal,
  data,
}: {
  toggleModal: () => void;
  data: IDbItem;
}) => {
  const { title, content } = data;

  return (
    <StyledItemData
      as={motion.div}
      variants={appear}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <StyledItemDataTitle>
        <h3>{title}</h3>
      </StyledItemDataTitle>
      <StyledItemDataContent>
        <p>{content}</p>
      </StyledItemDataContent>
      <StyledItemDataFooter>
        <Button onClick={toggleModal}>Ok</Button>
      </StyledItemDataFooter>
    </StyledItemData>
  );
};

export default ItemModal;

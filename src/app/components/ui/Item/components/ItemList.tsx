import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styled from "styled-components";

import Link from "next/link";
import Icon from "@/app/components/ui/Icon";
import ItemModal from "./ItemModal";

import IcArrow from "@/app/assets/icons/arrow.svg";

import useToggle from "@/app/hooks/useToggle";
import useCtxData from "../hooks/useCtxData";

import { appear } from "@/app/helpers/variants";

const StyledOverlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 1000;
`;

const StyledItemList = styled.div<{ $length: number }>`
  position: absolute;
  ${({ $length }) => `top: -${$length ? $length * 60 + 10 : 0}px`};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10001;
  li {
    height: 60px;
    width: 130px;
    .itemDetails {
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: calc(100% - 10px);
      width: 100%;
      background-color: ${(props) => props.theme.backgroundColor2};
      border-radius: 5px;
      text-transform: capitalize;
      cursor: pointer;
      span {
        margin-right: 5px;
      }
    }
  }
`;

const ItemList = ({
  isOpen,
  toggleList,
  data,
}: {
  isOpen: boolean;
  toggleList: () => void;
  data: { sudo: string; title: string }[];
}) => {
  const [currentItem, setCurrentItem] = useState<string>("");
  const [isModalOpen, toggleModal] = useToggle();

  const itemData = useCtxData();
  const { items, itemType } = itemData || {};

  const handleCurrentItem = (sudo: string) => {
    setCurrentItem(sudo);
    toggleModal();
  };

  return (
    <>
      <AnimatePresence>
        {(isOpen || isModalOpen) && (
          <StyledOverlay
            as={motion.div}
            variants={appear}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={isModalOpen ? toggleModal : toggleList}
          />
        )}
      </AnimatePresence>
      {items ? (
        <>
          <AnimatePresence>
            {isOpen && (
              <StyledItemList
                $length={data.length}
                as={motion.div}
                variants={appear}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ul>
                  {data.map(({ sudo, title: window }, index: number) => (
                    <motion.li
                      key={window}
                      variants={appear}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: index * 0.1 }}
                    >
                      {items[sudo as keyof typeof items].isSeparatePage ? (
                        <Link href={`/${itemType}/${sudo}`}>
                          <div className="itemDetails">
                            <span>{window}</span>
                            <Icon src={IcArrow} alt="Procceed" />
                          </div>
                        </Link>
                      ) : (
                        <>
                          <div
                            className="itemDetails"
                            onClick={() => handleCurrentItem(sudo)}
                          >
                            <span>{window}</span>
                            <Icon src={IcArrow} alt="Procceed" />
                          </div>
                        </>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </StyledItemList>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isModalOpen && (
              <ItemModal
                toggleModal={toggleModal}
                data={items[currentItem as keyof typeof items]}
              />
            )}
          </AnimatePresence>
        </>
      ) : null}
    </>
  );
};

export default ItemList;

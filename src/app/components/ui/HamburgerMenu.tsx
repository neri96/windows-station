import styled from "styled-components";

const StyledMenuIcon = styled.div<{ $isOpen: boolean }>`
  position: relative;
  height: 100%;
  width: 25px;
  cursor: pointer;
  div {
    height: 3px;
    width: 100%;
    border-radius: 5px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    transition: 300ms ease-in-out;
    &:first-child {
      transform: translateY(calc(-50% + -7px));
    }
    &:nth-child(2) {
      transform: translateY(-50%);
    }
    &:last-child {
      transform: translateY(calc(-50% + 7px));
    }

    ${({ $isOpen }) =>
      $isOpen &&
      `&:first-child {
        transform: translateY(-50%) rotate(-45deg);
      }
      &:nth-child(2) {
        transform: translateY(-50%) rotate(45deg);
      }
      &:last-child {
        transform: translateY(-50%) rotate(315deg);
      }`}
  }
`;

const HamburgerMenu = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  return (
    <StyledMenuIcon $isOpen={isOpen} onClick={handleClick}>
      <div />
      <div />
      <div />
    </StyledMenuIcon>
  );
};

export default HamburgerMenu;

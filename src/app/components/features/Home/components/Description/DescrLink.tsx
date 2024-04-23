import styled, { css } from "styled-components";

export const StyledDescrTabLinks = styled.div`
  height: 100px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  margin-bottom: 10px;
  @media (max-width: 930px) {
    height: auto;
    width: auto;
    flex-direction: column;
    margin: 0;
    margin-right: 10px;
    padding-top: 10px;
    box-sizing: border-box;
  }
`;

export const StyledDescrTabLink = styled.div<{
  $index: number;
  $isCurrent: boolean;
}>`
  -webkit-perspective: 500px;
  perspective: 500px;
  ${({ $index }) => `left: ${$index * 135}px`};
  position: absolute;
  button {
    height: 70px;
    width: 150px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #3f4739;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 300ms ease-in-out;
    transform: rotateY(25deg);
    text-transform: uppercase;
    cursor: pointer;
    ${({ $isCurrent }) =>
      $isCurrent &&
      css`
        background-color: #191c17;
      `};
    &:hover {
      transform: rotateY(10deg);
    }

    @media (max-width: 930px) {
      transform: rotateY(0);
      margin: 2.5px 0;
    }

    @media (max-width: 500px) {
      width: 130px;
    }
  }

  @media (max-width: 930px) {
    position: static;
  }
`;

const DescrLink = ({
  currentTab,
  data,
  handleTabData,
}: {
  currentTab: string;
  data: { id: string; link: string; content: string }[];
  handleTabData: (id: string, index: number) => void;
}) => {
  return (
    <StyledDescrTabLinks>
      {data.map(({ id, link }, index) => {
        return (
          <StyledDescrTabLink
            key={id}
            $isCurrent={currentTab === id}
            $index={index}
            onClick={() => handleTabData(id, index)}
          >
            <button>{link}</button>
          </StyledDescrTabLink>
        );
      })}
    </StyledDescrTabLinks>
  );
};

export default DescrLink;

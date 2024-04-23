import styled, { css } from "styled-components";

const StyledDescrContent = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  @media (max-width: 930px) {
    width: 100%;
    display: flex;
  }
`;

const StyledDescrContentCurrent = styled.div<{
  $isGreaterThanMiddle: boolean;
  $isCurrent: boolean;
}>`
  width: 100%;
  position: absolute;
  width: 100%;
  opacity: 0;
  top: 0;

  ${({ $isCurrent, $isGreaterThanMiddle }) =>
    $isCurrent
      ? css`
          opacity: 1;
          left: 0;
        `
      : `transform: translate(${$isGreaterThanMiddle ? "100%" : "-100%"})`};
  transition: opacity 150ms ease-in, transform 300ms ease-in-out;
`;

const StyledDescrContentCurrentTitle = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  h4 {
    text-transform: uppercase;
  }
`;

const StyledDescrContentCurrentBody = styled.div`
  line-height: 25px;
`;

const DescrContent = ({
  currentIndex,
  data,
}: {
  currentIndex: number;
  data: { id: string; link: string; content: string }[];
}) => {
  return (
    <StyledDescrContent>
      {data.map(({ id, link, content }, index: number) => {
        return (
          <StyledDescrContentCurrent
            key={id}
            $isGreaterThanMiddle={index > Math.floor(data.length / 2)}
            $isCurrent={index === currentIndex}
          >
            <StyledDescrContentCurrentTitle>
              <h4>{link}</h4>
            </StyledDescrContentCurrentTitle>
            <StyledDescrContentCurrentBody>
              {content}
            </StyledDescrContentCurrentBody>
          </StyledDescrContentCurrent>
        );
      })}
    </StyledDescrContent>
  );
};

export default DescrContent;

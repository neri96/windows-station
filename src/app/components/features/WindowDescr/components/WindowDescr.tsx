import { usePathname } from "next/navigation";

import styled from "styled-components";

import PageSection from "@/app/components/ui/PageSection";
import Slider from "@/app/components/ui/Slider";

import windowData from "@/app/db/window/items";

const StyledWindowDescr = styled.div`
  position: relative;
  .windowDescrImage {
    margin-right: 20px;
    img {
      max-height: 250px;
      max-width: 600px;
    }
  }
`;

const StyledWindowDescrTitle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
  z-index: 100;
  h2 {
    color: #fff;
    margin: 0;
    text-align: center;
  }
`;

const StyledWindowDescrContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  p {
    color: ${(props) => props.theme.backgroundColor};
    line-height: 25px;
    &:first-child {
      margin-top: 0;
    }
  }
`;

export const WindowDescr = () => {
  const pathname = usePathname();
  const currentWindow = pathname.split("/")[2];

  const data = windowData[currentWindow as keyof typeof windowData];

  const { title, content, images } = data;

  return (
    <StyledWindowDescr>
      <StyledWindowDescrTitle>
        <h2>{title}</h2>
      </StyledWindowDescrTitle>
      <Slider items={images} isFullWidthImg />
      <PageSection>
        <StyledWindowDescrContent>
          {Array.isArray(content) ? (
            content.map((elem, index) => {
              return (
                <p key={index} style={{ color: "#333" }}>
                  {elem}
                </p>
              );
            })
          ) : (
            <p>{content}</p>
          )}
        </StyledWindowDescrContent>
      </PageSection>
    </StyledWindowDescr>
  );
};

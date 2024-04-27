import styled from "styled-components";

import Gallery from "@/app/components/ui/Gallery";

import windowGallery from "@/app/db/window/gallery";
import doorGallery from "@/app/db/door/gallery";

import { PortfolioOption } from "../ts/types";

const StyledOurWorkGallery = styled.div`
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const OurWorkGallery = ({
  currentOption,
}: {
  currentOption: PortfolioOption;
}) => {
  return (
    <StyledOurWorkGallery>
      <Gallery
        currentOption={currentOption}
        items={
          currentOption === PortfolioOption.Window ? windowGallery : doorGallery
        }
      />
    </StyledOurWorkGallery>
  );
};

export default OurWorkGallery;

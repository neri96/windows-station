import styled from "styled-components";

import Image from "next/image";

import ImgEnergy from "../../../assets/footer/energy-star.jpg";
import ImgBbb from "../../../assets/footer/bbb.png";
import ImgCards from "../../../assets/footer/cards.jpg";
import ImgAlist from "../../../assets/footer/alist.jpg";
import ImgYelp from "../../../assets/footer/yelp.jpg";

const StyledFooterIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledFooterIconItem = styled.div`
  height: 70px;
  width: 150px;
  display: flex;
  align-items: center;
  img {
    border-radius: 5px;
    height: auto;
    max-height: 100%;
    width: 100%;
  }
`;

const icons = [
  { title: "energy", img: ImgEnergy },
  { title: "bbb", img: ImgBbb },
  { title: "credit cards", img: ImgCards },
  { title: "alist", img: ImgAlist },
  { title: "yelp", img: ImgYelp },
];

const FooterIcons = () => {
  return (
    <StyledFooterIcons>
      {icons.map(({ title, img }, index) => {
        return (
          <StyledFooterIconItem key={index}>
            <Image src={img} alt={title} />
          </StyledFooterIconItem>
        );
      })}
    </StyledFooterIcons>
  );
};

export default FooterIcons;

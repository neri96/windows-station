import styled from "styled-components";

import Image from "next/image";

import IcFb from "../../../assets/footer/fb.svg";
import IcYelp from "../../../assets/footer/yelp2.svg";

const StyledFooterSocial = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  .footerSocialItem {
    height: 40px;
    width: 40px;
    margin: 0 10px;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

const FooterSocial = () => {
  return (
    <StyledFooterSocial>
      <div className="footerSocialItem">
        <a href="https://www.facebook.com/profile.php?id=100080451341337">
          <Image src={IcFb} alt="our Facebook page" />
        </a>
      </div>
      <div className="footerSocialItem">
        <a href="https://www.yelp.com/biz/window-station-san-francisco-2">
          <Image src={IcYelp} alt="our Yelp page" />
        </a>
      </div>
    </StyledFooterSocial>
  );
};

export default FooterSocial;

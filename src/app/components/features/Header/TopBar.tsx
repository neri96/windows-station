import styled from "styled-components";

import Image from "next/image";

import IcTel from "../../../assets/icons/phone.svg";
import IcMail from "../../../assets/icons/email.svg";

export const StyledTopBar = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul {
    margin: 0 10px;
    height: 100%;
    display: flex;
    align-items: center;
    li {
      margin-right: 5px;
      a {
        display: flex;
        align-items: center;
        font-size: 0.9rem;
      }
    }
  }
`;

const getImage = (src: string, alt: string) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={25}
      width={25}
      style={{ cursor: "pointer", margin: "0 5px" }}
    />
  );
};

const TopBar = () => {
  return (
    <StyledTopBar>
      <ul>
        <li>
          <a href="tel:18003420308">
            {getImage(IcTel, "phone")}
            <span>1-800-342-0308</span>
          </a>
        </li>
        {/* <li>
          <a href="mailto:windostation@gmail.com">
            {getImage(IcMail, "email")}
            <span>windostation@gmail.com</span>
          </a>
        </li> */}
      </ul>
    </StyledTopBar>
  );
};

export default TopBar;

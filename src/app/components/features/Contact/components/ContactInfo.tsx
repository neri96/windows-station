import styled from "styled-components";

import IcAddress from "../../../../assets/icons/address.svg";
import IcEmail from "../../../../assets/icons/email2.svg";
import IcPhone from "../../../../assets/icons/phone2.svg";
import Icon from "@/app/components/ui/Icon";

const StyledContactInfo = styled.div`
  .contactInfoHeader {
    h1 {
      margin-top: 0;
    }
  }
  width: 500px;
  margin-right: 10px;
  li {
    display: flex;
    align-items: center;
    p {
      font-size: 1.3rem;
      margin: 10px;
    }
  }

  @media (max-width: 1200px) {
    margin: 0 0 15px;
  }

  @media (max-width: 600px) {
    width: 90%;
    h1 {
      text-align: center;
    }
  }
`;

const ContactInfo = () => {
  return (
    <StyledContactInfo>
      <div className="contactInfoHeader">
        <h1>Contact the San Francisco Window Station for more information</h1>
      </div>
      <div className="contactInfoOptions">
        <ul>
          <li>
            <Icon
              src={IcAddress}
              alt="Address: 1130 Burnett Ave. # N Concord, CA 94520"
            />
            <p>1130 Burnett Ave. # N Concord, CA 94520</p>
          </li>
          <li>
            <Icon src={IcPhone} alt="Phone: 415-295-4502" />
            <p>
              <a href="tel: 4152954502">415-295-4502</a>
            </p>
          </li>
          <li>
            <Icon src={IcEmail} alt="E-mail: sfwindowstation@gmail.com" />
            <p>
              <a href="to:sfwindowstation@gmail.com">
                sfwindowstation@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </StyledContactInfo>
  );
};

export default ContactInfo;

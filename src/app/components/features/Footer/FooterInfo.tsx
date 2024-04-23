import styled from "styled-components";

const StyledFooterInfo = styled.div`
  line-height: 25px;
  .footerTitle {
    font-size: 2rem;
    margin: 16px 0;
  }
`;

const StyledFooterPhone = styled.div`
  .footerCallus {
    font-size: 1.5rem;
    a {
      color: #ff4d4d;
    }
  }
`;

const FooterInfo = () => {
  return (
    <>
      <StyledFooterInfo>
        <p className="footerTitle">Window Station</p>
        <p className="footerSubtitle">
          San Francisco Windows & Doors Widow Installation & Replacement
          Contractors in the SF Bay Area
        </p>
        <p className="footerDescr">
          We have been serving the San Francisco Bay Area with New Windows,
          Installation, Window Replacement & Doors as an experienced and caring
          dealer since 1995. We always provide free estimates and great service
          with every job. Please call us today with your home improvement or
          commercial needs in the San Francisco Bay Area.
        </p>
      </StyledFooterInfo>
      <StyledFooterPhone>
        <p className="footerCallus">
          Call us today at <a href="tel:4152954502">415-295-4502</a>
        </p>
        <p>If you have any other questions or comments, please contact us.</p>
        <p>License 976606</p>
      </StyledFooterPhone>
    </>
  );
};

export default FooterInfo;

import styled from "styled-components";

const StyledFooterContact = styled.div`
  p {
    margin: 0;
  }
`;

const FooterContact = () => {
  return (
    <StyledFooterContact>
      <p>
        The Window Station is the best choice for replacement windows for your
        home or business in San Francisco
      </p>
      <p>1130 Burnett Ave. # N Concord, CA 94520</p>
      <p>Phone: 415-295-4502</p>
      <p>© 2024 San Francisco’s Window Station All rights reserved</p>
    </StyledFooterContact>
  );
};

export default FooterContact;

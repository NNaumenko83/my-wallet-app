import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
  background-color: #eaf2f8;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  margin: 0 auto;
  color: #21618c;
  font-size: 12px;
  @media screen and (min-width: 480px) {
    font-size: 15px;
  }
`;

export const FooterText = styled.p`
  font-size: 12px;
  @media screen and (min-width: 480px) {
    font-size: 15px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

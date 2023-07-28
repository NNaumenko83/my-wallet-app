import { ImLinkedin2, ImGithub } from "react-icons/im";

import { Container } from "../Container/Container";
import { FooterStyled, FooterContainer, Link, LinkWrapper, FooterText } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterContainer>
          <Link
            href="https://github.com/NNaumenko83/my-wallet-app"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Go to repository
          </Link>
          <FooterText> Created by Mykola Naumenko </FooterText>
          <LinkWrapper>
            <Link
              href="https://www.linkedin.com/in/mykola--naumenko/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <ImLinkedin2 />
            </Link>
            <Link
              href="https://github.com/NNaumenko83"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <ImGithub />
            </Link>
          </LinkWrapper>

          <FooterText> 2023 </FooterText>
        </FooterContainer>
      </Container>
    </FooterStyled>
  );
};

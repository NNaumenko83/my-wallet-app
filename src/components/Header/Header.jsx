import { ButtonStyled } from "../ButtonStyled/ButtonStyled";
import { Container } from "../Container/Container";
import { HeaderContainer } from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <Container>
        <HeaderContainer>
          <h3>Logo</h3>
          <ButtonStyled>Hello</ButtonStyled>
        </HeaderContainer>
      </Container>
    </header>
  );
};

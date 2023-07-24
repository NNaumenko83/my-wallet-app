import { ButtonStyled } from "../ButtonStyled/ButtonStyled";
import { Container } from "../Container/Container";
import { HeaderContainer } from "./Header.styled";

export const Header = ({ requestAccount, balance, walletAdress }) => {
  return (
    <header>
      <Container>
        <HeaderContainer>
          <h3>Logo</h3>
          {!balance ? (
            <ButtonStyled onClick={requestAccount}>Connect wallet</ButtonStyled>
          ) : (
            <div>
              <p>{walletAdress}</p>
              <h5>{balance}</h5>
            </div>
          )}
        </HeaderContainer>
      </Container>
    </header>
  );
};

import { ButtonStyled } from "../ButtonStyled/ButtonStyled";
import { Container } from "../Container/Container";
import {
  FirstLogoWord,
  HeaderContainer,
  HeaderStyled,
  Logo,
  LogoText,
  SecondLogoWord,
} from "./Header.styled";
import PropTypes from "prop-types";
import EthereumLogo from "../../../public/cryptocurrency_crypto_ethereum_icon_230245.svg";

export const Header = ({ requestAccount, balance, walletAddress }) => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderContainer>
          <Logo>
            <img src={EthereumLogo} />
            <LogoText>
              <FirstLogoWord>ЕthereGoerli</FirstLogoWord>
              <SecondLogoWord>Wallet</SecondLogoWord>
            </LogoText>
          </Logo>

          {!balance ? (
            <ButtonStyled onClick={requestAccount}>Connect wallet</ButtonStyled>
          ) : (
            <div>
              <p>{balance}</p>
              <p>{walletAddress}</p>
            </div>
          )}
        </HeaderContainer>
      </Container>
    </HeaderStyled>
  );
};

Header.propTypes = {
  requestAccount: PropTypes.func,
  balance: PropTypes.string,
  walletAddress: PropTypes.string,
};

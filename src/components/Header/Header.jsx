import { ButtonStyled } from "../ButtonStyled/ButtonStyled";
import { Container } from "../Container/Container";
import {
  FirstLogoWord,
  HeaderContainer,
  HeaderStyled,
  HeaderText,
  Logo,
  LogoText,
  SecondLogoWord,
} from "./Header.styled";
import PropTypes from "prop-types";
import EthereumLogo from "/cryptocurrency_crypto_ethereum_icon_230245.svg";
import { WalletInfoWrapper } from "./Header.styled";
import { HeaderInfoText } from "./Header.styled";
import { useHeaderButtonHandler } from "../../hooks/useHeaderButtonHandler";
import { formatBalance } from "../../helpers/formatBalance";

export const Header = ({ requestAccount, balance, walletAddress }) => {
  const { isLoading, onClickButtonHandler } = useHeaderButtonHandler(requestAccount);

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

          {!walletAddress ? (
            <ButtonStyled onClick={onClickButtonHandler} loading={isLoading} disabled={isLoading}>
              {isLoading ? "Waiting for connect..." : "Connect wallet"}
            </ButtonStyled>
          ) : (
            <WalletInfoWrapper>
              <HeaderInfoText>
                <span>GoerliETH:</span>
                <HeaderText>{formatBalance(balance)}</HeaderText>
              </HeaderInfoText>
              <HeaderInfoText>
                <span>Address:</span> <HeaderText>{walletAddress}</HeaderText>
              </HeaderInfoText>
            </WalletInfoWrapper>
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

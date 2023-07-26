import { ButtonStyled } from "../ButtonStyled/ButtonStyled";
import { Container } from "../Container/Container";
import { toast } from "react-toastify";
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
import { useState } from "react";

export const Header = ({ requestAccount, balance, walletAddress }) => {
  console.log("walletAddress:", walletAddress);
  const [isLoading, setIsLoading] = useState(false);

  const onClickButtonHandler = async () => {
    setIsLoading(true);

    try {
      await requestAccount();
    } catch (error) {
      toast.error(
        "Error occurred during the request! Maybe MetaMask  already processing requestAccounts",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }

    setIsLoading(false);
  };

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
            <ButtonStyled
              onClick={onClickButtonHandler}
              loading={isLoading}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Connect wallet"}
            </ButtonStyled>
          ) : (
            <WalletInfoWrapper>
              <HeaderInfoText>
                <span>GoerliETH:</span> <HeaderText>{balance}</HeaderText>
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

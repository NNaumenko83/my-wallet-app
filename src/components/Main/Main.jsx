import PropTypes from "prop-types";

import { Container } from "../Container/Container";
import { TransferTokenForm } from "../TransferTokenForm/TransferTokenForm";
import { MainContainer, GreetingWrapper, GreetingTitle, GreetengText } from "./Main.styled";

export const Main = props => {
  return (
    <MainContainer>
      <Container>
        {props.walletAddress ? (
          <TransferTokenForm {...props} />
        ) : (
          <GreetingWrapper>
            <GreetingTitle>Welcome to ЕthereGoerli Wallet</GreetingTitle>
            <GreetengText>
              To get started, please click the button CONNECT WALLET to connect your wallet
            </GreetengText>
          </GreetingWrapper>
        )}
      </Container>
    </MainContainer>
  );
};

Main.propTypes = {
  walletAddress: PropTypes.string,
};

import { Container } from "../Container/Container";
import { TransferTokenForm } from "../TransferTokenForm/TransferTokenForm";
import { MainContainer, GreetingWrapper, GreetingTitle } from "./Main.styled";
import PropTypes from "prop-types";

export const Main = (props) => {
  console.log(props.walletAddress);
  return (
    <MainContainer>
      <Container>
        {props.walletAddress ? (
          <TransferTokenForm {...props} />
        ) : (
          <GreetingWrapper>
            <GreetingTitle>Welcome to ЕthereGoerli Wallet</GreetingTitle>
            <p style={{ textAlign: "center" }}>
              To get started, please click the button CONNECT WALLET to connect
              your wallet
            </p>
          </GreetingWrapper>
        )}
      </Container>
    </MainContainer>
  );
};

Main.propTypes = {
  walletAddress: PropTypes.string,
};

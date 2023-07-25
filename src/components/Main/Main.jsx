import { Container } from "../Container/Container";
import { TransferTokenForm } from "../TransferTokenForm/TransferTokenForm";
import { MainContainer } from "./Main.styled";
import PropTypes from "prop-types";

export const Main = (props) => {
  console.log(props.walletAddress);
  return (
    <MainContainer>
      <Container>
        {props.walletAddress ? (
          <TransferTokenForm {...props} />
        ) : (
          <div>
            <h1>Welcome to GoerliETH Wallet</h1>
            <p>
              To get started, please click the button CONNECT WALLET to connect
              your wallet:
            </p>
          </div>
        )}
      </Container>
    </MainContainer>
  );
};

Main.propTypes = {
  walletAddress: PropTypes.string,
};

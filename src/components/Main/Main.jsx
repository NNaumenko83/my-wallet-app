import { Container } from "../Container/Container";
import { TransferTokenForm } from "../TransferTokenForm/TransferTokenForm";
import { MainContainer } from "./Main.styled";
import PropTypes from "prop-types";

export const Main = (props) => {
  console.log(props.walletAddress);
  return (
    <MainContainer>
      <Container>
        {props.walletAddress && <TransferTokenForm {...props} />}
      </Container>
    </MainContainer>
  );
};

Main.propTypes = {
  walletAddress: PropTypes.string,
};

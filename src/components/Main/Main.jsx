import { Container } from "../Container/Container";
import { TransferTokenForm } from "../TransferTokenForm/TransferTokenForm";
import { MainContainer } from "./Main.styled";

export const Main = ({ walletAdress, ...props }) => {
  return (
    <MainContainer>
      <Container>{walletAdress && <TransferTokenForm {...props} />}</Container>
    </MainContainer>
  );
};

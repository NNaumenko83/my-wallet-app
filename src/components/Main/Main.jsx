import { Container } from "../Container/Container";
import { TransferTokenForm } from "../TransferTokonForm/TransferTokenForm";
import { MainContainer } from "./Main.styled";

export const Main = () => {
  return (
    <MainContainer>
      <Container>
        <TransferTokenForm />
      </Container>
    </MainContainer>
  );
};

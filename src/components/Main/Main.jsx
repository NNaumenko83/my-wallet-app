import { Container } from "../Container/Container";
import { TransferTokenForm } from "../TransferTokenForm/TransferTokenForm";
import { MainContainer } from "./Main.styled";

export const Main = ({...props}) => {
  return (
    <MainContainer>
      <Container>
        <TransferTokenForm {...props} />
      </Container>
    </MainContainer>
  );
};

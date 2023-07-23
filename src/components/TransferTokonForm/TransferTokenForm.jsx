import { ButtonStyled } from "../ButtonStyled/ButtonStyled";
import { Form } from "./TransferTokenForm.styled";
import Input from "../Input/Input";

export const TransferTokenForm = () => {
  return (
    <div>
      <Form>
        <Input />
        <Input />
        <ButtonStyled>Button</ButtonStyled>
      </Form>
    </div>
  );
};

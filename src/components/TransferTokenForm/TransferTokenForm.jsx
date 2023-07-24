import React, { useState } from "react";
import { ButtonStyled } from "../ButtonStyled/ButtonStyled";
import { Form } from "./TransferTokenForm.styled";
import Input from "../Input/Input";
import { ethers } from "ethers";

export const TransferTokenForm = ({ transferTokens }) => {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  // Адреса вашого гаманця Ethereum, звідки буде здійснено трансфер токенів

  const onChangeInputHandler = (e) => {
    switch (e.target.name) {
      case "address":
        setReceiverAddress(e.target.value);
        break;
      case "amount":
        setTransferAmount(e.target.value);
        break;

      default:
        break;
    }
  };

  const onSubmitFormHandler = async (e) => {
    e.preventDefault();
    console.log(receiverAddress);
    console.log(transferAmount);
    transferTokens(receiverAddress, transferAmount);

    setReceiverAddress("");
    setTransferAmount("");
  };

  return (
    <div>
      <Form onSubmit={onSubmitFormHandler}>
        <label>
          Send to:
          <Input
            placeholder="0x0000....."
            onChange={onChangeInputHandler}
            name="address"
            value={receiverAddress}
          />
        </label>

        <label>
          Amount:
          <Input
            placeholder="0.000"
            onChange={onChangeInputHandler}
            name="amount"
            value={transferAmount}
          />
        </label>

        <ButtonStyled type="submit">Button</ButtonStyled>
      </Form>
    </div>
  );
};

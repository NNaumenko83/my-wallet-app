import React, { useState } from "react";
import { ButtonStyled } from "../ButtonStyled/ButtonStyled";
import { Form } from "./TransferTokenForm.styled";
import Input from "../Input/Input";

export const TransferTokenForm = ({ transferTokens }) => {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [isAmountValid, setIsAmountValid] = useState(true);

  const onChangeInputHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "address":
        setReceiverAddress(value);
        break;
      case "amount":
        const validAmountPattern = /^\d+(\.\d{0,18})?$/;
        setIsAmountValid(validAmountPattern.test(value));
        setTransferAmount(value);
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

  // Знайдемо кількість залишених символів після крапки
  const hasDecimalPoint = transferAmount.includes(".");
  const remainingChars = hasDecimalPoint
    ? 18 - transferAmount.split(".")[1].length
    : 18;

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
            // Додайте стилі для червоного outline, якщо недійсна кількість символів або введено не число
            style={{
              outline:
                !isAmountValid || isNaN(transferAmount)
                  ? "2px solid red"
                  : "none",
            }}
          />
        </label>

        {/* Виведення повідомлення про недійсне значення, якщо кількість символів або не число */}
        {!isAmountValid && !isNaN(transferAmount) && transferAmount && (
          <span style={{ color: "red" }}>
            Повинно бути не більше 18 символів після крапки
          </span>
        )}
        {isNaN(transferAmount) && (
          <span style={{ color: "red" }}>Введіть цифри</span>
        )}
        {isAmountValid && hasDecimalPoint && (
          <span>Залишилось символів: {remainingChars}</span>
        )}

        <ButtonStyled
          type="submit"
          disabled={!isAmountValid || !Number(transferAmount)}
        >
          Button
        </ButtonStyled>
      </Form>
    </div>
  );
};

import React, { useState } from "react";
import { ButtonStyled } from "../ButtonStyled/ButtonStyled";
import { Form } from "./TransferTokenForm.styled";
import Input from "../Input/Input";
import PropTypes from "prop-types";

export const TransferTokenForm = ({ transferTokens, balance }) => {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [transactionResult, setTransactionResult] = useState("");

  const validateAmount = (value) => {
    const validAmountPattern = /^\d+(\.\d{0,18})?$/;
    return validAmountPattern.test(value);
  };

  const validateAddress = (address) => {
    const validAddressPattern = /^0x[a-fA-F0-9]{40}$/;
    return validAddressPattern.test(address);
  };

  const onChangeInputHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "address":
        setReceiverAddress(value);
        setIsAddressValid(validateAddress(value));
        break;
      case "amount":
        setTransferAmount(value);
        setIsAmountValid(validateAmount(value));
        break;
      default:
        break;
    }
  };

  const onSubmitFormHandler = async (e) => {
    e.preventDefault();

    // Check if transferAmount is a valid number and less than or equal to balance
    if (
      isAddressValid &&
      !isNaN(transferAmount) &&
      Number(transferAmount) <= balance
    ) {
      setIsLoading(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(receiverAddress);
        console.log(transferAmount);
        await transferTokens(receiverAddress, transferAmount);
        setTransactionResult("Transaction successful!");
      } catch (error) {
        console.error("Error occurred during the transaction:", error);
        setTransactionResult("Transaction failed. Please try again.");
      }

      setIsLoading(false);
      setReceiverAddress("");
      setTransferAmount("");
    } else {
      console.log("Invalid transfer amount or amount exceeds the balance");
    }
  };

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
          Amount ether:
          <Input
            placeholder="0.000...."
            onChange={onChangeInputHandler}
            name="amount"
            value={transferAmount}
            style={{
              outline:
                !isAmountValid || isNaN(transferAmount)
                  ? "2px solid red"
                  : "none",
            }}
          />
        </label>

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

        {!isAddressValid && (
          <span style={{ color: "red" }}>
            Неправильний формат адреси гаманця Ethereum
          </span>
        )}

        <ButtonStyled
          type="submit"
          disabled={
            !isAmountValid ||
            !Number(transferAmount) ||
            !isAddressValid ||
            isLoading
          }
          loading={isLoading}
        >
          {isLoading ? "Loading..." : "Button"}
        </ButtonStyled>
      </Form>

      {transactionResult && <div>{transactionResult}</div>}
    </div>
  );
};

TransferTokenForm.propTypes = {
  transferTokens: PropTypes.func,
  balance: PropTypes.string,
};
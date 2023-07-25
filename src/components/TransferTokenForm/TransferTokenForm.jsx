import { useState } from "react";
import { ButtonStyled } from "../ButtonStyled/ButtonStyled";
import {
  ButtonContentWraper,
  Form,
  InfoText,
  Label,
} from "./TransferTokenForm.styled";
import Input from "../Input/Input";
import PropTypes from "prop-types";
import { ErrorText } from "./TransferTokenForm.styled";
import { BsFillSendFill } from "react-icons/bs";

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
        if (!isAddressValid) {
          setIsAddressValid(true);
        }
        setReceiverAddress(value);
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

    if (!validateAddress(receiverAddress)) {
      setIsAddressValid(validateAddress(false));
      return;
    }
    if (
      isAddressValid &&
      !isNaN(transferAmount) &&
      Number(transferAmount) <= balance
    ) {
      // Check if transferAmount is a valid number and less than or equal to balance
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
    <>
      <Form onSubmit={onSubmitFormHandler}>
        <Label>
          Send to:
          <Input
            placeholder="0x0000....."
            onChange={onChangeInputHandler}
            name="address"
            value={receiverAddress}
          />
        </Label>

        {!isAddressValid && (
          <ErrorText>Invalid Ethereum wallet address format</ErrorText>
        )}

        <Label>
          Amount ether:
          <Input
            placeholder="0.000....."
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
        </Label>

        {!isAmountValid && !isNaN(transferAmount) && transferAmount && (
          <ErrorText>Must not exceed 18 characters after the dot</ErrorText>
        )}
        {isNaN(transferAmount) && <ErrorText>Enter numbers</ErrorText>}
        {isAmountValid && hasDecimalPoint && (
          <InfoText>Characters left: {remainingChars}</InfoText>
        )}

        <ButtonStyled
          type="submit"
          disabled={
            !isAmountValid ||
            !Number(transferAmount) ||
            !isAddressValid ||
            isLoading ||
            !receiverAddress
          }
          loading={isLoading}
        >
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <ButtonContentWraper>
              <span>PAY NOW</span>
              <BsFillSendFill />
            </ButtonContentWraper>
          )}
        </ButtonStyled>
      </Form>

      {transactionResult && <div>{transactionResult}</div>}
    </>
  );
};

TransferTokenForm.propTypes = {
  transferTokens: PropTypes.func,
  balance: PropTypes.string,
};

import styled from "@emotion/styled";

export const Form = styled.form`
  outline: 1px solid black;
  width: 280px;
  margin: 0 auto;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ErrorText = styled.span`
  color: #dc0120;
  font-size: 15px;
`;

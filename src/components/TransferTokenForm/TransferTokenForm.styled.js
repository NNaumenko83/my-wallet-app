import styled from "@emotion/styled";

export const Form = styled.form`
  width: 280px;
  margin: 0 auto;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  border: 1px solid #273746;
  border-radius: 10px;

  @media screen and (min-width: 480px) {
    width: 400px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }
  @media screen and (min-width: 1200px) {
    width: 700px;
  }
`;

export const ErrorText = styled.span`
  color: #dc0120;
  font-size: 10px;

  @media screen and (min-width: 480px) {
    font-size: 15px;
  }
`;

export const InfoText = styled.span`
  color: #00321e;
  font-size: 10px;

  @media screen and (min-width: 480px) {
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 10px;
  }
`;

export const Label = styled.label`
  width: 100%;
`;

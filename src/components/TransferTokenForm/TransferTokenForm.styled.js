import styled from "@emotion/styled";

export const Form = styled.form`
  width: 280px;
  margin: 0 auto;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  border-radius: 10px;

  -webkit-box-shadow: 2px 3px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 3px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 11px 0px rgba(0, 0, 0, 0.75);

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

export const ButtonContentWraper = styled.div`
  display: flex;
  gap: 10px;
`;

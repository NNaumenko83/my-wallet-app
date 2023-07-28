import styled from "@emotion/styled";
import image from "../../assets/ethereum-1_min.jpeg";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  flex-grow: 1;

  background-color: #2a2a2a;
  background-image: url(${image});
  background-position: center;
`;

export const GreetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #ffffa3;
`;

export const GreetengText = styled.p`
  text-align: center;
`;

export const GreetingTitle = styled.h1`
  font-size: 18px;
  @media screen and (min-width: 480px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

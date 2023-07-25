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

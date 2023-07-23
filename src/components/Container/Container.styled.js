import styled from "styled-components";

export const ContainerStyled = styled.div`
  margin: 0 auto;
  min-width: 320px;
  outline: 1px solid green;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

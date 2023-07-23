import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  min-width: 320px;
  /* height: 100%; */
  align-items: center;
  padding: 15px 30px;

  /* outline: 1px solid red; */

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

import styled, { keyframes } from "styled-components";

const ethereumColors = {
  primary: "#3C3C3D", // Ethereum black
  secondary: "#627EEA", // Ethereum blue
  text: "#FFFFFF", // White text color
};

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const scaleAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  max-width: 220px;
  img {
    width: 40px; /* Adjust the size as needed */
    height: 40px; /* Adjust the size as needed */
    animation: ${scaleAnimation} 3s linear infinite; /* Apply the rotation animation */
  }
`;

export const LogoText = styled.span`
  display: none;

  @media screen and (min-width: 480px) {
    width: 480px;
    display: inline;
  }
`;

export const FirstLogoWord = styled.span`
  color: #102b57;
  font-weight: 600;
`;

export const SecondLogoWord = styled.span`
  margin-left: 5px;
  color: #202136;
`;

export const HeaderStyled = styled.header`
  background: linear-gradient(
    45deg,
    ${ethereumColors.primary},
    ${ethereumColors.text},
    ${ethereumColors.secondary}
  );
  background-size: 200% 200%;
  animation: ${gradientAnimation} 10s ease infinite;
`;

export const HeaderTitle = styled.h3`
  color: ${ethereumColors.secondary};
  margin: 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WalletInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`;

export const WalletAddress = styled.p`
  margin: 0;
`;

export const BalanceAmount = styled.h5`
  margin: 0;
  color: ${ethereumColors.secondary};
`;

export const WalletInfoWrapper = styled.div`
  max-width: 145px;
  height: 50px;

  color: ${ethereumColors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 15px;

  @media screen and (min-width: 480px) {
    width: 160px;
  }
`;

export const HeaderText = styled.span`
  font-weight: 600;
`;

export const HeaderInfoText = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

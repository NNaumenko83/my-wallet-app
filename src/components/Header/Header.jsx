import { useState } from "react";
import { ButtonStyled } from "../ButtonStyled/ButtonStyled";
import { Container } from "../Container/Container";
import { HeaderContainer } from "./Header.styled";
import { ethers } from "ethers";

export const Header = () => {
  const [balance, setBalance] = useState(null);
  const [walletAdress, setWalletAdress] = useState("");
  async function requestAccount() {
    console.log("Requesting account...");

    if (window.ethereum) {
      console.log("detected");

      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        console.log("signer:", signer.address);

        const balance = await provider.getBalance(
          "0x16a370583Ad9318049700d02f88b752761001a97"
        );

        const formatted =
          "0x" + signer.address.slice(2, 5) + "..." + signer.address.slice(-4);
        console.log("formatted:", formatted);
        setBalance(Number(ethers.formatEther(balance)).toFixed(3));
        setWalletAdress(formatted);
      } catch (error) {
        console.log("Error connecting...");
      }
    } else {
      alert("Meta Mask not detected");
    }
  }

  return (
    <header>
      <Container>
        <HeaderContainer>
          <h3>Logo</h3>
          {!balance ? (
            <ButtonStyled onClick={requestAccount}>Connect wallet</ButtonStyled>
          ) : (
            <div>
              <p>{walletAdress}</p>
              <h5>{balance}</h5>
            </div>
          )}
        </HeaderContainer>
      </Container>
    </header>
  );
};

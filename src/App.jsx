import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { ethers } from "ethers";
import { useState } from "react";
import { formatAddress } from "./helpers/formatAdress";

function App() {
  const [balance, setBalance] = useState(null);
  const [walletAdress, setWalletAdress] = useState("");
  // const [providerU, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  async function requestAccount() {
    console.log("Requesting account...");

    if (window.ethereum) {
      console.log("detected");

      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const balance = await provider.getBalance(signer.address);
        console.log("balance:", balance);

        const formatted = formatAddress(signer.address);

        setBalance(Number(ethers.formatEther(balance)).toFixed(3));
        setWalletAdress(formatted);
        // setProvider(provider);
        setSigner(signer);
      } catch (error) {
        console.log("Error connecting...");
      }
    } else {
      alert("No crypto wallet found. Please install it.");
    }
  }

  const transferTokens = async (receiverAddress, transferAmount) => {
    console.log("transferAmount:", transferAmount);
    console.log("receiverAddress:", receiverAddress);
    console.log("signer", signer);
    console.log(ethers.parseEther(transferAmount));
    const tx = await signer.sendTransaction({
      to: receiverAddress,
      value: ethers.parseEther(transferAmount),
    });

    console.log("tx", tx);
  };

  return (
    <>
      <Header
        requestAccount={requestAccount}
        balance={balance}
        walletAdress={walletAdress}
      />
      <Main walletAdress={walletAdress} transferTokens={transferTokens} />
      <Footer />
    </>
  );
}

export default App;

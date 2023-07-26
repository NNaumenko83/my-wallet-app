import { ethers } from "ethers";
import { useState } from "react";
import { formatAddress } from "../helpers/formatAddress";

export function useEthereumAccount() {
  const [balance, setBalance] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState(null);

  async function requestAccount() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const balance = await provider.getBalance(signer.address);
      console.log("balance:", balance);
      const formatted = formatAddress(signer.address);
      setBalance(Number(ethers.formatEther(balance)).toFixed(3));
      setWalletAddress(formatted);
      setSigner(signer);
    } else {
      alert("No crypto wallet found. Please install it.");
    }
  }

  async function transferTokens(receiverAddress, transferAmount) {
    console.log("transferAmount:", transferAmount);
    console.log("receiverAddress:", receiverAddress);
    console.log("signer", signer);
    console.log(ethers.parseEther(transferAmount));
    // const tx = await signer.sendTransaction({
    //   to: receiverAddress,
    //   value: ethers.parseEther(transferAmount),
    // });

    // console.log("tx", tx);
  }

  return {
    balance,
    walletAddress,
    requestAccount,
    transferTokens,
  };
}

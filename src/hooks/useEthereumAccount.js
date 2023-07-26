import { ethers } from "ethers";
import { useState } from "react";
import { formatAddress } from "../helpers/formatAddress";

export function useEthereumAccount() {
  const [balance, setBalance] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState(null);
  const [provider, setProvider] = useState();

  async function requestAccount() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);

      const signer = await provider.getSigner();

      const balance = await provider.getBalance(signer.address);

      const formatted = formatAddress(signer.address);

      setBalance(ethers.formatEther(balance));
      setWalletAddress(formatted);
      setSigner(signer);
      setProvider(provider);
    } else {
      alert("No crypto wallet found. Please install it.");
    }
  }

  async function transferTokens(receiverAddress, transferAmount) {
    const tx = await signer.sendTransaction({
      to: receiverAddress,
      value: ethers.parseEther(transferAmount),
    });

    await tx.wait();

    const balance = await provider.getBalance(signer.address);

    setBalance(ethers.formatEther(balance));
  }

  return {
    balance,
    walletAddress,
    requestAccount,
    transferTokens,
  };
}

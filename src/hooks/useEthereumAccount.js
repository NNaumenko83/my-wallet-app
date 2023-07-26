import { ethers } from "ethers";
import { useState } from "react";
import { formatAddress } from "../helpers/formatAddress";

export function useEthereumAccount() {
  const [balance, setBalance] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState(null);
  const [provider, setProvider] = useState();

  console.log("provider:", provider);

  async function requestAccount() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      console.log("signer:", signer);
      const balance = await provider.getBalance(signer.address);
      console.log("balance type:", typeof balance);

      const formatted = formatAddress(signer.address);
      const ethersBalance = ethers.formatEther(balance).slice(0, 5);
      console.log("ethersBalanceaaaaaaaaaaaaaa:", ethers.formatEther(balance));
      console.log("ethersBalance type:", typeof ethersBalance);
      setBalance(ethers.formatEther(balance));
      setWalletAddress(formatted);
      setSigner(signer);
      setProvider(provider);
    } else {
      alert("No crypto wallet found. Please install it.");
    }
  }

  async function transferTokens(receiverAddress, transferAmount) {
    console.log("transferAmount:", transferAmount);
    console.log("receiverAddress:", receiverAddress);
    console.log("signer", signer);
    console.log("balance", balance);
    console.log(
      "ethers.parseEther(transferAmount)",
      ethers.parseEther(transferAmount)
    );
    console.log("ethers.parseEther(balance)", ethers.parseEther(balance));
    if (ethers.parseEther(balance) < ethers.parseEther(transferAmount)) {
      throw new Error("Amount exceeds the balance");
    }
    console.log("before tx");
    const tx = await signer.sendTransaction({
      to: receiverAddress,
      value: ethers.parseEther(transferAmount),
    });
    console.log("after tx");
    console.log("tx", tx);
    console.log("provider:", provider);
    console.log("signer.address:", signer.address);
    const newBalance = await provider.getBalance(signer.address);
    console.log("balance:", ethers.parseEther(balance));
    console.log("newBalance:", newBalance);
    if (newBalance === ethers.parseEther(balance)) {
      console.log(
        "newBalance === ethers.parseEther(balance):",
        newBalance === ethers.parseEther(balance)
      );

      setBalance(
        ethers.formatEther(
          ethers.parseEther(balance) - ethers.parseEther(transferAmount)
        )
      );
    } else {
      console.log("else:");
      setBalance(ethers.formatEther(newBalance));
    }
  }

  return {
    balance,
    walletAddress,
    requestAccount,
    transferTokens,
  };
}

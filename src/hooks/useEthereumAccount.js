// import { ethers } from "ethers";
// import { useState } from "react";
// import { MetaMaskSDK } from "@metamask/sdk";

// import { formatAddress } from "../helpers/formatAddress";

// // DEEPL LNK
// // https://metamask.app.link/dapp/my-wallet-app-delta.vercel.app/

// export function useEthereumAccount() {
//   const [balance, setBalance] = useState(null);
//   const [walletAddress, setWalletAddress] = useState("");
//   const [signer, setSigner] = useState(null);
//   const [provider, setProvider] = useState();

//   async function requestAccount() {
//     console.log("Hello");
//     console.log(MetaMaskSDK);
//     const sdk = new MetaMaskSDK({
//       openDeeplink:
//         "https://metamask.app.link/dapp/my-wallet-app-delta.vercel.app/",
//     });

//     const ethereum = sdk.getProvider();

//     const test = new ethers.providers.WebBrowserProvider3Provider(ethereum);
//     console.log("test:", test);

//     if (window.ethereum) {
//       // console.log("window.ethereum):", window.ethereum);
//       // console.log("test:", test);
//       const provider = new ethers.BrowserProvider(window.ethereum);

//       const signer = await provider.getSigner();

//       const balance = await provider.getBalance(signer.address);

//       const formatted = formatAddress(signer.address);

//       setBalance(ethers.formatEther(balance));
//       setWalletAddress(formatted);
//       setSigner(signer);
//       setProvider(provider);
//     } else {
//       alert("No crypto wallet found. Please install it.");
//     }
//   }

//   async function transferTokens(receiverAddress, transferAmount) {
//     const tx = await signer.sendTransaction({
//       to: receiverAddress,
//       value: ethers.parseEther(transferAmount),
//     });

//     await tx.wait();

//     const balance = await provider.getBalance(signer.address);

//     setBalance(ethers.formatEther(balance));
//   }

//   return {
//     balance,
//     walletAddress,
//     requestAccount,
//     transferTokens,
//   };
// }

import { ethers } from "ethers";
import { useState } from "react";

import { formatAddress } from "../helpers/formatAddress";

// DEEPL LNK
// https://metamask.app.link/dapp/my-wallet-app-delta.vercel.app/

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
      // Якщо MetaMask не встановлено, відкрийте deep link.
      const deepLink = `https://metamask.app.link/dapp/my-wallet-app-delta.vercel.app/`;
      window.open(deepLink, "_blank");
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

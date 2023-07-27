// // import { ethers } from "ethers";
// // import { useState } from "react";
// // import { MetaMaskSDK } from "@metamask/sdk";

// // import { formatAddress } from "../helpers/formatAddress";

// // // DEEPL LNK
// // // https://metamask.app.link/dapp/my-wallet-app-delta.vercel.app/

// // export function useEthereumAccount() {
// //   const [balance, setBalance] = useState(null);
// //   const [walletAddress, setWalletAddress] = useState("");
// //   const [signer, setSigner] = useState(null);
// //   const [provider, setProvider] = useState();

// //   async function requestAccount() {
// //     console.log("Hello");
// //     console.log(MetaMaskSDK);
// //     const sdk = new MetaMaskSDK({
// //       openDeeplink:
// //         "https://metamask.app.link/dapp/my-wallet-app-delta.vercel.app/",
// //     });

// //     const ethereum = sdk.getProvider();

// //     const test = new ethers.providers.WebBrowserProvider3Provider(ethereum);
// //     console.log("test:", test);

// //     if (window.ethereum) {
// //       // console.log("window.ethereum):", window.ethereum);
// //       // console.log("test:", test);
// //       const provider = new ethers.BrowserProvider(window.ethereum);

// //       const signer = await provider.getSigner();

// //       const balance = await provider.getBalance(signer.address);

// //       const formatted = formatAddress(signer.address);

// //       setBalance(ethers.formatEther(balance));
// //       setWalletAddress(formatted);
// //       setSigner(signer);
// //       setProvider(provider);
// //     } else {
// //       alert("No crypto wallet found. Please install it.");
// //     }
// //   }

// //   async function transferTokens(receiverAddress, transferAmount) {
// //     const tx = await signer.sendTransaction({
// //       to: receiverAddress,
// //       value: ethers.parseEther(transferAmount),
// //     });

// //     await tx.wait();

// //     const balance = await provider.getBalance(signer.address);

// //     setBalance(ethers.formatEther(balance));
// //   }

// //   return {
// //     balance,
// //     walletAddress,
// //     requestAccount,
// //     transferTokens,
// //   };
// // }

// import { ethers } from "ethers";
// import { useState } from "react";
// import { toast } from "react-toastify";

// import { formatAddress } from "../helpers/formatAddress";

// // DEEPL LNK
// // https://metamask.app.link/dapp/my-wallet-app-delta.vercel.app/

// export function useEthereumAccount() {
//   const [balance, setBalance] = useState(null);
//   const [walletAddress, setWalletAddress] = useState("");
//   const [signer, setSigner] = useState(null);
//   const [provider, setProvider] = useState();

//   async function requestAccount() {
//     if (window.ethereum) {
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       console.log("provider:", provider);

//       const signer = await provider.getSigner();
//       console.log("signer:", signer);
//       toast.info(`${JSON.stringify(signer)}`, {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });

//       console.log("provider.getBalance:", provider.getBalance);
//       const balance = await provider.getBalance(signer.address);
//       toast.info(`${JSON.stringify(provider.getBalance)}`, {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });

//       const formatted = formatAddress(signer.address);

//       setBalance(ethers.formatEther(balance));
//       setWalletAddress(formatted);
//       setSigner(signer);
//       setProvider(provider);
//     } else {
//       // Якщо MetaMask не встановлено, відкрийте deep link.
//       const deepLink = `https://metamask.app.link/dapp/my-wallet-app-delta.vercel.app/`;
//       window.open(deepLink, "_blank");
//       toast.info("deepLink", {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });
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
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { formatAddress } from "../helpers/formatAddress";

export function useEthereumAccount() {
  const [balance, setBalance] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState(null);
  const [provider, setProvider] = useState();

  useEffect(() => {
    // Fetch balance when the signer is available
    async function fetchBalance() {
      if (signer) {
        const balance = await provider.getBalance(signer.address);
        setBalance(ethers.formatEther(balance));
      }
    }
    fetchBalance();
  }, [provider, signer]);

  async function requestAccount() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);

      try {
        const signer = await provider.getSigner();
        const balance = await provider.getBalance(signer.address);

        const formatted = formatAddress(signer.address);

        setBalance(ethers.formatEther(balance));
        setWalletAddress(formatted);
        setSigner(signer);
        setProvider(provider);

        toast.info(`Account connected successfully!`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } catch (error) {
        console.error("Error connecting account:", error);
        toast.error(`Error connecting account: ${error.message}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      const deepLink = `https://metamask.app.link/dapp/my-wallet-app-delta.vercel.app/`;
      window.open(deepLink, "_blank");
      toast.info("Please install MetaMask to connect your account.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  async function transferTokens(receiverAddress, transferAmount) {
    if (!signer) {
      toast.error("Please connect your account first.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    try {
      const tx = await signer.sendTransaction({
        to: receiverAddress,
        value: ethers.parseEther(transferAmount),
      });

      await tx.wait();

      const balance = await provider.getBalance(signer.address);

      setBalance(ethers.formatEther(balance));
      toast.success("Tokens transferred successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error("Error transferring tokens:", error);
      toast.error(`Error transferring tokens: ${error.message}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  return {
    balance,
    walletAddress,
    requestAccount,
    transferTokens,
  };
}

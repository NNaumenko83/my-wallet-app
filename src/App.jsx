import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { useEthereumAccount } from "./hooks/useEthereumAccount";

function App() {
  const { balance, walletAddress, requestAccount, transferTokens } = useEthereumAccount();

  return (
    <>
      <Header requestAccount={requestAccount} balance={balance} walletAddress={walletAddress} />
      <Main walletAddress={walletAddress} transferTokens={transferTokens} balance={balance} />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

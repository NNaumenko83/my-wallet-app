import { useState } from "react";
import { toast } from "react-toastify";

export const useHeaderButtonHandler = (requestAccount) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClickButtonHandler = async () => {
    setIsLoading(true);

    try {
      await requestAccount();
      toast.success("Hello! You can already work with your wallet.", {
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
      toast.error(
        "Error occurred during the request! Maybe MetaMask is already processing requestAccounts",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }

    setIsLoading(false);
  };

  return { isLoading, onClickButtonHandler };
};

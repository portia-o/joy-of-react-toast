import React from "react";
import { ToastContext } from "../components/ToastProvider/ToastProvider";

function useEscapeKey() {
  const { setToastStack } = React.useContext(ToastContext);

  React.useEffect(() => {
    const dismissAll = (e) => {
      if (e.key === "Escape") {
        setToastStack([]);
      }
    };

    document.addEventListener("keydown", dismissAll);
    return () => {
      document.removeEventListener("keydown", dismissAll);
    };
  }, [setToastStack]);
  return null;
}

export default useEscapeKey;

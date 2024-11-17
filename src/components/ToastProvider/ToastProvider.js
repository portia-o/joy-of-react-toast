import React, { Children } from "react";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastStack, setToastStack] = React.useState([]);

  return (
    <ToastContext.Provider value={{ toastStack, setToastStack }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

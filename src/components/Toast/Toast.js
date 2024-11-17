import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, id, children }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const { setToastStack } = React.useContext(ToastContext);

  const handleDelete = (idToRemove) => {
    setToastStack((previousToastStack) => {
      return previousToastStack.filter((toast) => {
        return toast.id !== idToRemove;
      });
    });
  };

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{children}</VisuallyHidden>
        {children}
      </p>
      <button
        onClick={() => handleDelete(id)}
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;

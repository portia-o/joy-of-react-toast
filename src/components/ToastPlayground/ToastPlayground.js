import React from "react";

import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastType, setToastType] = React.useState("");
  const [message, setMessage] = React.useState("");
  const { setToastStack } = React.useContext(ToastContext);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToast = {
      message: message,
      variant: toastType,
      visible: true,
      id: Math.random(),
    };
    setToastStack((previousToastStack) => {
      return [...previousToastStack, newToast];
    });
    setMessage("");
    setToastType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        <ToastShelf />

        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <fieldset>
                {VARIANT_OPTIONS.map((option) => {
                  return (
                    <label key={option} htmlFor={`variant-${option}`}>
                      <input
                        id={`variant-${option}`}
                        type="radio"
                        name="variant"
                        value={toastType}
                        checked={toastType === option}
                        onChange={() => setToastType(option)}
                      />
                      {option}
                    </label>
                  );
                })}
              </fieldset>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;

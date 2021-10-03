import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ title, content, children, onDismiss }) => {
  useEffect(() => {
    const escapeKey = (e) => {
      if (e.key === `Escape`) onDismiss();
      console.log(e.key);
    };
    window.addEventListener("keydown", escapeKey, true);
    return () => {
      window.removeEventListener("keydown", escapeKey, true);
    };
  }, [onDismiss]);
  return ReactDOM.createPortal(
    <div
      className="ui modals dimmer visible active"
      onClick={(e) => {
        if (e.target === e.currentTarget) onDismiss();
      }}
    >
      <div className="ui blurring modal visible active">
        <i
          className="close icon"
          style={{ transform: "translate(-50px,50px)", color: "red" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onDismiss();
          }}
        ></i>
        <div className="header">{title}</div>
        <div className="content">
          <p>{content}</p>
        </div>
        <div className="actions">{children}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

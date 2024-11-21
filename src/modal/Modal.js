import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const Modal = ({ children }) => {
  const showcart = useSelector((state) => state.cart.showCart);
  if (showcart === false) return null;

  return createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>{children}</div>
    </div>,
    document.getElementById("portal-root") // the DOM node where the modal will be rendered
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  },
};

export default Modal;

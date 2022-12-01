import React from "react";
import style from "./Modal.module.css";

const Modal = ({ state, children, onChangeState }) => {
  return (
    <>
      {state && (
        <div className={style.backgroundModal}>
          <div className={style.modalCard}>
            <p>Un modal!</p>
            {children}
            <button onClick={() => onChangeState(false)}>Accept</button>
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };

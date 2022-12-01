import React from "react";
import style from "./OptionButton.module.css"

const OptionButton = ({ children, handleModal }) => <button className={style.optionButton} onClick={() => handleModal(true)}>{children}</button>;

export { OptionButton };

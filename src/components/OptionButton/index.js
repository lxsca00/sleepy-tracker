import React from "react";
import style from "./OptionButton.module.css"

const OptionButton = ({ children }) => <button className={style.optionButton}>{children}</button>;

export { OptionButton };

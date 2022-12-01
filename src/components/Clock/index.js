import React from "react";
import Clock from "react-live-clock";
import style from "./Clock.module.css"

const MyClock = () => (
  <Clock className={style.myClock} format={"HH:mm"} ticking={true} />
);

export { MyClock };

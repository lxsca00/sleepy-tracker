import React from "react";
import { NavBar } from "../../components/NavBar";
import { OptionButton } from "../../components/OptionButton";
import style from "./Calculate.module.css"

const Calculate = () => {
  return (
    <section className={style.calculate}>
      <p>11:11 pm</p>
      <p>Sunday 27th, November, 2022</p>
      <div className={style.containerOptionButtons}>
        <OptionButton>
          <h4>Go to the bed now</h4>
          <p>Calculates the necessary sleep cycles if you lie down right now</p>
        </OptionButton>
        <OptionButton>
          <h4>What time to wake up?</h4>
          <p>
            Calculates the necessary sleep cycles according to the time you
            indicate that you will go to the bed
          </p>
        </OptionButton>
        <OptionButton>
          <h4>What time to go to bed?</h4>
          <p>
            Calculates the necessary sleep cycles according to the time you
            indicate you will wake up
          </p>
        </OptionButton>
      </div>
      <NavBar/>
    </section>
  );
};

export { Calculate };

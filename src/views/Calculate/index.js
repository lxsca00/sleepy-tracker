import React, { useState } from "react";
import { MyClock } from "../../components/Clock";
import { CurrentDate } from "../../components/CurrentDate";
import { Modal } from "../../components/Modal";
import { NavBar } from "../../components/NavBar";
import { OptionButton } from "../../components/OptionButton";
import style from "./Calculate.module.css";

const Calculate = () => {

  const [modalNow, setModalNow] = useState(false)
  const [modalGoBed, setModalGoBed] = useState(false)
  const [modalWakeUp, setModalWakeUp] = useState(false)

  return (
    <>
      <section className={style.calculate}>
        <div className={style.currentTime}>
          <MyClock />
          <CurrentDate />
        </div>
        <div className={style.containerOptionButtons}>
          <OptionButton handleModal={setModalNow}>
            <h4>Go to the bed now</h4>
            <p>
              Calculates the necessary sleep cycles if you lie down right now
            </p>
          </OptionButton>
          <OptionButton handleModal={setModalGoBed}>
            <h4>What time to wake up?</h4>
            <p>
              Calculates the necessary sleep cycles according to the time you
              indicate that you will go to the bed
            </p>
          </OptionButton>
          <OptionButton handleModal={setModalWakeUp}>
            <h4>What time to go to bed?</h4>
            <p>
              Calculates the necessary sleep cycles according to the time you
              indicate you will wake up
            </p>
          </OptionButton>
        </div>
      </section>
      <Modal state={modalNow} onChangeState={setModalNow}><p>Sleep now!</p></Modal>
      <Modal state={modalGoBed} onChangeState={setModalGoBed}><p>What time will you go to bed?</p></Modal>
      <Modal state={modalWakeUp} onChangeState={setModalWakeUp}><p>What thime will you wake up?</p></Modal>
      <NavBar />
    </>
  );
};

export { Calculate };

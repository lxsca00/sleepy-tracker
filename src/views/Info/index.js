import React from "react";
import { NavBar } from "../../components/NavBar";

const Info = () => {
  return (
    <section>
      <h3>How it works?</h3>
      <p>
        Sleep is not uniform. Over the course of the night, your total sleep is
        made up of several rounds of the sleep cycle, which is composed of four
        individual stages.
      </p>
      <h3>What are the sleep cycles?</h3>
      <p>Sleep cycles are rest periods of between 90 and 110 minutes in length, comprising five stages. </p>
      <p>Stage 1</p>
      <p>Stage 2</p>
      <p>Stage 3</p>
      <p>Stage 4</p>
      <p>Stage 5</p>
      <h3>When to awaken?</h3>
      <p>
        In general it's better to wake up in the final part of the REM stage or
        at the beginning of the Stage 1.
      </p>
      <h3>When not to awaken?</h3>
      <p>It's preferable to avoid awakening in stage 3 o 4.</p>
      <NavBar />
    </section>
  );
};

export { Info };

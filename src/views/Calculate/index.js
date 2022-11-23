import React from "react";
import { OptionButton } from "../../components/MainButton";

const Calculate = () => {
  return (
    <section>
      <p>Here goes the hour</p>
      <p>Here goes the day</p>
      <OptionButton>
        <h4>Go to the bed now</h4>
      </OptionButton>
      <OptionButton>
        <h4>What time to wake up?</h4>
      </OptionButton>
      <OptionButton>
        <h4>What time to go to bed?</h4>
      </OptionButton>
    </section>
  );
};

export {Calculate}

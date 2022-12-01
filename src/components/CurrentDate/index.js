import React from "react";

const CurrentDate = () => {
  const newDate = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <p>
        {days[newDate.getDay()]}, {months[newDate.getMonth()]}{" "}
        {newDate.getDate()}, {newDate.getFullYear()}
      </p>
    </>
  );
};

export { CurrentDate };

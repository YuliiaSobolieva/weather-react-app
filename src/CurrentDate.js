import React from "react";

export default function CurrentDate() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const day = new Date();
  const dayName = days[day.getDay()];

  return (
    <div className="CurrentDate">
      <p>{dayName}</p>
    </div>
  );
}

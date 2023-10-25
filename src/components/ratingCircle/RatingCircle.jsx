import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RatingCircle = ({ rating }) => {
  return (
    <div className="flex h-12 justify-start">
      <CircularProgressbar
        value={rating}
        background
        backgroundPadding={6}
        text={rating}
        maxValue={10}
        minValue={0}
        strokeWidth={10}
        styles={buildStyles({
          textSize: "1.7rem",
          textColor: "#000000",
          backgroundColor: "#fff",
          trailColor: "#fff",
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
        className="font-semibold"
      />
      ;
    </div>
  );
};

export default RatingCircle;

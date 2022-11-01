import React from "react";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

// this version use context we don't need to pass feedback prop
// also don't need propTypes
// when save our change data now comes from FeedbackContext.js no longer from App.js as prop
function FeedbackStats() {
  // take out feedback state from FeedbackContext
  const { feedback } = useContext(FeedbackContext);
  // calculate ratng average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  console.log(average);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;

import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

// this version use context we don't need to pass feedback prop
// also don't need propTypes
// when save our change data now comes from FeedbackContext.js no longer from App.js as prop
function FeedbackList() {
  // take out feedback state from FeedbackContext
  const { feedback } = useContext(FeedbackContext);
  console.log(feedback);
  // we do have feedback data from
  // const [feedback, setFeedback] = useState(FeedbackData)
  // so will not show "No feedback Yet"
  if (!feedback || feedback.length === 0) {
    return <p>No feedback Yet</p>;
  }
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem
  //         key={item.id}
  //         item={item}
  //         // handleDelete={(id)=>console.log(id)}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              // handleDelete={(id)=>console.log(id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;

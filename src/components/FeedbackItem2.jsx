import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
// we installed react-icons
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ item, handleDelete }) {
  // const handleClick = (id) => {
  //   console.log(id)
  // }
  return (
    // there is prop card.reverse style in css file
    // this reverse just use the same name as bool
    // then true use reverse style, false don't use the style
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      {/* <button onClick={()=>handleClick(item.id)} className='close'> */}
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;

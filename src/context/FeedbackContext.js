import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Context
const FeedbackContext = createContext();

// Context need Provider to wrap everything in the component
// Provider wrap "children" that passed in
// state or function pass in through "value"
// value use useState hook or reducer later on
export const FeedbackProvider = ({ children }) => {
  // our feedback state
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this is feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "this is feedback item 2",
      rating: 9,
    },
    {
      id: 3,
      text: "this is feedback item 3",
      rating: 7,
    },
  ]);
  // global states, detect click on edit, for form component
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  // use context to host deleteFeedback() function instead of App.js
  const deleteFeedback = (id) => {
    console.log("App", id);
    if (window.confirm("Are you sure you want to delete?")) {
      // use setFeedback to change state, to ignore the item from array, see FeedbackData.js
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  // use context to host addFeedback() function instead of App.js
  const addFeedback = (newFeedback) => {
    // newFeedback coming in from FeedbackForm already have text and rating properties , we add id to it
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    // state is immutable, we can't just pudh on new item to it, we need to make a copy of it to set it
    setFeedback([newFeedback, ...feedback]);
  };

  // update feedback item
  const updateFeedback = (id, updItem) => {
    console.log(id, updItem);
    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...updItem } : item;
      })
    );
  };
  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };
  // return our state to let other component to access it,
  // editFeedback is the function that runs when clicked edit icon,
  // feedbackEdit is a state holds the item and boolean
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
        editFeedback: editFeedback,
        feedbackEdit: feedbackEdit,
        updateFeedback: updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

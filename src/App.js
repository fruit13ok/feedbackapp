// initial component
import React from "react";
import Header from "./components/Header";
// import FeedbackItem from './components/FeedbackItem'
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
// use uuid to genter unique id, the object is v4 and we set to name to uuidv4 to be meaningful
import { v4 as uuidv4 } from "uuid";
// BrowserRouter allow our routes access like url, we name it Router
// Route use to render the our route
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";
// use {} to import because FeedbackProvider is export as part of FeedbackContext
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  // app level state
  //   const [feedback, setFeedback] = useState(FeedbackData);
  //   const addFeedback = (newFeedback) => {
  //     // newFeedback coming in from FeedbackForm already have text and rating properties , we add id to it
  //     newFeedback.id = uuidv4();
  //     console.log(newFeedback);
  //     // state is immutable, we can't just pudh on new item to it, we need to make a copy of it to set it
  //     setFeedback([newFeedback, ...feedback]);
  //   };
  // use context to host deleteFeedback() function instead of App.js
  //   const deleteFeedback = (id) => {
  //     console.log("App", id);
  //     if (window.confirm("Are you sure you want to delete?")) {
  //       // use setFeedback to change state, to ignore the item from array, see FeedbackData.js
  //       setFeedback(feedback.filter((item) => item.id !== id));
  //     }
  //   };
  return (
    // {/* calling the Header component in App component, it can pass prop, or blank */}
    // <Header />
    // {/* <Header bgColor='red' textColor='blue'/> */}
    // {/* <Header text="hello world"/> */}
    // {/* passing number instead of string to prop will fail prop type with (Warning message) */}
    // {/* <Header text={1}/> */}
    // <div className="container">
    //   {/* <h1>My App component</h1> */}
    //   {/* <FeedbackItem /> */}
    //       <FeedbackForm handleAdd={addFeedback} />
    //       <FeedbackStats feedback={feedback} />
    //       <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    // </div>
    // );

    // wrap return compoments in provider
    <FeedbackProvider>
      {/* wrap App.js return components inside Router */}
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/post/:id/:name" element={<Post />} /> */}
            {/* /post* means there might be nested path, like /post/show */}
            {/* <Route path="/post*" element={<Post />} /> */}
          </Routes>
          {/* <Card>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </Card> */}
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

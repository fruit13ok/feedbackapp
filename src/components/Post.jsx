import React from "react";
import {
  useParams,
  Navigate,
  useNavigate,
  Route,
  Routes,
} from "react-router-dom";

function Post() {
  const params = useParams();
  const navigate = useNavigate();
  const status = 200;
  const onClick = () => {
    console.log("hello");
    navigate("/about");
  };
  // if is 404 redirect to route /notfound
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  return (
    <div>
      <h1>Post {params.id}</h1>
      <p>Name: {params.name}</p>
      <button onClick={onClick}>Click</button>
      {/* path /show is nested under /post/show */}
      <Routes>
        <Route path="/show" element={<h1>hello</h1>} />
      </Routes>
    </div>
  );
}

export default Post;

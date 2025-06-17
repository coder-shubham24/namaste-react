import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <div>
    <h1>This is the title</h1>
    <button onClick={() => alert("button clicked")}>Click here</button>
  </div>
);

// React components

// functional comp
const MyComp = () => (
  <div>
    <Title/>
    <h1>Thsi is our 2nd component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <MyComp/>
);

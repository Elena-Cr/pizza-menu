import React from "react";
import ReactDOM from "react-dom/client";

//When returning 2 componenets at the same time you need to nest them
function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Pizza />
    </div>
  );
}

//Never nest functions within other functions, always keep components at the top level
function Pizza() {
  return <h2>Pizza</h2>;
}

//Render the root (app) in version 18 and up
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
//ReactDOM.render(<App/>,document.getElementById("root"));

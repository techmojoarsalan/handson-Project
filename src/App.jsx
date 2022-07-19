import React from "react";
import Login from "./Component/Login";
import Context from "./Context";

function App() {
  return <>
    <Context/>
      <Login/>
    <Context/>
  </>;
}

export default App;

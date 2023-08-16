import React from "react";
import ClickCounter from "./components/ClickCounter";
import ClickButton from "./components/ClickButton";
import ClickNull from "./components/ClickNull";

function App() {
  return (
    <>
      <div className="container">
        <ClickCounter />
        <ClickButton />
        <ClickNull />
      </div>
    </>
  );
}

export default App;

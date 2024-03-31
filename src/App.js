import React from "react";
import Button from "./components/Button.jsx";

// console.log(Button());
const App = () => {
  const handleClickAction = () => {
    console.log("cliced from parent");
  };
  return (
    <div>
      <Button data={{ a: { s: { c: "c" } } }} clickAction={handleClickAction}>
        Click me
      </Button>
    </div>
  );
};

export default App;

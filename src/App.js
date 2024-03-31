import React, { useCallback, useState } from "react";
import Button from "./components/Button.jsx";

const App = () => {
  const [message, updateMessage] = useState("Hello user, Good Morning");

  const handleClickChange = useCallback(() => {
    updateMessage((prevState) => {
      console.log("previous Data is", prevState);
      return "Hello user, Good Afternoon";
    });
  }, []);
  return (
    <>
      <div>{message}</div>
      <Button clickAction={handleClickChange}>Click Me</Button>
    </>
  );
};

export default App;

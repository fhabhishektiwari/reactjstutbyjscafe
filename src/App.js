import React, { useState } from "react";
import Button from "./components/Button.jsx";
import Text from "./components/Text.jsx";

// console.log(Button());
const App = () => {
  const [data, setData] = useState([
    { id: "a", text: "Text 0" },
    { id: "b", text: "Text 1" },
    { id: "c", text: "Text 2" },
    { id: "d", text: "Text 3" },
    { id: "e", text: "Text 4" },
  ]);

  const addMoreData = () => {
    setData((prevState) => [{ id: "f", text: "Text 5" }, ...prevState]);
  };
  return (
    <>
      {data.map((item, index) => (
        <Text key={item.id}>{item.text}</Text> //we are not using index as a key because of performance issue.
      ))}

      <Button clickAction={addMoreData}>Click me</Button>
    </>
  );
};

export default App;

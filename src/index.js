// const div = document.getElementById("root");
// const p = document.createElement("p");
// p.innerHTML = "Hello React js Developer";

// div.appendChild(p);

// createElement("element name",{attributes},"contents")
import React from "react";
import ReactDOM from "react-dom/client";
const isMorning = true;
const morningText = "good morning user";
const afternoonText = "afternoon user";

const morningElement = (
  <div>
    {morningText} <span>it is 8AM</span>
  </div>
);
const afternoonElement = (
  <div>
    {afternoonText} <span>it is 6PM</span>
  </div>
);

const greetingElement = isMorning ? morningElement : afternoonElement;

const GreetingComponent = function () {
  return <>{greetingElement} i am inside components</>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GreetingComponent />);

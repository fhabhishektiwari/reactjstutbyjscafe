// const div = document.getElementById("root");
// const p = document.createElement("p");
// p.innerHTML = "Hello React js Developer";

// div.appendChild(p);

// createElement("element name",{attributes},"contents")
import React from "react";
import ReactDOM from "react-dom";
const child1 = React.createElement("p", {}, "This is child1");
const child2 = React.createElement("p", {}, "This is child2");

// const div = React.createElement("div", { className: "text" }, [child1, child2]);
const div = <div>Hello React js developer</div>;//jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);

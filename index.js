// const div = document.getElementById("root");
// const p = document.createElement("p");
// p.innerHTML = "Hello React js Developer";

// div.appendChild(p);

// createElement("element name",{attributes},"contents")
const child1 = React.createElement("p", {}, "This is child1");
const child2 = React.createElement("p", {}, "This is child2");

const div = React.createElement("div", { className: "text" }, [child1, child2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);

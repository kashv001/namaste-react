// const heading = React.createElement('h1', {id: 'heading', class:"heading-title"}, 'Hello World! from JS file');

// console.log(heading); // It's am object
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I am coming from H!"),
    React.createElement("h2", { id: "h2" }, "I am coming from H2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

root.render(parent);

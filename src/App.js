import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    id: 2,
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    id: 3,
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  { label: "The Color Green", value: "green" },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

// const routeSwitch = (
//   selected,
//   setSelected,
//   color,
//   path = window.location.pathname
// ) => {
//   switch (path) {
//     case "/":
//       return <Accordion items={items} />;
//     case "/list":
//       return <Search />;
//     case "/dropdown":
//       return (
//         <Dropdown
//           options={options}
//           selected={selected}
//           onSelectedChange={setSelected}
//           label={color}
//         />
//       );
//     case "/translate":
//       return <Translate options={options} />;

//     default:
//       return <Accordion items={items} />;
//   }
// };

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  //   return <div>{routeSwitch(selected, setSelected, "color")}</div>;
  return (
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;

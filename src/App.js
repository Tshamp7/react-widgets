import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;

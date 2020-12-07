import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = activeIndex === index ? "active" : "";
    return (
      <React.Fragment key={item.id}>
        <div className={`title ${isActive}`} onClick={() => handleClick(index)}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${isActive}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;

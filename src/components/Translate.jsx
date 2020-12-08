import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <div className="label">Enter Text</div>
          <input type="text" value={input} onChange={handleChange} />
        </div>
      </div>

      <Dropdown
        options={options}
        selected={language}
        label="Language"
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert q={input} target={language} />
    </div>
  );
};

export default Translate;

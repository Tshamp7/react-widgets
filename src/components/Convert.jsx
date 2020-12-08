import React, { useState, useEffect } from "react";
import Axios from "axios";

// post https://translation.googleapis.com/language/translate/v2 (params: q, target, key(api key))
//

const Convert = ({ q, target }) => {
  const [output, setOutput] = useState("");
  const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM";

  useEffect(() => {
    const translate = async () => {
      const { data } = await Axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        {},
        {
          params: {
            q,
            key,
            target: target.value,
          },
        }
      );
      setOutput(data.data.translations[0].translatedText);
    };

    const timeoutId = setTimeout(() => {
      if (q) {
        translate();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [q, target]);

  return (
    <div>
      <div className="field">
        <div>{output}</div>
      </div>
    </div>
  );
};

export default Convert;

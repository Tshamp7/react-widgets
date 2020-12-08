import React, { useState, useEffect } from "react";
import Axios from "axios";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await Axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: searchTerm,
        },
      });
      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        search();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input" value={searchTerm} onChange={handleChange} />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;

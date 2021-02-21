import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term
        }
      });

      console.log("useEffect", term);
    };

    search();
  }, [term]);

  // **************************
  // ***************************

  const updateTerm = (e) => {
    setTerm(e.target.value);
    console.log("update:", term);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>Enter Search Term</label>
        <br />
        <input
          onChange={updateTerm}
          value={term}
          className="input"
          type="text"
        />
      </form>
    </div>
  );
};

export default Search;

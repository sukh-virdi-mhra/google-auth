import React, { useState } from "react";
import axios from "axios";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function searchDatabase() {
    axios
      .get(`http://localhost:5000/getCountries/${searchTerm}`)
      .then((response) => {
        props.setCountries(response.data);
      });
  }

  function handleInput(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <h2>Search</h2>
      <input onChange={handleInput}></input>
      <button onClick={searchDatabase}>Submit</button>
    </div>
  );
}

export default Search;

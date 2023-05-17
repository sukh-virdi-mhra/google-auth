import React from "react";

function Result(props) {
  return (
    <div>
      <ul>
        {props.countries.map((country) => {
          return <li key={country}>{country}</li>;
        })}
      </ul>
    </div>
  );
}

export default Result;

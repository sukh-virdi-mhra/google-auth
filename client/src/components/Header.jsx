import React from "react";

function Header() {
  return (
    <div>
      <h1>Country search!!!</h1>
      <img
        style={{ width: "100px" }}
        src={process.env.PUBLIC_URL + "world-image.jpg"}
      ></img>
      <p>This React application lets you search through the countries below</p>
    </div>
  );
}

export default Header;

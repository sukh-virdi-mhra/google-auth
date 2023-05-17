const express = require("express");
const externalSource = require("./countries.js");
const cors = require("cors");
const app = express();
const port = 5000;

const countries = ["England", "France", "Germany", "Italy", "Spain"];

app.use(cors());

//default path
app.get("/", (req, res) => {
  res.send("Server is running!");
});

//no search term provided, return all countries
app.get("/getCountries", (req, res) => {
  res.send(countries);
});

//search term provided, returns only countries that match the search term
app.get("/getCountries/:searchTerm", (req, res) => {
  let searchTerm = req.params.searchTerm;

  function checkCountry(country) {
    return country.includes(searchTerm);
  }

  res.send(countries.filter(checkCountry));
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

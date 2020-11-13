import "./App.css";
import { MenuItem, Select, FormControl } from "@material-ui/core";
import React, {useState, useEffect} from "react";


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  // https://disease.sh/v3/covid-19/countries

  useEffect (() => {
    // Code inside here will run once
    // async -> send request -> wait -> do something
    
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries").then((response) => response.json()).then((data) => {const countries = data.map((country) => (
      {

       name: country.country, // United States, United Kingdom
       Value: country.countryInfo.iso2, // UK, USA, FR..

      }));

      setCountries(countries);
  });
 };
 
 getCountriesData();
}, []);

  const onCountryChange = async (event) => {
  const countryCode = event.target.value;

  console.log("yooooo", countryCode);
  setCountry(countryCode);

}

  return (
    <div className="app">
        <h1>COVID-19 TRACKER</h1>
        <div classname="app__header">
        <FormControl className="app__dropdown">
          <Select varient = "outlined" onChange={onCountryChange} value={country}>
            {/* Loop through all countries and show dropdown list of the options*/}

            <MenuItem value="worldwide">Worldwide</MenuItem>

            {countries.map((country) => (
               <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
               

          </Select>
        </FormControl>
        </div>
        

        {/* Header */}
        {/* Title + Select input dropdown field */}

        {/* InforBoxs */}
        {/* InforBoxs */}
        {/* InforBoxs */}

        {/* Table */}
        {/* Graph */}

        {/* Map */}

    </div>
  );
}

export default App;

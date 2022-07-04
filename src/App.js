import React, { useState } from 'react';
import './App.css';

// The API key is from OpenWeather site.
const api = {
  key: process.env.REACT_APP_KEY,
  base: process.env.REACT_APP_BASE
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  // This arrow function will ,upon pressing Enter, fetch the results and make them json then setting them to the state.
  const countryWeather = event => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`) // We can also use 'forecast' instead of weather.
        .then(res => res.json())
        .then(result => {
          setQuery(''); // This will empty the search field after pressing Enter.
          setWeather(result);
          console.log(result);
        });
    }
  };

  // This arrow function will give us today's date.
  const dateBuilder = d => { // The d represents the date.
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()]; // This will get a number between 0 and 6 which will get us the day.
    let date = d.getDate();
    let month = months[d.getMonth()]; //This will get us a number between 0 and 11.
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div>
      <div className={(typeof weather.main != "undefined")
        ? ((weather.main.temp > 15)
          ? 'warm-main-format'
          : 'main-format')
        : 'main-format'}>
        <div className='centered'>
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            onChange={event => setQuery(event.target.value)}
            value={query}
            onKeyPress={countryWeather}
          />
        </div>
        {(typeof weather.main != "undefined") && (
          <>
            <div className='align'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
              <div className='temp'>{Math.round(weather.main.temp)}°c</div>
              <div className='weather-condition'>{weather.weather[0].main}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

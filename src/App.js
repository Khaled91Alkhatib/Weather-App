import React from 'react';
import './App.css';

// const api = {
//   key: "1235472da72647339bd3b51c0c09b492",
//   base: "https://api.openweathermap.org/data/2.5/"
// }

function App() {

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
      <div className="main-format">
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
        />
        <div className='country-data'>
          <div>Ontario, Canada</div>
          <div>{dateBuilder(new Date())}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

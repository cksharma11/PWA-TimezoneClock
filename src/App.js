import React, { useState } from "react";
import Clock from "./Clock";
import { getUniqueTimezones } from "./utils";

const App = () => {
  const [timezone, setTimezone] = useState("Africa/Abidjan");
  const [city, setCity] = useState("ABIDJAN");
  const uniqueTimezones = getUniqueTimezones();

  const handleTimezoneChange = timezone => {
    const cityName = timezone.split("/")[1];
    setTimezone(timezone);
    setCity(cityName.toUpperCase());
  };

  return (
    <div className="container">
      <div className="header-text">SELECT YOUR TIMEZONE</div>
      <select
        onChange={e => handleTimezoneChange(e.target.value)}
        className="select-menu"
      >
        {uniqueTimezones.map(timezone => {
          return (
            <option value={timezone} key={timezone} className="option">
              {timezone}
            </option>
          );
        })}
      </select>
      <Clock timezone={timezone} />
      <div className="city-info">CITY</div>
      <div className="city-name">{city}</div>
    </div>
  );
};

export default App;

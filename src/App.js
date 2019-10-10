import React, {useState} from 'react';
import timezonesData from '../src/data/timezones';
import moment from 'moment-timezone'
import Clock from './Clock';

const getUniqueTimezones = () => {
  const timezones = [];
  timezonesData.forEach(timezone => {
    timezones.push.apply(timezones, timezone.utc);
  })
  const uniqueTimezones = [...new Set(timezones)].sort();
  return uniqueTimezones;
}

const App = () => {
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const uniqueTimezones = getUniqueTimezones();

  const updateTimezone = (timezone) => {
    setTimezone(timezone);
  }

  return (
    <div className="container">
      <div className="header-text">SELECT YOUR TIMEZONE</div>
      <select onChange={(e) => updateTimezone(e.target.value)} className="select-menu">
        {uniqueTimezones.map(timezone => {
          return <option value={timezone} key={timezone}>{timezone}</option>
        })}
      </select>
      <div>
        <Clock timezone={timezone}/>
      </div>
    </div>
  )
}

export default App;

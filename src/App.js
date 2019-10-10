import React from 'react';
import timezonesData from '../src/data/timezones';

const App = () => {
  const timezones = [];
  timezonesData.forEach(timezone => {
    timezones.push.apply(timezones, timezone.utc);
  })

  const uniqueTimezones = [...new Set(timezones)].sort();

  return (
    <div>
      <select>
        {uniqueTimezones.map(timezone => {
          return <option value={timezone} key={timezone}>{timezone}</option>
        })}
      </select>
    </div>
  )
}

export default App;

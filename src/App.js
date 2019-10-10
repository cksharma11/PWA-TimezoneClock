import React, {useState} from 'react';
import timezonesData from '../src/data/timezones';
import moment from 'moment-timezone'

const App = () => {
  const [time, setTime] = useState(moment().tz("India/Delhi"))
  const timezones = [];
  timezonesData.forEach(timezone => {
    timezones.push.apply(timezones, timezone.utc);
  })

  const updateTime = (timezone) => {
    setTime(moment.tz(timezone));
  }

  const uniqueTimezones = [...new Set(timezones)].sort();

  return (
    <div>
      <select onChange={(e) => updateTime(e.target.value)}>
        {uniqueTimezones.map(timezone => {
          return <option value={timezone} key={timezone}>{timezone}</option>
        })}
      </select>
      <div>
        {time.toString()}
      </div>
    </div>
  )
}

export default App;

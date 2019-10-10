import React, { useState } from "react";
import moment from 'moment-timezone'

const getAsset = date => {
  const day = date.split(" ")[0];
  const hour = date.split(" ")[4].split(":")[0];
  const minute = date.split(" ")[4].split(":")[1];
  const second = date.split(" ")[4].split(":")[2];
  return { day, hour, minute, second };
};

const  Clock = ({timezone}) => {
  const [date, setDate] = useState(moment.tz(timezone));
  const updateDate = () => {
    setTimeout(() => {
      setDate(moment.tz(timezone));
    }, 1000);
  };

  const { day, hour, minute, second } = getAsset(date.toString());

  updateDate();

  return (
    <div className="App">
      <div className="body">
        <div>
          <div className="box">{day} : </div>
          <div className="sub">Day</div>
        </div>
        <div>
          <div className="box">{hour} : </div>
          <div className="sub">HOURS</div>
        </div>
        <div>
          <div className="box">{minute} :</div>
          <div className="sub">MINUTES</div>
        </div>
        <div>
          <div className="box">{second}</div>
          <div className="sub">SECONDS</div>
        </div>
      </div>
    </div>
  );
}

export default Clock;

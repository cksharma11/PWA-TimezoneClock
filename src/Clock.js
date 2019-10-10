import React, { useState } from "react";
import moment from "moment-timezone";
import { getDateTimeInfo } from "./utils";

const Clock = ({ timezone }) => {
  const [datetime, setDatetime] = useState(moment.tz(timezone));
  const updateDatetime = () => {
    setTimeout(() => {
      setDatetime(moment.tz(timezone));
    }, 1000);
  };

  const { day, hour, minute, second } = getDateTimeInfo(datetime.toString());

  updateDatetime();

  return (
    <div className="clock">
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
};

export default Clock;

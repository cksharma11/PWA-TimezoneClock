import timezonesData from "../src/data/timezones";

const getDateTimeInfo = date => {
  const day = date.split(" ")[0];
  const hour = date.split(" ")[4].split(":")[0];
  const minute = date.split(" ")[4].split(":")[1];
  const second = date.split(" ")[4].split(":")[2];
  return { day, hour, minute, second };
};

const getUniqueTimezones = () => {
  const timezones = [];
  timezonesData.forEach(timezone => {
    timezones.push.apply(timezones, timezone.utc);
  });
  const uniqueTimezones = [...new Set(timezones)].sort();
  return uniqueTimezones;
};

export { getDateTimeInfo, getUniqueTimezones };

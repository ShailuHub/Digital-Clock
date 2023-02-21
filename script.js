const updateTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  const seconds = date.getSeconds();

  const hr = document.getElementById("hr");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");
  const am_pm = document.getElementById("am-pm");

  hours < 10 ? (hr.innerHTML = "0" + hours) : (hr.innerHTML = hours);
  mins < 10 ? (min.innerHTML = "0" + mins) : (min.innerHTML = mins);
  seconds < 10 ? (sec.innerHTML = "0" + seconds) : (sec.innerHTML = seconds);
  hours >= 0 && hours < 12
    ? (am_pm.innerHTML = "AM")
    : (am_pm.innerHTML = "PM");

  setTimeout(() => {
    updateTime();
  }, 1000);
};

updateTime();

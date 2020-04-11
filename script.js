let isTime;
let time;
let txtTime = document.getElementById("clock");

function clock() {
  time = setInterval(() => {
    txtTime.innerHTML = new Date().toLocaleTimeString("en-US");
    isTime = true;
  }, 1000);
}

clock();

// change time 12H or 24H
function changeClock() {
  clearInterval(time);
  if (isTime == true) {
    isTime = false;
    time = setInterval(() => {
      txtTime.innerHTML = new Date().toLocaleTimeString("en-US", {
        hour12: false,
      });
    }, 1000);
  } else {
    isTime = true;
    time = setInterval(() => {
      txtTime.innerHTML = new Date().toLocaleTimeString("en-US");
    }, 1000);
  }
}

// stop watch
function stopWatch() {
  clearInterval(time);
  txtTime.innerHTML = "00:00:00";
  document.getElementById("boxButtonTime").style.display = "none";
  document.getElementById("boxButtonStopWatch").style.display = "flex";
}

//back button
function back() {
  clock();
  document.getElementById("boxButtonTime").style.display = "flex";
  document.getElementById("boxButtonStopWatch").style.display = "none";
}

var timeing = 0;
var running = 0;

//start
function startPause() {
  document.getElementById("boxButtonStopWatch").style.display = "none";
  document.getElementById("boxButtonStart").style.display = "flex";
  document.getElementById("buttonStop").style.display = "block";
  document.getElementById("buttonStart").style.display = "none";
  if (running == 0) {
    running = 1;
    increment();
  } else {
    running = 0;
  }
}
//Pause
function stop() {
  running = 0;
  document.getElementById("buttonStop").style.display = "none";
  document.getElementById("buttonStart").style.display = "block";
}
//Restart
function reset() {
  running = 0;
  timeing = 0;
  document.getElementById("buttonStop").style.display = "none";
  document.getElementById("buttonStart").style.display = "block";
  txtTime.innerHTML = "00:00:00";
}

// function start time and show it
function increment() {
  if (running == 1) {
    setTimeout(function () {
      timeing++;
      var mins = Math.floor(timeing / 10 / 60);
      if (mins <= 9) {
        mins = "0" + mins;
      }
      var secs = Math.floor(timeing / 10);
      if (secs <= 9) {
        secs = "0" + secs;
      }
      var tenths = Math.floor(timeing % 10);
      if (tenths <= 9) {
        tenths = "0" + tenths;
      }
      txtTime.innerHTML = mins + ":" + secs + ":" + tenths;
      increment();
    }, 100);
  }
}

let isTime;
let time;
let txtTime = document.getElementById("clock");
let txtLap;
document.getElementById("laps").style.display = "none";

// func for change display
function changeDisplay(id, display) {
  document.getElementById(id).style.display = display;
}

// clock
function clock() {
  txtTime.innerHTML = new Date().toLocaleTimeString("en-US");
  time = setInterval(() => {
    txtTime.innerHTML = new Date().toLocaleTimeString("en-US");
    isTime = true;
  }, 1000);
}
clock();

// change time 12H or 24H
function changeClock() {
  clearInterval(time);
  txtTime.innerHTML = new Date().toLocaleTimeString("en-US", {
    hour12: !isTime,
  });
  time = setInterval(() => {
    txtTime.innerHTML = new Date().toLocaleTimeString("en-US", {
      hour12: isTime,
    });
  }, 1000);
  isTime = !isTime;
}

// stop watch
function stopWatch() {
  clearInterval(time);
  txtTime.innerHTML = "00:00:00";
  changeDisplay("boxButtonTime", "none");
  changeDisplay("boxButtonStopWatch", "flex");
}

//back button
function back() {
  clock();
  changeDisplay("boxButtonTime", "flex");
  changeDisplay("boxButtonStopWatch", "none");
}

let timeing = 0;
let running = 0;

//start
function startPause() {
  changeDisplay("boxButtonStopWatch", "none");
  changeDisplay("boxButtonStart", "flex");
  changeDisplay("buttonStop", "block");
  changeDisplay("buttonStart", "none");
  if (running == 0) {
    running = 1;
    increment();
  } else {
    running = 0;
  }
}

//stop
function stop() {
  running = 0;
  changeDisplay("buttonStop", "none");
  changeDisplay("buttonStart", "block");
}
//Restart
function reset() {
  txtTime.innerHTML = "00:00:00";
  running = 0;
  timeing = 0;
  changeDisplay("buttonStop", "none");
  changeDisplay("buttonStart", "block");
  changeDisplay("laps", "none");
  document.getElementById("childLap").innerHTML = "";
}

//Lap
function lap() {
  changeDisplay("laps", "flex");
  if (running == 1) {
    txtLap = document.createElement("p");
    txtLap.innerHTML = txtTime.innerText;
    txtLap.style.fontSize = "40px";
    document.body.appendChild(txtLap);
    document.getElementById("childLap").appendChild(txtLap);
  }
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
      var secs = Math.floor((timeing / 10) % 60);
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

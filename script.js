let isTime;
let time;
let txtTime = document.getElementById("clock");
time = setInterval(() => {
  txtTime.innerHTML = new Date().toLocaleTimeString("en-US");
  isTime = true;
}, 1000);

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

function start() {
  document.getElementById("boxButtonStopWatch").style.display = "none";
  document.getElementById("boxButtonStart").style.display = "flex";
}

var timeing = 0;
var running = 0;

function startPause(){
	if(running == 0){
		running = 1;
		increment();
		document.getElementById("startPause").innerHTML = "Pause";
	}else{
		running = 0;
		document.getElementById("startPause").innerHTML = "Resume";
	}
};

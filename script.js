// document.body.onload = addElement;

// function addElement() {
//   let newDiv = document.createElement("div");
//   let newContent = document.createTextNode("hello world");
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   let currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }
let isTime;
var time = setInterval(() => {
  let time = new Date().toLocaleTimeString("en-US");
  document.getElementById("clock").innerText = time;
  isTime = true;
}, 1000);

function changeClock() {
  if (isTime == true) {
    clearInterval(time);
    isTime = false;
    time = setInterval(() => {
      let time = new Date().toLocaleTimeString("en-US", { hour12: false });
      document.getElementById("clock").innerText = time;
    }, 1000);
  } else {
    clearInterval(time);
    isTime = true;
    time = setInterval(() => {
      let time = new Date().toLocaleTimeString("en-US");
      document.getElementById("clock").innerText = time;
    }, 1000);
  }
}

function stopClock() {
  
}

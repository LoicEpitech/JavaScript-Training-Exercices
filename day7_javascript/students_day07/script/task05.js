const audio = new Audio("https://universal-soundbank.com/sounds/13631.mp3");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(6, 6);
ctx.lineTo(14, 10);
ctx.lineTo(6, 14);
ctx.fill();

const footer = document.querySelector("footer");
const pauseButton = footer.querySelector("button:nth-of-type(1)");
const stopButton = footer.querySelector("button:nth-of-type(2)");
const muteButton = footer.querySelector("button:nth-of-type(3)");

canvas.addEventListener("click", () => {
  audio.play();
});

let stopped = true;

canvas.addEventListener("click", handlePlay);
pauseButton.addEventListener("click", handlePause);
stopButton.addEventListener("click", handleStop);
muteButton.addEventListener("click", handleMute);

function handlePlay() {
  if (stopped) {
    audio.currentTime = 0;
    stopped = false;
  }
  audio.play();
}

function handlePause() {
  if (!stopped) {
    audio.pause();
    stopped = true;
  }
}

function handleStop() {
  audio.pause();
  audio.currentTime = 0;
  stopped = true;
}

function handleMute() {
  audio.muted = !audio.muted;
}

function togglePlay() {
  if (stopped === true) {
    audio.play();
    stopped = false;
  } else {
    audio.pause();
    stopped = true;
  }
}

function toggleStop() {
  if (stopped === true) {
    audio.play();
    stopped = false;
  } else {
    audio.pause();
    audio.currentTime = 0;
    stopped = true;
  }
}

function toggleMute() {
  if (audio.muted === true) {
    audio.muted = false;
  } else {
    audio.muted = true;
  }
}

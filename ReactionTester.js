let start = new Date().getTime();

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeShapeAppear() {
  const top = Math.random() * 400;
  const left = Math.random() * 400;
  const width = Math.random() * 200 + 100;

  const shape = document.getElementById("shape");

  shape.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
  shape.style.backgroundColor = getRandomColor();
  shape.style.width = `${width}px`;
  shape.style.height = `${width}px`;
  shape.style.top = `${top}px`;
  shape.style.left = `${left}px`;
  shape.style.display = "block";

  start = new Date().getTime();
}

function appearAfterDelay() {
  setTimeout(makeShapeAppear, Math.random() * 2000);
}

document.getElementById("shape").onclick = function () {
  document.getElementById("shape").style.display = "none";

  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;

  document.getElementById("timeTaken").innerHTML = `${timeTaken}s`;

  appearAfterDelay();
};

appearAfterDelay();

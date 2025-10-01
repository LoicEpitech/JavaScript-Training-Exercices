window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const coordsBox = document.querySelector("footer div:nth-child(2)");
  const parent = canvas.parentElement;

  parent.style.position = "relative";
  canvas.style.position = "absolute";

  let x = 0;
  let y = 0;
  canvas.style.left = x + "px";
  canvas.style.top = y + "px";
  canvas.style.margin = 0;

  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;

  function updateCoords() {
    coordsBox.textContent = `New coordinates => {x:${x}, y:${y}}`;
  }

  canvas.addEventListener("mousedown", (e) => {
    dragging = true;
    const rect = canvas.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    x = e.clientX - parent.getBoundingClientRect().left - offsetX;
    y = e.clientY - parent.getBoundingClientRect().top - offsetY;

    x = Math.max(0, Math.min(x, parent.clientWidth - canvas.offsetWidth));
    y = Math.max(0, Math.min(y, parent.clientHeight - canvas.offsetHeight));

    canvas.style.left = x + "px";
    canvas.style.top = y + "px";

    updateCoords();
  });

  document.addEventListener("mouseup", () => {
    dragging = false;
  });

  updateCoords();
});

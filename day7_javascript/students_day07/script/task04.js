const footer = document.querySelector("footer");
const plusButton = footer.querySelector("button:nth-of-type(1)");
const minusButton = footer.querySelector("button:nth-of-type(2)");
const select = footer.querySelector("select");

let currentFontSize =
  parseFloat(getComputedStyle(document.body).fontSize) || 16;

plusButton.addEventListener("click", () => {
  currentFontSize += 2;
  document.body.style.fontSize = currentFontSize + "px";
});

minusButton.addEventListener("click", () => {
  currentFontSize = Math.max(8, currentFontSize - 2);
  document.body.style.fontSize = currentFontSize + "px";
});

select.addEventListener("change", (event) => {
  document.body.style.backgroundColor = event.target.value || "";
});

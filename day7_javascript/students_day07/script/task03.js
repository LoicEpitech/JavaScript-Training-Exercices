const footer = document.querySelector("footer");
const whiteBlock = footer.querySelector("div");
let last42Chars = "";

document.addEventListener("keydown", (char) => {
  if (char.key.length > 1) return;
  last42Chars += char.key;
  if (last42Chars.length > 42) {
    last42Chars = last42Chars.slice(-42);
  }
  whiteBlock.textContent = last42Chars;
});

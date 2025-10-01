const footer = document.querySelector("footer");
const whiteBlock = footer.querySelector("div");

let nombreClics = 0;

function comptage() {
  nombreClics++;
  console.log(nombreClics);
}

whiteBlock.addEventListener("click", comptage);

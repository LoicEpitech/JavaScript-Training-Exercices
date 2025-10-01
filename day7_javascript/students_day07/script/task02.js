const footer = document.querySelector("footer");
const whiteBlock = footer.querySelector("div");

function dialog() {
  let name = "";
  while (!name) {
    name = prompt("What's your name ?");
  }
  const isConfirmed = confirm(`Are you sure that ${name} is your name ?`);

  if (isConfirmed) {
    alert(`Hello ${name} !`);
    whiteBlock.textContent = `Hello ${name} !`;
  }
}

whiteBlock.addEventListener("click", dialog);

const divDeCreation = document.getElementById("new-input");
const phraseInput = document.getElementById("listItem");
const btnInput = document.getElementById("btn-input");

function addDiv(content) {
  const newdiv = document.createElement("div");
  newdiv.textContent = content;
  divDeCreation.insertAdjacentElement("afterend", newdiv);
}
btnInput.addEventListener("click", () => {
  const newContent = phraseInput.value.trim();
  if (newContent) {
    addDiv(newContent);
    phraseInput.value = "";
  }
});

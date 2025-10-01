document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const textInput = document.getElementById("textInput");
  const typeSelect = document.getElementById("typeSelect");
  const list = document.getElementById("list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = textInput.value.trim();
    const type = typeSelect.value;

    if (text !== "") {
      const li = document.createElement("li");
      li.textContent = text;
      li.classList.add(type);
      list.appendChild(li);

      textInput.value = "";
    }
  });
});

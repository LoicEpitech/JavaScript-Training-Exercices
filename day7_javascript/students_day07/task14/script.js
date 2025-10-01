document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const textInput = document.getElementById("textInput");
  const typeSelect = document.getElementById("typeSelect");
  const list = document.getElementById("list");

  const searchForm = document.getElementById("searchForm");
  const searchSelect = document.getElementById("searchSelect");
  const resetBtn = document.getElementById("resetBtn");

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

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const type = searchSelect.value;
    const searchText =
      document.getElementById("searchInput")?.value.trim().toLowerCase() || "";

    const items = list.querySelectorAll("li");
    items.forEach((li) => {
      const matchesType = type === "all" || li.classList.contains(type);
      const matchesText =
        searchText === "" || li.textContent.toLowerCase().includes(searchText);

      li.style.display = matchesType && matchesText ? "" : "none";
    });
  });

  resetBtn.addEventListener("click", () => {
    searchSelect.value = "all";
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = "";
    const items = list.querySelectorAll("li");
    items.forEach((li) => (li.style.display = ""));
  });
});

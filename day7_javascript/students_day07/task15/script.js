document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const textInput = document.getElementById("textInput");
  const tagInput = document.getElementById("tagInput");
  const typeSelect = document.getElementById("typeSelect");
  const list = document.getElementById("list");

  const searchForm = document.getElementById("searchForm");
  const searchSelect = document.getElementById("searchSelect");
  const searchInput = document.getElementById("searchInput");
  const tagSearchInput = document.getElementById("tagSearchInput");
  const resetBtn = document.getElementById("resetBtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = textInput.value.trim();
    const type = typeSelect.value;
    const tags = tagInput.value
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter(Boolean);

    if (text) {
      const li = document.createElement("li");
      li.textContent = text;
      li.classList.add(type);
      li.dataset.tags = JSON.stringify(tags);
      renderTags(li);

      li.addEventListener("dblclick", () => {
        const newTags = prompt("Add more tags (need ';'):");
        if (newTags) {
          const currentTags = JSON.parse(li.dataset.tags);
          const addedTags = newTags
            .split(",")
            .map((tag) => tag.trim().toLowerCase())
            .filter(Boolean);
          li.dataset.tags = JSON.stringify([
            ...new Set([...currentTags, ...addedTags]),
          ]);
          renderTags(li);
        }
      });

      list.appendChild(li);
      textInput.value = "";
      tagInput.value = "";
    }
  });

  function renderTags(li) {
    const oldSpan = li.querySelectorAll(".tag");
    oldSpan.forEach((s) => s.remove());

    const tags = JSON.parse(li.dataset.tags);
    tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      span.className = "tag";
      span.style.marginLeft = "8px";
      span.style.padding = "2px 6px";
      span.style.backgroundColor = "#eee";
      span.style.borderRadius = "4px";
      li.appendChild(span);
    });
  }

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const textQuery = searchInput.value.trim().toLowerCase();
    const tagQuery = tagSearchInput.value
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter(Boolean);

    const selectedTypes = Array.from(searchSelect.selectedOptions).map(
      (opt) => opt.value
    );

    const items = list.querySelectorAll("li");
    items.forEach((li) => {
      const liText = li.textContent.toLowerCase();
      const liTags = JSON.parse(li.dataset.tags);

      const matchesType =
        selectedTypes.length === 0 ||
        selectedTypes.includes("all") ||
        selectedTypes.includes(li.classList[0]);

      const matchesText = textQuery === "" || liText.includes(textQuery);
      const matchesTags = tagQuery.every((tag) => liTags.includes(tag));

      li.style.display =
        matchesType && matchesText && matchesTags ? "" : "none";
    });
  });

  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    tagSearchInput.value = "";
    Array.from(searchSelect.options).forEach((opt) => (opt.selected = false));

    const items = list.querySelectorAll("li");
    items.forEach((li) => (li.style.display = ""));
  });
});

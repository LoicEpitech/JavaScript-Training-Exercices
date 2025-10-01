document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    p.blue {
      color: blue;
    }
    p.highlighted {
      background-color: yellow;
    }
  `;
  document.head.appendChild(style);

  const paragraphs = document.querySelectorAll("p");

  paragraphs.forEach((p) => {
    p.addEventListener("mouseenter", () => {
      p.classList.add("blue");
    });

    p.addEventListener("mouseleave", () => {
      p.classList.remove("blue");
    });

    p.addEventListener("click", () => {
      p.classList.toggle("highlighted");
    });
  });
});

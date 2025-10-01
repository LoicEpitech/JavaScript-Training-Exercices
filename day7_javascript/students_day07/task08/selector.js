window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a:not([target="_blank"])');

  links.forEach((link) => {
    link.style.opacity = "0.5";
  });
});

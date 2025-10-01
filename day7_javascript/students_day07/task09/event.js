btnparagraphe = document.getElementById("btn-para");

let isCliked = false;
document.addEventListener("click", () => {
  if (isCliked !== true) {
    document.querySelectorAll("p").forEach((element) => {
      element.style.opacity = 0;
      isCliked = true;
    });
  } else {
    document.querySelectorAll("p").forEach((element) => {
      element.style.opacity = 1;
      isCliked = false;
    });
  }
});

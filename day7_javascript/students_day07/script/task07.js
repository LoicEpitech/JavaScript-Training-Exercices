// script/task07.js

function setCookie(name, value, days) {
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000
  ).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

window.addEventListener("DOMContentLoaded", () => {
  const footerDiv = document.querySelector(".exercice footer div");

  const deleteBox = document.createElement("div");
  deleteBox.style.display = "none";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete the cookie";
  deleteBox.appendChild(deleteBtn);
  footerDiv.parentElement.appendChild(deleteBox);

  const link = footerDiv.querySelector("a");

  if (getCookie("acceptsCookies") === "true") {
    footerDiv.style.display = "none";
    deleteBox.style.display = "block";
  }

  link.addEventListener("click", (e) => {
    e.preventDefault();
    setCookie("acceptsCookies", "true", 1);
    footerDiv.style.display = "none";
    deleteBox.style.display = "block";
    console.log(document.cookie);
  });

  deleteBtn.addEventListener("click", () => {
    deleteCookie("acceptsCookies");
    deleteBox.style.display = "none";
    footerDiv.style.display = "block";
    console.log(document.cookie);
  });
});

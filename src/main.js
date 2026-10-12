// mobile nav
const hamburger = document.querySelector("#hamburger-icon");
const cover = document.querySelector(".cover");

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");
});

cover.addEventListener("click", () => {
  document.body.classList.toggle("open");
  console.log("test2");
});

// page changer
import { changePage } from "./model.js";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  changePage(pageID);
}

function initApp() {
  changePage("home");
  window.addEventListener("hashchange", changeRoute);
}

initApp();

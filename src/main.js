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

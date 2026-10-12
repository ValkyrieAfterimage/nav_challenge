import { home } from "../pages/home.js";
import { visit } from "../pages/visit.js";
import { questions } from "../pages/questions.js";
import { contact } from "../pages/contact.js";

export function changePage(pageName) {
  console.log(pageName);
  document.body.classList.remove("open");
  document.querySelector("#app").innerHTML = pages[pageName];
}

const pages = {
  home,
  visit,
  questions,
  contact,
};

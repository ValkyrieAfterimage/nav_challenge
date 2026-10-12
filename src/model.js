import { home } from "../pages/home.js";
import { about } from "../pages/about.js";
export function changePage(pageName) {
  console.log(pageName);

  document.querySelector("#app").innerHTML = pages[pageName];
}

const products = `
  <p>Products</p>
`;
const contact = `
  <p>Contacts</p>
`;
const pages = {
  home,
  about,
  contact,
  products,
};

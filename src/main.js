const hamburger = document.querySelector("#hamburger-icon");
const cover = document.querySelector(".cover");

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");
});

cover.addEventListener("click", () => {
  document.body.classList.toggle("open");
  console.log("test2");
});

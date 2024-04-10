const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

/* document.addEventListener("click", () => {
  hamMenu.classList.remove("ham-menu-active");
  offScreenMenu.classList.remove("ham-menu-active");
});
 */
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

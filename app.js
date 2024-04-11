const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

let toggleMenu = () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
};

let removeMenu = () => {
  hamMenu.classList.remove("active");
  offScreenMenu.classList.remove("active");
};

hamMenu.addEventListener("click", toggleMenu);
offScreenMenu.addEventListener("click", removeMenu);

const paras = document.querySelectorAll(".header-para");
const containerLinks = document.querySelector(".links-container");
const openSidebarButton = document.querySelector(".open-sidebar-button");
const sidebarCheckbox = document.getElementById("sidebar-active");

openSidebarButton.addEventListener("click", () => {
  console.log("successful");
});

paras.forEach((para) => {
  para.addEventListener("click", () => {
    sidebarCheckbox.checked = false;
    console.log("Successful");
  });
});

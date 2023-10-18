const menuBtn = document.querySelector(".nav__hamburger");
const menuItems = document.querySelector(".nav__items-mobile");

const showOrHideMenu = () => {
  menuItems.classList.toggle("active");
};

menuBtn.addEventListener("click", showOrHideMenu);

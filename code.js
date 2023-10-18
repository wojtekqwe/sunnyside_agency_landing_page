const menuBtn = document.querySelector(".nav__hamburger");
const menuItems = document.querySelector(".nav__items-mobile");

const showMobileMenu = () => {
  console.log("show menu");
  menuItems.classList.toggle("active");
};

menuBtn.addEventListener("click", showMobileMenu);

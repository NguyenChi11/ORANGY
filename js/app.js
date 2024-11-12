import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

// header
const phone = document.querySelector(".header__phone");
const address = document.querySelector(".header__address");
const iconArrows = document.querySelectorAll(".icon__arrow");

iconArrows.forEach((iconArrow) => {
  iconArrow.addEventListener("click", () => {
    phone.classList.toggle("turn__off");
    address.classList.toggle("turn__off");
  });
});

// product

function selectItem(element) {
  // Loại bỏ class 'active' từ các mục khác
  const items = document.querySelectorAll(".product__menu--title");
  items.forEach((item) => item.classList.remove("under--action"));

  // Thêm class 'active' vào mục được click
  element.classList.add("under--action");
}

//slide

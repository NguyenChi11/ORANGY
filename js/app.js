const products = [
  {
    id: 1,
    image: "../images/product_1.jpg",
    category: "SOFA",
    product__name: "Oda ottoman",
    product__price: " $699.00",
    data_category: "seating",
  },
  {
    id: 2,
    image: "../images/product_2.jpg",
    category: "DINING CHAR",
    product__name: "Oda ottoman",
    product__price: " $699.00",
    product__selling: "Selling fast",
    product__new: "New",
    data_category: "table",
  },
  {
    id: 3,
    image: "../images/product_3.jpg",
    category: "DINING CHAR",
    product__name: "Oda ottoman",
    product__price: " $699.00",
    data_category: "seating",
  },
  {
    id: 4,
    image: "../images/product_4.jpg",
    category: "SOFA",
    product__name: "Oda ottoman",
    product__price: " $699.00",
    data_category: "storage",
  },
  {
    id: 5,
    image: "../images/product_5.jpg",
    category: "SOFA",
    product__name: "Oda ottoman",
    product__price: " $699.00",
    data_category: "seating",
  },
  {
    id: 6,
    image: "../images/product_6.jpg",
    category: "SOFA",
    product__name: "Oda ottoman",
    product__price: " $699.00",
    product__voucher: "-30%",
    data_category: "seating",
  },
];

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

// hàm sản phẩm 6 ảnh

function createProductCard(product) {
  return `
    <div class="productions">
      <img class="product__image" src="${product.image}" alt="">
      <div class="category">${product.category}</div>
      <div class="product__name">${product.product__name}</div>
      <div class="product__price"> ${product.product__price}</div>
    </div>
  `;
}
// phần position
// <div class="voucher">
//   <p class="voucher__sell">${product.product__selling}</p>
//   <p class="product__voucher">${product.product__voucher}</p>
//   <p class="voucher__new">${product.product__new}</p>
// </div>

const productList = document.getElementById("product__container");
productList.innerHTML = products.map(createProductCard).join("");

const productions = document.querySelectorAll(".productions");
productions.forEach((item, index) => {
  if (index === 5) {
    item.classList.add("productions__gird");
  }
});

const listCategories = document.querySelectorAll(".product__menu--title");
const productContainer = document.getElementById("product__container");

listCategories.forEach((item) => {
  item.addEventListener("click", function () {
    const category = this.getAttribute("data-category");
    const filteredProducts = products.filter(
      (product) => product.data_category === category
    );

    productContainer.innerHTML = filteredProducts
      .map(
        (product) => `
    <div class="productions">
      <img class="product__image" src="${product.image}" alt="">
      <div class="category">${product.category}</div>
      <div class="product__name">${product.product__name}</div>
      <div class="product__price"> ${product.product__price}</div>
    </div>
  `
      )
      .join("");
  });
});

//phần splide
function createSplideProduct(product) {
  return `
    <li class="splide__slide">  
      <div class="product__slider">
      <img class="slider__image" src="${product.image}" alt="">
      <div class="category">${product.category}</div>
      <div class="slider__name">${product.product__name}</div>
      <div class="slider__price">${product.product__price}</div>
      </div>
    </li>
  `;
}
const splideProduct = document.getElementById("splide__list");
splideProduct.innerHTML = products.map(createSplideProduct).join("");

// product

// const voucher = document.querySelectorAll(".voucher");
// voucher.forEach((item) => {
//   const selling = item.querySelector(".voucher__sell");
//   const productVoucher = item.querySelector(".product__voucher");
//   const voucherNew = item.querySelector(".voucher__new");

// console.log(selling);
// if (selling.textContent.trim() === "") {
//   selling.style.display = "none";
// }
// });

//slide
// const mediaQuery = window.innerWidth;
// var splide = new Splide(".splide", {
//   perPage: 4,
//   rewind: true,
//   gap: 10,
// });

width = window.innerWidth;

var splide = new Splide(".splide", {
  perPage: 4,
  rewind: true,
  gap: 10,
});

var splide_1 = new Splide(".splide", {
  perPage: 1.5,
  rewind: true,
  gap: 10,
});

if (width < 739) {
  splide_1.mount();
} else {
  splide.mount();
}

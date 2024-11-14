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

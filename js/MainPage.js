var newbook = document.getElementById("newbook");
var bestseller = document.getElementById("bestseller");
var hotbook = document.getElementById("hotbook");
newbook.addEventListener("click", function () {
  newbook.style.borderBottom = "2px solid red";
  bestseller.style.borderBottom = "none";
  hotbook.style.borderBottom = "none";
});
bestseller.addEventListener("click", function () {
  bestseller.style.borderBottom = "solid 2px red";
  newbook.style.borderBottom = "none";
  hotbook.style.borderBottom = "none";
});
hotbook.addEventListener("click", function () {
  bestseller.style.borderBottom = "none";
  newbook.style.borderBottom = "none";
  hotbook.style.borderBottom = "solid 2px red";
});
document.addEventListener("DOMContentLoaded", function () {
  newbook.style.borderBottom = "2px solid red";
  bestseller.style.borderBottom = "none";
  hotbook.style.borderBottom = "none";
});
var btnAll = document.getElementById("searchBooks");
btnAll.addEventListener("click", function (e) {
  e.preventDefault();
  const keyword = document
    .getElementById("searchAll")
    .value.trim()
    .toLowerCase();
  const cards = document.querySelectorAll(".card_Main");
  cards.forEach((card) => {
    const title = card.querySelector(".card-text").innerText.toLowerCase();
    if (!keyword || title.includes(keyword)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
let priceMoney = 0;
//Thay đổi thông tin khi hiện thị form
function onformHtml(imageHtml, name, price) {
  const container = document.getElementById("formadd");
  container.classList.add("show");
  document.getElementById("formpicture").src = imageHtml;
  document.getElementById("title").innerText = name;
  document.getElementById("price").innerText = "Giá: " + price + "VNĐ";

  priceMoney = parseFloat(price);
  updateTotal();
}
//Cập nhật lại chi phí khi thay đổi số lượng
function updateTotal() {
  let n = document.getElementById("number").value;
  if (n == 0 || n == null) {
    document.getElementById("sum").value = 0;
  } else {
    let sum = priceMoney * n;
    document.getElementById("sum").value = sum;
  }
}
let category = document.getElementById("select");
let quantity = document.getElementById("number");
let total = document.getElementById("sum");
let add = document.getElementById("addNow");
var found = false;
//Lưu vào localStorage
add.addEventListener("click", function (e) {
  e.preventDefault();
  const books = JSON.parse(localStorage.getItem("books") || "[]");
  books.forEach((item) => {
    if (
      item.name === document.getElementById("title").innerText &&
      item.category === category.value
    ) {
      const priceText = document.getElementById("price").innerText;
      const priceValue = parseFloat(priceText.replace(/[^\d]/g, ""));
      item.quantity++;
      item.total = parseFloat(
        (priceValue * parseInt(item.quantity)).toFixed(2)
      );
      alert("Đơn hàng đã được thêm số lượng vào giỏ hàng");
      found = true;
    }
  });
  if (!found) {
    const book = {
      name: document.getElementById("title").innerText,
      price: document.getElementById("price").innerText,
      category: category.value,
      quantity: quantity.value,
      total: total.value,
    };
    books.push(book);
    alert("Thêm vào giỏ hàng thành công");
  }

  localStorage.setItem("books", JSON.stringify(books));
  location.reload();
});

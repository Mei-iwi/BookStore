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
//Hiện thị tất cả sách nổi bật
var all = document.getElementById("all");
all.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll(".card-item").forEach((card) => {
    card.style.display = "block";
  });
});
//Lọc sách kinh tế
var kt = document.getElementById("kt");
kt.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll(".card-item").forEach((card) => {
    card.style.display = "block";
  });
  document.querySelectorAll(".card-2, .card-3, .card-4").forEach((card) => {
    card.style.display = "none";
  });
});
//Lọc sấch kĩ năng sống
var kn = document.getElementById("kn");
kn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll(".card-item").forEach((card) => {
    card.style.display = "block";
  });
  document.querySelectorAll(".card-1, .card-3, .card-4").forEach((card) => {
    card.style.display = "none";
  });
});
//Lọc sách ngoại ngữ
var nn = document.getElementById("nn");
nn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll(".card-item").forEach((card) => {
    card.style.display = "block";
  });
  document.querySelectorAll(".card-1, .card-2, .card-4").forEach((card) => {
    card.style.display = "none";
  });
});
//Lọc sách thiếu nhi
var tnhi = document.getElementById("tnhi");
tnhi.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll(".card-item").forEach((card) => {
    card.style.display = "block";
  });
  document.querySelectorAll(".card-1, .card-2, .card-3").forEach((card) => {
    card.style.display = "none";
  });
});
//Tìm kiếm
var btnAll = document.getElementById("searchBooks");
btnAll.addEventListener("click", function (e) {
  e.preventDefault();
  const keyword = document.getElementById("searchAll").value.toLowerCase();
  const cards = document.querySelectorAll(".card-item");
  cards.forEach((card) => {
    const title = card.querySelector(".card-text").innerText.toLowerCase();
    if (title.includes(keyword)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
//Tạo hiệu úng chuyển động danh mục tài liệu
window.onload = function () {
  document.getElementById("transitionItems").classList.add("trans");
  setTimeout(() => {
    document.getElementById("transitionItems").classList.remove("trans");
    document.getElementById("transitionItems").classList.add("trasReturn");
    document.querySelectorAll(".card-item").forEach((item) => {
      item.classList.add("card-item-trans");
    });
  }, 500);
  setTimeout(() => {
    document.getElementById("newTrans").style.opacity = "0.75";
    document.getElementById("newTrans").style.borderRadius = "5px";
    document.getElementById("transitionItems").classList.remove("new");
    document.getElementById("transitionItems").style.borderRadius =
      "5px 500px 5px 0px";
    const element = document.getElementById("transitionItems");
    element.style.padding = "10px 30px 10px 15px";
    element.style.fontWeight = "bold";
    element.style.fontSize = "20px";
    element.style.width = "30%";
    element.style.position = "relative";
  }, 1500);
};
//Lưu tên của sách phục vụ cho tìm kiếm trong mảng ở trang chi tiết
function Detail(name) {
  localStorage.removeItem("Detail");
  const book = { name: name };
  localStorage.setItem("Detail", JSON.stringify(book));
  location.href = "./Detail.html";
}

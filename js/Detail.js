//Tạo hiệu ứng trên ảnh và chuyển ảnh khi ấn vào ảnh
window.onload = function () {
  document.getElementById("book1").style.border = "solid 1px red";
};
document.getElementById("book1").addEventListener("click", function () {
  document.getElementById("book1").style.border = "solid 1px red";
  var linkImage = document.getElementById("book1").src;
  console.log(linkImage);
  document.getElementById("book2").style.border = "none";
  document.getElementById("book3").style.border = "none";
  document.getElementById("book4").style.border = "none";
  document.getElementById("bookMain").src = linkImage;
});
document.getElementById("book2").addEventListener("click", function () {
  document.getElementById("book1").style.border = "none";
  document.getElementById("book2").style.border = "solid 1px red";
  var linkImage = document.getElementById("book2").src;
  document.getElementById("book3").style.border = "none";
  document.getElementById("book4").style.border = "none";
  document.getElementById("bookMain").src = linkImage;
});
document.getElementById("book3").addEventListener("click", function () {
  document.getElementById("book1").style.border = "none";
  document.getElementById("book2").style.border = "none";
  document.getElementById("book3").style.border = "solid 1px red";
  var linkImage = document.getElementById("book3").src;
  document.getElementById("book4").style.border = "none";
  document.getElementById("bookMain").src = linkImage;
});
document.getElementById("book4").addEventListener("click", function () {
  document.getElementById("book1").style.border = "none";
  document.getElementById("book2").style.border = "none";
  document.getElementById("book3").style.border = "none";
  document.getElementById("book4").style.border = "solid 1px red";
  var linkImage = document.getElementById("book4").src;
  document.getElementById("bookMain").src = linkImage;
});
//Hàm tăng và giẩm số trong 1 input
var decrease = document.getElementById("decrease");
var increase = document.getElementById("increase");
var quantity = document.getElementById("quantity");
//Hàm giảm
decrease.addEventListener("click", function () {
  if (quantity.value <= 1) {
    return;
  }
  quantity.value = parseInt(quantity.value) - 1;
});
//Hàm tăng
increase.addEventListener("click", function () {
  quantity.value = parseInt(quantity.value) + 1;
});
let priceMoney = 0;
//Thay đổi thông tin khi hiện thị form
function onformHtml() {
  const container = document.getElementById("formadd");
  document.getElementById("formadd3").classList.remove("show");
  container.classList.add("show");
  document.getElementById("formpicture").src =
    document.getElementById("bookMain").src;
  document.getElementById("titleForm").innerText =
    document.getElementById("title").innerText;
  document.getElementById("priceForm").innerText =
    "Giá: " + document.getElementById("price").innerText;
  document.getElementById("number").value =
    document.getElementById("quantity").value;
  priceMoney = parseFloat(
    document
      .getElementById("price")
      .innerText.replace(/\./g, "")
      .replace(/[^\d]/g, "")
  );
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
let total = document.getElementById("sum");
let add = document.getElementById("addNow");
//Lưu vào localStorage
var found = false;
add.addEventListener("click", function (e) {
  e.preventDefault();
  const books = JSON.parse(localStorage.getItem("books") || "[]");
  //Cộng dồn nếu đã tồn tại
  books.forEach((item) => {
    if (
      item.name === document.getElementById("titleForm").innerText &&
      item.category === category.value
    ) {
      const priceText = document.getElementById("priceForm").innerText;
      const priceValue = parseFloat(priceText.replace(/[^\d]/g, ""));
      item.quantity++;
      item.total = parseFloat(
        (priceValue * parseInt(item.quantity)).toFixed(2)
      );
      alert("Đơn hàng đã được thêm số lượng vào giỏ hàng");
      found = true;
    }
  });
  //Thêm mới
  if (!found) {
    const book = {
      name: document.getElementById("titleForm").innerText,
      price: document.getElementById("priceForm").innerText,
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

//Mở form đọc tài liệu online
function onform3() {
  const container = document.getElementById("formadd3");
  container.classList.add("show");
  document.getElementById("formadd").classList.remove("show");
}
//Đóng form đọc tài liệu online
document.getElementById("close").addEventListener("click", function (e) {
  document.getElementById("formadd3").classList.remove("show");
});
//Mở thông báo thuê thành công và chuyển sang trang đọc sách online
document.getElementById("Borrow").addEventListener("click", function () {
  alert("Thuê thành công");
  location.href = "./ReadOnline.html";
});

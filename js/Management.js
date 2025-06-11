//Mở form nhập liệu
function onform() {
  const container = document.getElementById("formadd");
  container.classList.add("show");
}
//Đóng form nhập liệu
function closeForm() {
  const container = document.getElementById("formadd");
  container.classList.remove("show");
}

const btn = document.getElementById("dropdownMenuButton");
const menu = document.querySelector(".slide-menu");
//Show menu dọc
btn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

//Đóng menu dọc
window.addEventListener("click", function (e) {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("show");
  }
});
//LocalStorage
//Lấy dữ liệu
let name = document.getElementById("name");
let login = document.getElementById("nameLogin");
let email = document.getElementById("Email");
let sell = document.getElementById("quantitysell");
let read = document.getElementById("quantityread");
let btnAdd = document.getElementById("btnAdd");
//Thêm dữ liệu
btnAdd.addEventListener("click", function (e) {
  e.preventDefault();
  const err = [];
  //Bắt lỗi
  if (!name.value.trim()) {
    err.push("Họ tên khách hàng không được để trống\n");
  }
  if (!login.value.trim()) {
    err.push("Tên đăng nhập không được để trống\n");
  }
  if (!email.value.trim()) {
    err.push("Email không được để trống\n");
  }
  if (err.length > 0) {
    alert(err.join(""));
    return;
  }
  const customer = {
    name: name.value,
    login: login.value,
    email: email.value,
    sell: sell.value,
    read: read.value,
  };
  let customers = JSON.parse(localStorage.getItem("customers") || "[]");
  customers.push(customer);
  localStorage.setItem("customers", JSON.stringify(customers));
  location.reload();
});
//Hiện thị dữ liệu khi load trang
window.onload = function () {
  renderTable();
};
//Hàm hiện thị dữ liệu bảng
function renderTable() {
  var getCustomer = JSON.parse(localStorage.getItem("customers") || "[]");
  const tbody = document.querySelector("#customerTable tbody");
  getCustomer.forEach((c, i) => {
    const row = document.createElement("tr");
    row.setAttribute("data-index", i);
    row.innerHTML = `
    <td>${i + 1}</td>
      <td class="editable" data-field="name">${c.name}</td>
      <td class="editable" data-field="login">${c.login}</td>
      <td class="editable" data-field="email">${c.email}</td>
      <td class="editable" data-field="sell">${c.sell}</td>
      <td class="editable" data-field="read">${c.read}</td>
      <td>
        <button class="edit-btn changebtn"><img id="change" src="../Images/change.jpg" alt = "Sửa" /></button>
        </button><button id="delete" class="delete-btn" class = "delete" style="background-color:red;color: white;">Xóa</button></td>
      </td>
    `;
    tbody.appendChild(row);
  });
  //Gọi hàm chỉnh sửa
  addEventListener();
  //Gọi hàm xóa
  setupDeleteButtons();
}
//Hàm xóa
function deleteCustomer(index) {
  let customers = JSON.parse(localStorage.getItem("customers") || "[]");
  customers.splice(index, 1);
  localStorage.setItem("customers", JSON.stringify(customers));
}
//Hàm tìm giá trị để xóa
function setupDeleteButtons() {
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      deleteCustomer(index);
      location.reload();
    });
  });
}
//Hàm cập nhật dữ liệu
function addEventListener() {
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const isEditing = this.getAttribute("data-editing") === "true";
      const row = this.closest("tr");
      const index = parseInt(row.getAttribute("data-index"));
      const customers = JSON.parse(localStorage.getItem("customers") || "[]");

      if (!isEditing) {
        row.querySelectorAll(".editable").forEach((td) => {
          const value = td.textContent.trim();
          const field = td.getAttribute("data-field");
          td.innerHTML = `<input type= "text" name ="${field}" class ="${field}" value = "${value}"/>`;
        });
        this.setAttribute("data-editing", "true");
        this.querySelector("img").src = "../Images/save.png";
        this.querySelector("img").alt = "Lưu";
      } else {
        row.querySelectorAll("input").forEach((input) => {
          const field = input.name;
          customers[index][field] = input.value;
        });
        localStorage.setItem("customers", JSON.stringify(customers));
        this.setAttribute("data-editing", "false");
        this.querySelector("img").src = "../Images/change.jpg";
        this.querySelector("img").alt = "Sửa";
        location.reload();
      }
    });
  });
}
//Tìm kiếm
let s = document.getElementById("search");
btnSearch = document.getElementById("btnsearch");
btnSearch.addEventListener("click", function (e) {
  e.preventDefault();
  const keyword = s.value.toLowerCase().trim();
  const customers = JSON.parse(localStorage.getItem("customers") || "[]");
  //Lọc dữ liệu theo điều kiện tìm
  const result = customers.filter(
    (i) =>
      i.name.toLowerCase().includes(keyword) ||
      i.login.toLowerCase().includes(keyword) ||
      i.email.toLowerCase().includes(keyword)
  );
  const tbody = document.querySelector("#customerTable tbody");
  //Xóa dữ liệu cũ
  tbody.innerHTML = "";
  //Hiện thị dữ liệu mới
  result.forEach((customer, index) => {
    const row = document.createElement("tr");
    row.setAttribute("data-index", index);
    row.innerHTML = `
    <td >${index + 1}</td>
    <td class="editable" data-field="name">${customer.name}</td>
    <td class="editable" data-field="login">${customer.login}</td>
    <td class="editable" data-field="email">${customer.email}</td>
    <td class="editable" data-field="sell">${customer.sell}</td>
    <td class="editable" data-field="read">${customer.read}</td>
    <td>
        <button class="edit-btn changebtn"><img id="change" src="../Images/change.jpg" alt = "Sửa" /></button> 
        <button id="delete" class="delete-btn" class = "delete" style="background-color:red;color: white;">Xóa</button></td>
    </td>
    `;
    tbody.appendChild(row);
  });
  //Gọi hàm chỉnh sửa
  addEventListener();
  //Gọi hàm xóa
  setupDeleteButtons();
});

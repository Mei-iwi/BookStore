const order = JSON.parse(localStorage.getItem("books")) || []; // Lấy dữ liệu giỏ hàng
const orderTable = document
  .getElementById("booksTable")
  .getElementsByTagName("tbody")[0];
let selectedQuantity = 0; // Khởi tạo biến đếm số lượng đơn hàng

// Giả định danh sách sản phẩm có sẵn trong localStorage
const allProducts = JSON.parse(localStorage.getItem("products")) || [];

// Tạo hàng cho giỏ hàng
order.forEach((book, index) => {
  const row = orderTable.insertRow();
  row.innerHTML = `
        <td><input type="checkbox" class="item-checkbox" data-index="${index}"></td>
        <td>${book.name}</td>
        <td>${book.category}</td>
        <td>${book.price}</td>
        <td>
            <input type="number" value="${
              book.quantity || 1
            }" min="1" class="quantity-input text-center w-25" data-index="${index}">
        </td>
        <td class="total-price" data-index="${index}">${book.total} VNĐ</td>
        <td><button class="btn btn-outline-danger delete-btn" data-index="${index}">Xóa</button></td>
    `;
});

// Xử lý sự kiện xóa sản phẩm
document.querySelectorAll(".delete-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const index = this.getAttribute("data-index");
    order.splice(index, 1); // Xóa sản phẩm khỏi mảng order
    localStorage.setItem("books", JSON.stringify(order)); // Cập nhật localStorage
    location.reload(); // Tải lại trang để cập nhật giỏ hàng
  });
});

// Cập nhật tổng tiền khi thay đổi số lượng
document.querySelectorAll(".quantity-input").forEach((input) => {
  input.addEventListener("input", function () {
    const index = this.getAttribute("data-index");
    const quantity = parseInt(this.value) || 1; // Lấy số lượng
    const price = order[index].price; // Lấy giá sản phẩm
    const totalPrice = price.replace(/[^\d]/g, "") * quantity; // Tính tổng cho sản phẩm
    order[index].total = totalPrice; // Cập nhật tổng cho sản phẩm
    order[index].quantity = quantity; // Cập nhật số lượng trong order
    document.querySelector(`.total-price[data-index="${index}"]`).innerText =
      totalPrice.toLocaleString() + " VNĐ";
    // Cập nhật tổng tiền cho hàng này
    localStorage.setItem("books", JSON.stringify(order)); // Cập nhật localStorage
    updateTotal(); // Cập nhật tổng tiền giỏ hàng
  });
});

// Hàm tính lại tổng tiền
function updateTotal() {
  let total = 0;
  document.querySelectorAll(".item-checkbox:checked").forEach((checkbox) => {
    const index = checkbox.getAttribute("data-index");
    const quantity =
      parseInt(
        document.querySelector(`.quantity-input[data-index="${index}"]`).value
      ) || 1;
    total += order[index].price.replace(/[^\d]/g, "") * quantity; // Tính tổng cho sản phẩm được chọn
  });
  document.getElementById("totalDisplay").innerText = total + " VNĐ"; // Cập nhật tổng tiền
  localStorage.setItem("totalAmount", total); // Cập nhật tổng tiền vào localStorage
}

// Lắng nghe sự kiện cho checkbox "Chọn tất cả"
document.getElementById("selectAll").addEventListener("change", function () {
  const isChecked = this.checked;
  document.querySelectorAll(".item-checkbox").forEach((cb) => {
    cb.checked = isChecked;
  });
  updateTotal(); // Cập nhật tổng tiền
});

// Cập nhật số lượng đơn hàng đã chọn
function updateSelectedQuantity() {
  const checkboxes = document.querySelectorAll(".item-checkbox:checked");
  selectedQuantity = checkboxes.length;
  document.getElementById("selectedQuantity").innerText = selectedQuantity;
}

// Lắng nghe sự kiện thay đổi cho checkbox
document.querySelectorAll(".item-checkbox").forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    updateTotal(); // Cập nhật tổng tiền khi checkbox thay đổi
    updateSelectedQuantity(); // Cập nhật số lượng sản phẩm đã chọn
  });
});

// Hiển thị sản phẩm gợi ý không có trong giỏ hàng
const suggestionsContainer = document.getElementById("suggestions");
allProducts.forEach((product) => {
  const isInCart = order.some((book) => book.name === product.name);
  if (!isInCart) {
    const suggestionItem = document.createElement("div");
    suggestionItem.className = "suggestion-item";
    suggestionItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h5>${product.name}</h5>
            <p>Giá: ${product.price.toLocaleString()}</p>
            <button class="btn btn-primary">Thêm vào giỏ</button>
        `;
    suggestionsContainer.appendChild(suggestionItem);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const buyNow = document.getElementById("buyNow");

  // Kiểm tra tồn tại trước khi gán sự kiện
  if (buyNow) {
    buyNow.addEventListener("click", function () {
      const selectedItems = order.filter((item, index) => {
        const checkbox = document.querySelector(
          `.item-checkbox[data-index="${index}"]`
        );
        return checkbox && checkbox.checked;
      });

      if (selectedItems.length === 0) {
        alert("Vui lòng chọn ít nhất một sản phẩm để mua.");
        return;
      }

      localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
      location.href = "thanh_toan.html";
    });
  } else {
    console.warn("#buyNow button không tìm thấy trong DOM.");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var old = JSON.parse(localStorage.getItem("orderHistory") || "[]");
  const body = document.querySelector("#oldTable tbody");
  old.forEach((item, index) => {
    var row = document.createElement("tr");
    row.innerHTML = `
    <td>${index + 1}</td>
    <td>${item.name}</td>
    <td>${item.category}</td>
    <td>${item.price}</td>
    <td>${item.quantity}</td>
    <td>${parseFloat(item.total).toLocaleString()} VNĐ</td>
    <td>${item.date}</td>
    <td>${item.status}</td>
    `;
    body.appendChild(row);
  });
});

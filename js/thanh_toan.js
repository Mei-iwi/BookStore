// Lấy giỏ hàng từ localStorage
const order = JSON.parse(localStorage.getItem("selectedItems")) || [];
const productList = document.getElementById("productList");
let totalAmount = 0;

// Hiển thị thông tin sản phẩm và tính tổng tiền
order.forEach((books) => {
  const productItem = document.createElement("div");
  productItem.className = "product-books";
  productItem.innerHTML = `
                <h5>${books.name}</h5>
                <p>${books.price.toLocaleString()}</p>
                <p>Số Lượng: ${books.quantity}</p>
            `;
  productList.appendChild(productItem);

  // Tính tổng tiền
  totalAmount += parseFloat(books.price.replace(/[^\d]/g, "")) * books.quantity;
});
const now = new Date();
const dateTime = now.toLocaleString("vi-VN");

// Cập nhật tổng tiền cần thanh toán
document.getElementById("totalAmount").innerText =
  totalAmount.toLocaleString() + " VNĐ";

// Xử lý sự kiện gửi biểu mẫu
document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Kiểm tra các trường không được để trống
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const paymentMethod = document.getElementById("paymentMethod").value;

    if (!fullName || !email || !phone || !address || !paymentMethod) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    let timeLeft = 3;
    const countdownElement = document.getElementById("countdown");

    const countdown = setInterval(() => {
      timeLeft--;
      countdownElement.innerText = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(countdown);
        localStorage.removeItem("selectedItems");
        location.href = "./gio_hang.html";
      }
    }, 1000);
    // Cuộn lên đầu trang
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("successMessage").style.display = "block";
    // Lấy mảng từ localStorage
    var items = JSON.parse(localStorage.getItem("selectedItems") || "[]");

    // Thêm trạng thái cho mỗi sản phẩm mới
    items.forEach((item) => {
      item.status = "Chờ giao hàng";
    });
    items.forEach((item) => {
      item.date = dateTime;
    });
    // Lấy danh sách đơn hàng cũ từ localStorage
    var oldOrders = JSON.parse(localStorage.getItem("orderHistory") || "[]");

    // Gộp đơn hàng cũ và mới
    var updatedOrders = oldOrders.concat(items);

    // Lưu lại vào localStorage
    localStorage.setItem("orderHistory", JSON.stringify(updatedOrders));

    setTimeout(() => {
      location.href = "./gio_hang.html";
      localStorage.removeItem("selectedItems");
    }, 3000);
  });

document.getElementById("cancel").addEventListener("click", function (e) {
  e.preventDefault();
  if (confirm("Bạn có chắc muốn hủy")) {
    localStorage.removeItem("selectedItems");
    alert("Đã hủy");
    location.href = "./gio_hang.html";
  }
});

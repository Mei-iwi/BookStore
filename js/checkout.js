const form = document.getElementById('checkout-form');
  const orderSummary = document.getElementById('order-summary');
  const orderItems = document.getElementById('order-items');
  const orderTotal = document.getElementById('order-total');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Giỏ hàng trống!");
      return;
    }
//duyệt giỏ hàng để tính tổng và ds đơn hàng
    let total = 0;
    orderItems.innerHTML = "";

    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
//hiển thị đơn thành công và xoá giỏ hàng
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between";
      li.textContent = `${item.title} x${item.quantity}`;
      const span = document.createElement("span");
      span.textContent = itemTotal.toLocaleString() + "₫";
      li.appendChild(span);
      orderItems.appendChild(li);
    });

    orderTotal.textContent = total.toLocaleString() + "₫";
    orderSummary.classList.remove("d-none");

    localStorage.removeItem("cart");
    form.reset();
    form.classList.remove("was-validated");
  });
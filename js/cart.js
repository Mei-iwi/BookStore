// Thêm dữ liệu sách vào giỏ hàng
  function addToCart(button) {
    const title = button.dataset.title;
    const price = parseInt(button.dataset.price);
    const image = button.dataset.image;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingBook = cart.find(item => item.title === title);
    if (existingBook) {
      existingBook.quantity += 1;
    } else {
      cart.push({ title, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(` Đã thêm "${title}" vào giỏ hàng!`);
  }
//
  function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const body = document.getElementById("cart-body");
    const totalEl = document.getElementById("cart-total");
    let total = 0;
//Duyệt từng sp trong giỏ để tính tổng tiền
    body.innerHTML = "";
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><img src="${item.image}" alt="${item.title}" width="60"></td>
        <td>${item.title}</td>
        <td>${item.price.toLocaleString()}₫</td>
        <td>${item.quantity}</td>
        <td>${itemTotal.toLocaleString()}₫</td>
        <td>
          <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">
            X
          </button>
        </td>
      `;
      body.appendChild(row);
    });
//Tổng tiền
    totalEl.textContent = total.toLocaleString() + "₫";
  }
// Hàm xoá sách muốn bỏ khỏi giỏ hàng và câpk nhật lại giỏ hàng
  function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  window.onload = renderCart;
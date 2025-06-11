//xử lí sự kiện submit
const form = document.getElementById("register-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
//Lấy giá trị của người dùng nhập
      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim().toLowerCase();
      const password = document.getElementById("regPassword").value;
//Truongwf hợp có 1 trong 3 thông tin để trống
      if (!name || !email || !password) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
      }
// Lấy user từ local storage
      let users = JSON.parse(localStorage.getItem("users")) || [];

      const existing = users.find(user => user.email === email);
      //Trùng email
      if (existing) {
        alert("Email đã được đăng ký trước đó.");
        return;
      }
//Không trùng email, lưu người dùng mới 
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
//Đăng kí thành công, về lại trang đăng nhập
      alert("Đăng ký thành công!");
      form.reset();
      window.location.href = "login.html";
    });
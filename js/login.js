const form = document.getElementById("login-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Email và mật khẩu từ ngươif dùng nhập
  const email = document
    .getElementById("loginEmail")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("loginPassword").value;
  // Lấy user từ  local storage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  // Trường hợp email ng dùng nhập ko được tìm thấy
  const user = users.find((u) => u.email === email);
  if (!user) {
    alert("Email chưa được đăng ký!");
    return;
  }
  // Email đúng nhưng sai mk
  if (user.password !== password) {
    alert("Sai mật khẩu!");
    return;
  }
  // Đúng email và mk
  alert("Đăng nhập thành công!");
  localStorage.setItem("userLogin", user.email);
  localStorage.setItem("currentUser", JSON.stringify(user));
  // Chuyển về trang chủ
  window.location.href = "../index.html";
});

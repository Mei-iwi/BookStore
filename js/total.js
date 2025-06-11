function onform3() {
  const container = document.getElementById("formadd3");
  container.classList.add("show");
}
//Đóng form đọc tài liệu online
document.getElementById("close").addEventListener("click", function (e) {
  document.getElementById("formadd3").classList.remove("show");
});

//Lấy dữ liệu
var nameSupport = document.getElementById("name");
var EmailSupport = document.getElementById("Email");
var phoneSupport = document.getElementById("tel");
var selSupport = document.getElementById("choose");
var ErrorName = document.getElementById("errorName");
var ErrorEmail = document.getElementById("errorMail");
var ErrorPhone = document.getElementById("errorPhone");
var ErrorSelect = document.getElementById("errorselect");
document.addEventListener("DOMContentLoaded", function () {
  var error = document.getElementsByClassName("error");
  for (var i = 0; i < error.length; i++) {
    error[i].style.display = "none";
  }
});
//Kiểm tra là chữ số
function isNumber(str) {
  return /^\d+$/.test(str);
}
var send = document.getElementById("submitNow");
var check = false;
send.addEventListener("click", function (e) {
  e.preventDefault();
  check = false;
  //Kiểm tra tên
  if (nameSupport.value.trim() === "") {
    ErrorName.innerText = "Tên không được để trống";
    ErrorName.style.display = "block";
    check = true;
  } else {
    ErrorName.innerText = "";
    ErrorName.style.display = "none";
  }
  //Kiểm tra Email
  if (EmailSupport.value.trim() === "") {
    ErrorEmail.innerText = "Email không được để trống";
    ErrorEmail.style.display = "block";
    check = true;
  } else {
    ErrorEmail.innerText = "";
    ErrorEmail.style.display = "none";
  }
  //Kiểm tra số điện thoại
  if (phoneSupport.value.trim() === "") {
    ErrorPhone.innerText = "Số điện thoại không được để trống";
    ErrorPhone.style.display = "block";
    check = true;
  } else if (
    phoneSupport.value.trim().length != 10 ||
    !isNumber(phoneSupport.value.trim())
  ) {
    ErrorPhone.innerText = "Số điện thoại phải gồm 10 chữ số";
    ErrorPhone.style.display = "block";
    check = true;
  } else {
    ErrorPhone.innerText = "";
    ErrorPhone.style.display = "none";
  }
  //Kiểm tra select
  if (selSupport.value.trim() === "") {
    ErrorSelect.innerText = "Cho biết lí do";
    ErrorSelect.style.display = "block";
    check = true;
  } else {
    ErrorSelect.innerText = "";
    ErrorSelect.style.display = "none";
  }
  if (!check) {
    nameSupport.value = "";
    EmailSupport.value = "";
    selSupport.value = "";
    phoneSupport.value = "";
    alert("Đã gửi phản hồi từ khách hàng");
  }
});
//Bỏ
var infoPack = document.getElementById("Pack");
var PackToday = document.getElementById("packToday");
infoPack.addEventListener("click", function (e) {
  e.preventDefault();
  PackToday.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => {
    PackToday.style.backgroundColor = "lightblue";
    PackToday.style.border = "3px solid red";
  }, 3000);
});

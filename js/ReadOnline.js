//Chức năng chỉnh màu nền và ẩn khung
var light = document.getElementById("light");
var activeLight = false;
light.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("focus").classList.toggle("focus");
  document.body.classList.toggle("reading-mode");
  activeLight = !activeLight;
  light.style.opacity = activeLight ? "0.5" : "1";
  console.log(light);
});
//Chức năng điều chỉnh kích thước (tăng) chữ trong nội dung đọc
const fontsize = document.getElementById("content");
var activePlus = false;
var activeMinus = false;
var plus = document.getElementById("plus");
plus.addEventListener("click", function (e) {
  e.preventDefault();
  const size = window.getComputedStyle(fontsize).fontSize;

  let sizeIncrease = parseFloat(size);
  sizeIncrease += 5;
  fontsize.style.fontSize = sizeIncrease + "px";
  activePlus = !activePlus;
  plus.style.opacity = activePlus ? "0.5" : "1";
  setTimeout(() => {
    activePlus = !activePlus;
    plus.style.opacity = "1";
  }, 3000);
});
//Chức năng điều chỉnh kích thước (giảm)
var minus = document.getElementById("minus");
minus.addEventListener("click", function (e) {
  const size = window.getComputedStyle(fontsize).fontSize;
  let sizedecrease = parseFloat(size);
  sizedecrease -= 5;
  fontsize.style.fontSize = sizedecrease + "px";
  activeMinus = !activeMinus;
  minus.style.opacity = activeMinus ? "0.5" : "1";
  setTimeout(() => {
    activeMinus = !activeMinus;
    minus.style.opacity = "1";
  }, 3000);
});
//Chức năng đánh dấu vị trí đọc tạm thời
let active = false;
let flag = document.getElementById("flag");
flag.addEventListener("click", function (e) {
  e.preventDefault();
  active = !active;
  flag.style.opacity = active ? "0.5" : "1";
});
let mark = null;

document
  .getElementById("container")
  .addEventListener("click", function (event) {
    if (!active) {
      return;
    }
    document.getElementById("content").style.cursor = "pointer";

    if (mark) {
      mark.remove();
    }
    const x = event.clientX + window.scrollX;
    const y = event.clientY + window.scrollY;

    const marker = document.createElement("img");
    marker.src = "../Images/flag.png";
    marker.classList.add("marker");

    marker.style.left = x + "px";
    marker.style.top = y + "px";

    document.body.appendChild(marker);
    mark = marker;
  });
//Chức năng xóa các hiệu ứng quay trở lại ban đầu
let back = document.getElementById("round");
var activeBack = false;
back.addEventListener("click", function (e) {
  e.preventDefault();
  activeBack = !activeBack;
  back.style.opacity = activeBack ? "0.5" : "1";
  setTimeout(() => {
    activeBack = !activeBack;
    back.style.opacity = "1";
  }, 1000);
  fontsize.style.fontSize = 16 + "px";
  document.getElementById("container").classList.remove("reading-mode");
  document.getElementById("focus").classList.remove("focus");
  mark.remove();
});
let = countStar = 0;
const send = document.getElementById("sendRating");
const stars = document.querySelectorAll("#rating .star");
//Chức năng đánh giá sao
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    countStar += index;
    stars.forEach((s, i) => {
      s.classList.toggle("selected", i <= index);
    });
  });
});
//Chức năng gửi đánh giá và hiện thị nhãn cảm ơn
//Gửi đánh giám, kiểm tra
send.addEventListener("click", function (e) {
  if (countStar === 0) {
    alert("Vui lòng đánh giá trước khi gửi");
    return;
  } else {
    alert("Đã gửi đánh giá của bạn");
    onform2();
    closeForm(); //Đóng form đánh giá
  }
});
//Hiện thị nhãn cảm ơn
function onform2() {
  const container = document.getElementById("formadd2");
  container.classList.add("show");
  setTimeout(() => {
    container.classList.remove("show");
  }, 3000);
}

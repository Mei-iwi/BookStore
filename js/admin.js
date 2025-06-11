//Lấy dữ liệu
var infoPack = document.getElementById("Pack");
var PackToday = document.getElementById("packToday");
var pay = document.getElementById("pay");
var left = document.getElementById("left");
var right = document.getElementById("right");
var product = document.getElementById("product");
var InfoProduct = document.getElementById("InfoProduct");
var spending = document.getElementById("spending");
var sale = document.getElementById("sale");
var InfosSending = document.getElementById("InfoSpending");
var InfoSale = document.getElementById("infoSale");

//Hàm đóng hiện thị biểu đồ và hiện thị toàn màn hình danh mục + đơn hôm nay
infoPack.addEventListener("click", function (e) {
  e.preventDefault();
  //Tạo hiệu ứng trượt hiện thị ở trung tâm
  PackToday.scrollIntoView({ behavior: "smooth", block: "end" });
  //Ẩn menu sau khi đã chọn

  menu.classList.remove("show");
  //Thêm border cho danh mục hàng hóa
  pay.style.border = "3px solid red";
  //Thêm border cho đơn hàng hôm nay
  PackToday.style.border = "3px solid red";
  //Hiện thị danh mục hàng hóa
  right.style.display = "block";
  //Ân danh mục sản phẩm
  left.style.display = "none";
  //Xóa chia cột để danh mục hàng hóa full màn hình
  right.classList.remove("col-lg-8");
  //Thời gian hiện thi border
  setTimeout(() => {
    pay.style.border = "";
    PackToday.style.border = "";
  }, 3000);
});

//Hàm đóng hiện thị biểu đồ và hiện thị toàn màn hình danh mục + Chi tiêu hôm nay
spending.addEventListener("click", function (e) {
  e.preventDefault();
  //Tạo hiệu ứng trượt hiện thị ở trung tâm
  PackToday.scrollIntoView({ behavior: "smooth", block: "end" });
  //Ẩn menu sau khi đã chọn

  menu.classList.remove("show");
  //Thêm border cho danh mục hàng hóa
  InfosSending.style.border = "3px solid red";
  //Thêm border chi tiêu hôm nay
  PackToday.style.border = "3px solid red";
  //Hiện thị danh mục hàng hóa
  right.style.display = "block";
  //Ân danh mục sản phẩm
  left.style.display = "none";
  //Xóa chia cột để danh mục hàng hóa full màn hình
  right.classList.remove("col-lg-8");
  //Thời gian hiện thi border
  setTimeout(() => {
    InfosSending.style.border = "";
    PackToday.style.border = "";
  }, 3000);
});
//Hàm đóng hiện thị biểu đồ và hiện thị toàn màn hình danh mục + Khuyến mãi
sale.addEventListener("click", function (e) {
  e.preventDefault();
  //Tạo hiệu ứng trượt hiện thị ở trung tâm
  PackToday.scrollIntoView({ behavior: "smooth", block: "end" });
  //Ẩn menu sau khi đã chọn

  menu.classList.remove("show");
  //Thêm border cho danh mục hàng hóa
  InfoSale.style.border = "3px solid red";
  //Thêm border Khuyến mãi hôm nay
  PackToday.style.border = "3px solid red";
  //Hiện thị danh mục hàng hóa
  right.style.display = "block";
  //Ân danh mục sản phẩm
  left.style.display = "none";
  //Xóa chia cột để danh mục hàng hóa full màn hình
  right.classList.remove("col-lg-8");
  //Thời gian hiện thi border
  setTimeout(() => {
    InfoSale.style.border = "";
    PackToday.style.border = "";
  }, 3000);
});
//Ẩn thông tin danh mục và hiện thị toàn màn hình sản phẩn và tổng thu chi
product.addEventListener("click", function (e) {
  e.preventDefault();
  //Tạo hiệu ứng trượt hiện thị ở trung tâm
  PackToday.scrollIntoView({ behavior: "smooth", block: "end" });
  //Ẩn menu sau khi đã chọn
  menu.classList.remove("show");
  //Hiện thị danh mục sản phẩm
  left.style.display = "block";
  //Ẩn danh mục hàng hóa
  right.style.display = "none";
  //Xóa chia cột để danh mục sản phẩm full màn hình
  left.classList.remove("col-lg-4");
  //Thêm border cho sản phẩm
  InfoProduct.style.border = "3px solid red";
  setTimeout(() => {
    InfoProduct.style.border = "";
  }, 3000);
});
window.onload = function () {
  document.getElementById("doanhthu").value = "Year";
};
var chart = document.getElementsByClassName("chart");
var totalMoney = document.getElementById("doanhthu");
totalMoney.addEventListener("change", function () {
  if (totalMoney.value.trim() != "today") {
    if (totalMoney.value.trim() === "Month") {
      var index = 0;
      Array.from(chart).forEach((items) => {
        if (index < 4) {
          items.style.display = "flex";
          const randomNumber = parseFloat((Math.random() * 99 + 1).toFixed(2));
          items.style.setProperty("--percent", randomNumber + "%");
          items.firstElementChild.innerText = randomNumber + "$";
          items.style.animation = "none";
          items.offsetHeight;
          items.style.animation = "Growth 60s ease forwards";
          items.lastElementChild.innerHTML =
            "<u>Tuần " + parseInt(parseInt(index) + 1) + "<//u>";
          items.lastElementChild.style.width = "50px";
          items.style.width = "50px";
          index++;
        } else {
          items.style.display = "none";
          return;
        }
      });
    } else if (totalMoney.value.trim() === "quarter") {
      var index = 0;
      Array.from(chart).forEach((items) => {
        if (index < 4) {
          items.style.display = "flex";
          const randomNumber = parseFloat((Math.random() * 99 + 1).toFixed(2));
          items.style.setProperty("--percent", randomNumber + "%");
          items.firstElementChild.innerText = randomNumber + "$";
          items.style.animation = "none";
          items.offsetHeight;
          items.style.animation = "Growth 60s ease forwards";
          items.lastElementChild.innerHTML =
            "<u>Quý " + parseInt(parseInt(index) + 1) + "<//u>";
          items.lastElementChild.style.width = "50px";
          items.style.width = "50px";
          index++;
        } else {
          items.style.display = "none";
          return;
        }
      });
    } else {
      var index = 1;
      Array.from(chart).forEach((items) => {
        items.style.display = "flex";
        const randomNumber = Math.floor(Math.random() * parseFloat(100)) + 1;
        items.style.setProperty("--percent", randomNumber + "%");
        items.firstElementChild.innerText = randomNumber + "$";
        items.style.animation = "none";
        items.offsetHeight;
        items.style.animation = "Growth 60s ease forwards";
        items.lastElementChild.innerHTML = "<u>T" + index + "</u>";
        items.lastElementChild.style.width = "20px";
        items.style.width = "20px";
        items.style.fontSize = "10px";
        index++;
      });
      return;
    }
  } else {
    var index = 0;
    Array.from(chart).forEach((items) => {
      if (index < 3) {
        items.style.display = "flex";
        const randomNumber = parseFloat((Math.random() * 99 + 1).toFixed(2));
        items.style.setProperty("--percent", randomNumber + "%");
        items.firstElementChild.innerText = randomNumber + "$";
        items.style.animation = "none";
        items.offsetHeight;
        items.style.animation = "Growth 60s ease forwards";
        if (index === 0) {
          items.lastElementChild.innerHTML = "<u>Sáng</u> ";
        } else if (index === 1) {
          items.lastElementChild.innerHTML = "<u>Chiều</u> ";
        } else {
          items.lastElementChild.innerHTML = "<u>Tối</u>";
        }

        items.lastElementChild.style.width = "50px";
        items.style.width = "50px";
        index++;
      } else {
        items.style.display = "none";
        return;
      }
    });
    return;
  }
});
// function on() {
//   var indexOnload = 0;
//   Array.from(chart).forEach((items) => {
//     if (indexOnload < 3) {
//       const randomNumber = Math.floor(Math.random() * 90) + 1;
//       items.style.setProperty("--percent", randomNumber + "%");
//       items.firstElementChild.innerText = randomNumber + "$";
//       items.style.animation = "none";
//       items.offsetHeight;
//       items.style.animation = "Growth 60s ease forwards";
//       if (indexOnload === 0) {
//         items.lastElementChild.innerText = "Sáng ";
//       } else if (indexOnload === 1) {
//         items.lastElementChild.innerText = "Chiều ";
//       } else {
//         items.lastElementChild.innerText = "Tối ";
//       }

//       items.lastElementChild.style.width = "50px";
//       items.style.width = "50px";
//       indexOnload++;
//     } else {
//       items.style.display = "none";
//       return;
//     }
//   });
// }
// on();

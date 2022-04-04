var toggler = document.querySelector(".toggle-switch");
var price = document.querySelectorAll(".price");

toggler.onclick = function () {
  toggler.classList.toggle("active");
  if (toggler.classList.contains("active")) {
    for (var i = 0; i < price.length; i++) {
      price[i].innerText = price[i].innerText * 10;
    }
  } else {
    for (var j = 0; j < price.length; j++) {
      price[j].innerText = price[j].innerText / 10;
    }
  }
};

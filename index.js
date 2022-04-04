let toggler = document.querySelector(".toggle-switch");
let price = document.querySelectorAll(".price");

toggler.onclick = () => {
  toggler.classList.toggle("active");
  if (toggler.classList.contains("active")) {
    for (var i = 0; i < price.length; i++) {
      price[i].innerText = price[i].innerText / 10;
    }
  } else {
    for (var i = 0; i < price.length; i++) {
        price[i].innerText = price[i].innerText * 10;
    }
  }
};

let toggler = document.querySelector(".toggle-switch");
let basic = document.getElementById("basic");
let professional = document.getElementById("professional");
let master = document.getElementById("master");

toggler.onclick = () => {
  toggler.classList.toggle("active");
  basic.textContent = basic.textContent === "$199.99" ? "$19.99" : "$199.99"; 
  professional.textContent = professional.textContent === "$249.99" ? "$24.99" : "$249.99";
  master.textContent = master.textContent === "$399.99" ? "$39.99" : "$399.99";
  
};

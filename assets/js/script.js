window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;
let scrollTab = document.querySelectorAll(".scrollTab");

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
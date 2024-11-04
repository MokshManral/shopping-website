const btn_menu = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
btn_menu.addEventListener('click', function(){
  btn_menu.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

document.addEventListener("DOMContentLoaded", function() {
  var loginButton = document.getElementById("buttonindex");
  loginButton.addEventListener("click", function() {
      window.location.href = "login.html";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var loginButton = document.getElementById("loginbtn");
  loginButton.addEventListener("click", function() {
      window.location.href = "login.html";
  });
});
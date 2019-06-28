
//fix height
$(document).ready(function () {
  var fixHeight = function () {
    $(".navbar-nav").css("max-height", document.documentElement.clientHeight - 150);
  }
  fixHeight();
  $(window).resize(function () {
    fixHeight();
  });
  $(".navbar .navbar-toggler").on("click", function () {
    fixHeight();
  });

  //open sidebar
  $("dropdown").on("click", function () {
    $(".dropdown, .dropdown-menu").toggleClass("show");


  });

  $(".navbar-toggler, .overlay").on("click", function () {
    $(".mobileMenu, .overlay").toggleClass("open");
  });

  $("#arrow ").on("click", function () {
    $("#arr").css("max-height", document.documentElement.clientHeight - 150)
  });

});



//hide ISO text
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("iso").style.top = "0";
  } else {
    document.getElementById("iso").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

//sidebar background
$(function () {
  $('#ham').click(function () {
    $('#content').css('background', '-=10px');
  });
});

//Animatation
AOS.init({
  easing: 'ease-out-back',
  duration: 2000
});

hljs.initHighlightingOnLoad();

// Scroll to top
$('.top').click(function (e) {
  $('html, body').animate({ 'scrollTop': 0 }, 800);
  e.preventDefault();
});
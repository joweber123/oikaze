$(document).ready(function(){

$(".hamburger").click(function(){
  $(".slide-out-nav").toggleClass("nav-active");
});

$(".close-button").click(function(){
  $(".slide-out-nav").removeClass("nav-active");
});


});
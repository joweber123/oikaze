$(document).ready(function(){

$(".hamburger").click(function(){
  $(".slide-out-nav").toggleClass("nav-active");
  $(".site-inner").toggleClass("darken");
});

$(".close-button").click(function(){
  $(".slide-out-nav").removeClass("nav-active");
  $(".site-inner").toggleClass("darken");
});


$(".loader-wrapper").fadeOut(1);
$(".loader-site-wrapper").fadeIn(600);

});





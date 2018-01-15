$(document).ready(function(){

$(".hamburger").click(function(){
  $(".slide-out-nav").toggleClass("nav-active");
  $("body").toggleClass("darken");
});

$(".close-button").click(function(){
  $(".slide-out-nav").removeClass("nav-active");
  $("body").toggleClass("darken");
});


});

var container = document.querySelector('.instagram-feed');

var cloneImg1 = document.querySelector('.insta-img-1').cloneNode(false);
var cloneImg2c1 = document.querySelector('.insta-img-2').cloneNode(false);
var cloneImg2c2 = document.querySelector('.insta-img-2').cloneNode(false);
var cloneImg3c1 = document.querySelector('.insta-img-3').cloneNode(false);
var cloneImg3c2 = document.querySelector('.insta-img-3').cloneNode(false);
var cloneImg4c1 = document.querySelector('.insta-img-4').cloneNode(false);
var cloneImg4c2 = document.querySelector('.insta-img-4').cloneNode(false);
var cloneImg5 = document.querySelector('.insta-img-5').cloneNode(false);

container.insertBefore(cloneImg5, document.querySelector('.insta-img-1'));
container.insertBefore(cloneImg4c1, document.querySelector('.insta-img-1'));
container.insertBefore(cloneImg3c1, document.querySelector('.insta-img-1'));
container.insertBefore(cloneImg2c1, document.querySelector('.insta-img-1'));
container.appendChild(cloneImg1);
container.appendChild(cloneImg2c2);
container.appendChild(cloneImg3c2);
container.appendChild(cloneImg4c2);


// Step 3: Adding an infinite scroll effect
var sliderStartForward = document.querySelector('.insta-img:nth-child(5)').getBoundingClientRect().left;
var sliderEndForward = document.querySelector('.insta-img:nth-child(9)').getBoundingClientRect().right - 10;
var sliderStartBackward = document.querySelector('.insta-img:nth-child(5)').getBoundingClientRect().right;

// We're repositionning our slider to our first true image 
// as currently the first image we're seing is a clone
container.scrollLeft = sliderStartForward;

container.addEventListener('scroll', scrolling);

function scrolling() {  
  // We're sliding backwards and reached the end
  if (container.scrollLeft < 1) {
    container.scrollLeft = sliderStartBackward;
  } 
  
  if(container.scrollLeft > sliderEndForward){
    container.scrollLeft = sliderStartForward;
  }
}
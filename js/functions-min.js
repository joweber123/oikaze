function scrolling(){console.log(container.scrollLeft),container.scrollLeft<1&&(container.scrollLeft=sliderStartBackward),container.scrollLeft>sliderEndForward&&(container.scrollLeft=sliderStartForward)}$(document).ready(function(){$(".hamburger").click(function(){$(".slide-out-nav").toggleClass("nav-active"),$("body").toggleClass("darken")}),$(".close-button").click(function(){$(".slide-out-nav").removeClass("nav-active"),$("body").toggleClass("darken")})});var container=document.querySelector(".instagram-feed"),cloneImg1=document.querySelector(".insta-img-1").cloneNode(!1),cloneImg1c2=document.querySelector(".insta-img-1").cloneNode(!1),cloneImg2c1=document.querySelector(".insta-img-2").cloneNode(!1),cloneImg2c2=document.querySelector(".insta-img-2").cloneNode(!1),cloneImg3c1=document.querySelector(".insta-img-3").cloneNode(!1),cloneImg3c2=document.querySelector(".insta-img-3").cloneNode(!1),cloneImg4c1=document.querySelector(".insta-img-4").cloneNode(!1),cloneImg4c2=document.querySelector(".insta-img-4").cloneNode(!1),cloneImg5=document.querySelector(".insta-img-5").cloneNode(!1);container.insertBefore(cloneImg2c1,document.querySelector(".insta-img-1")),container.insertBefore(cloneImg3c1,document.querySelector(".insta-img-1")),container.insertBefore(cloneImg4c1,document.querySelector(".insta-img-1")),container.insertBefore(cloneImg5,document.querySelector(".insta-img-1")),container.appendChild(cloneImg1),container.appendChild(cloneImg2c2),container.appendChild(cloneImg3c2),container.appendChild(cloneImg4c2);var sliderStartForward=document.querySelector(".insta-img:nth-child(5)").getBoundingClientRect().left,sliderEndForward=document.querySelector(".insta-img:nth-child(10)").getBoundingClientRect().right-10,sliderStartBackward=document.querySelector(".insta-img:nth-child(6)").getBoundingClientRect().right;console.log(sliderEndForward),console.log(sliderStartForward),console.log(sliderStartBackward),container.scrollLeft=sliderStartForward,container.addEventListener("scroll",scrolling);
// Banner Section Fade Animation

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-dot";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Navbar Toggle Section 

let navbar=document.getElementById("nav-icon");
let navlist=document.getElementById("nav-list");
let contactbtn=document.getElementById("contact-btn");
navbar.addEventListener("click",function(){
  navlist.classList.toggle("display");
  contactbtn.classList.toggle("display");
})


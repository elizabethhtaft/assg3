/*SLIDESHOW*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

/*DEFINITION POPUPS*/
// When the user clicks on <div>, open the popup
//function myFunction() {
//  var popup = document.getElementById("myPopup");
//  popup.classList.toggle("show");
//}

// When the user clicks on div, open the popup
function myFunction(elem) {
    var popup = document.getElementById("myPopup");
    elem.children[0].classList.toggle("show");
}

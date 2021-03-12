export const slider = () => {
  
  var slideIndex = 1;

  const showSlides = (n) => {
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

  showSlides(slideIndex);

  // Next/previous controls
  const plusSlides = (n) => {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  const currentSlide = (n) => {
    showSlides(slideIndex = n);
  }

  // Event handling
  document.querySelector('.prev').addEventListener('click', (e) => {
    e.preventDefault()
    plusSlides(-1)
  })
  document.querySelector('.next').addEventListener('click', (e) => {
    e.preventDefault()
    plusSlides(1)
  })
  document.querySelector('.dot-1').addEventListener('click', (e) => {
    e.preventDefault()
    currentSlide(1)
  })
  document.querySelector('.dot-2').addEventListener('click', (e) => {
    e.preventDefault()
    currentSlide(2)
  })
  document.querySelector('.dot-3').addEventListener('click', (e) => {
    e.preventDefault()
    currentSlide(3)
  })
}

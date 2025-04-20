// navbar transparency 
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

const homeButton = document.getElementById('home');
const servicesButton = document.getElementById('services');
const projectsButton = document.getElementById('projects');
const aboutButton = document.getElementById('about');
const contactButton = document.getElementById('contact');

const targetHomeSection = document.getElementById('container-section-1');

homeButton.addEventListener('click' , function() {
  targetHomeSection.scrollIntoView({
    behaviour : 'smooth' , 
    block : 'start' 
  });
  navMenu.classList.toggle('active');
});

const targetServicesSection = document.getElementById('carousel-container');

servicesButton.addEventListener('click' , function() {
  targetServicesSection.scrollIntoView({
    behaviour : 'smooth' , 
    block : 'start' 
  });
  navMenu.classList.toggle('active');
});

const targetContactsSection = document.getElementById('footer-section');

contactButton.addEventListener('click' , function() {
  targetContactsSection.scrollIntoView({
    behaviour : 'smooth' , 
    block : 'end' 
  });
  navMenu.classList.toggle('active');
});








// function to handle scroll event 
window.onscroll = function() {
  if (window.scrollY > 0){

    navbar.classList.add('transparent') ; 
    navbar.classList.remove('visible') ; 

  } else {
    navbar.classList.add('visible') ; 
    navbar.classList.remove('transparent') ; 

  }
}
    
// Hamburger Script 
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".carousel-slide");
    let progressBars = document.querySelectorAll(".progress-fill");
    let currentIndex = 0;

    function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });

    // Reset all progress bars instantly
    progressBars.forEach((bar) => {
        bar.style.transition = "none"; // Disable transition for instant reset
        bar.style.width = "0%";
    });

    // Force reflow to apply the reset instantly
    void progressBars[index].offsetWidth;

    // Fill the progress bar for the current slide with transition
    progressBars[index].style.transition = "width 5s ease-in-out";
    progressBars[index].style.width = "100%";
}

    window.nextSlide = function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };
    // document.getElementById('nextSlide').addEventListener('click', function () {
    //     currentIndex = (currentIndex + 1) % slides.length;
    //     showSlide(currentIndex);
    // } );
    window.prevSlide = function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };
    // document.getElementById('prevSlide').addEventListener('click', function () {
    //     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    //     showSlide(currentIndex);
    // });

    showSlide(currentIndex); // Show first slide on load

    setInterval(() => {
        nextSlide();
    }, 5000);
});

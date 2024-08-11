window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);

});

// ==========scroll to top btn=====

// const scrollToTopBtn = document.querySelector(".scrollToTop-btn");
// window.addEventListener("scroll", function () {
//   scrollToTopBtn.classList.toggle("active", window.scrollY > 500);
// });

// scrollToTopBtn.addEventListener("click", () => {
//   document.body.scrollTop = 0;
//   document.documentElement.scroll = 0;
// });

const scrollToTopBtn = document.querySelector(".scrollToTop-btn");

// Show or hide the button based on scroll position
window.addEventListener("scroll", function () {
  scrollToTopBtn.classList.toggle("active", window.scrollY > 500);
});

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// // navigating menu items active on scroll page

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    const navLinks = document.querySelectorAll(".nav-items a[href*='" + id + "']");

    navLinks.forEach(link => {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});



// website dark/light theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


// responsive nav menu toggle

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});


// Initialize ScrollReveal with configuration
ScrollReveal({
  reset: false,  // Set to false to avoid resetting animations
  distance: '60px',
  duration: 1000,
  delay: 100,
  once: true      // Ensure animations occur only once
});

// Reveal elements with specific settings
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500, origin: 'left' });

ScrollReveal().reveal('.home .info h3, .home .info .p, .about-info .btn', { delay: 100, origin: 'right' });

ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom' });

ScrollReveal().reveal('.media-icons i, .contact-left li, .contact-left h2', { delay: 500, origin: 'left', interval: 200 });

ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 600, origin: 'right' });

ScrollReveal().reveal('.education-awards .education', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.education-awards .awards', { delay: 600, origin: 'right' });

ScrollReveal().reveal('.skills-container .skills-card', { delay: 600, origin: 'top' });
ScrollReveal().reveal('.skills-description h3', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.skills-description h1', { delay: 100, origin: 'bottom' });

ScrollReveal().reveal('.projects-container .project-card', { delay: 100, origin: 'right' });

ScrollReveal().reveal('.certifications-container .certification-card', { delay: 100, origin: 'top' });

ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 200 });

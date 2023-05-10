// toggle mobile nav
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// reveal animation on scroll
const sr = ScrollReveal({
  origin: "bottom",
  distance: "30px",
  duration: 1000,
  reset: true,
});

sr.reveal(".home__title", {});
sr.reveal(".home__subtitle", { delay: 100 });
sr.reveal(".home__description", { delay: 200 });
sr.reveal(".home__button", { delay: 300 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 100 });
sr.reveal(".about__text", { delay: 200 });
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", { delay: 100 });
sr.reveal(".skills__data", { interval: 100 });
sr.reveal(".work__img", { interval: 100 });
sr.reveal(".contact__input", { interval: 100 });
sr.reveal(".contact__button", { delay: 300 });

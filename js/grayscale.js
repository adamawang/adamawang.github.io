window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  const mainNav = document.getElementById('mainNav');
  const navbarResponsive = document.getElementById('navbarResponsive');

  // Closes responsive menu when a scroll trigger link is clicked
  // (smooth scrolling itself is handled by CSS scroll-behavior)
  document.querySelectorAll('.js-scroll-trigger').forEach((link) => {
    link.addEventListener('click', () => {
      bootstrap.Collapse.getOrCreateInstance(navbarResponsive, { toggle: false }).hide();
    });
  });

  // Activate scrollspy to add active class to navbar items on scroll
  new bootstrap.ScrollSpy(document.body, {
    target: '#mainNav',
    rootMargin: '0px 0px -40%'
  });

  // Collapse Navbar
  const navbarCollapse = () => {
    mainNav.classList.toggle('navbar-shrink', window.scrollY > 100);
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  document.addEventListener('scroll', navbarCollapse);
});

// Smooth scroll behavior for anchors
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Section fade-in on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.25
});
sections.forEach(sec => observer.observe(sec));

// Highlight active link
const navLinks = document.querySelectorAll('.navbar a');
window.addEventListener('scroll', () => {
  let scrollY = window.scrollY + 200;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= scrollY &&
      section.offsetTop + section.offsetHeight > scrollY
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
// منوی کشویی در موبایل
document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.classList.toggle('active');
    }
  });
});

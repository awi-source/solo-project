function toggleMenu() {
    document.querySelector('.side-menu').classList.toggle('visible');
  }
  document.querySelector('.fa-bars').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });

  


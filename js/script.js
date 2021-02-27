function toggleMenu() {
    document.querySelector('.side-menu').classList.toggle('active');
  }
  document.querySelector('.fa-bars').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });

  


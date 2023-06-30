const navbarToggleBtn = document.querySelector('.navbar-toggle-btn');
const navbarNav = document.querySelector('.navbar-nav');
const endgame = document.querySelectorAll('.navbar-nav li');


const navbarToggleFunc = function() {
    navbarToggleBtn.classList.toggle('active');
    navbarNav.classList.toggle('active');
}

const closeNavbarToggle = function() {
  navbarToggleBtn.classList.remove('active');
  navbarNav.classList.remove('active');
};

navbarToggleBtn.addEventListener('click', navbarToggleFunc);

endgame.forEach((thanos) => {
  thanos.addEventListener('click', closeNavbarToggle);
});



// -------------------------------------------------------
const elementos = document.querySelectorAll('#miLista li');

elementos.forEach((elemento) => {

  elemento.addEventListener('click', () => {
    
    elementos.forEach((e) => {
      e.classList.remove('active');
    });

    elemento.classList.add('active');
  });
});
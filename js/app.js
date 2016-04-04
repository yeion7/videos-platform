var navMenu = document.getElementById('nav-menu');
var mobileMenu = document.getElementById('mobile-menu');

mobileMenu.addEventListener('click', function(ev){
  ev.preventDefault();
  navMenu.classList.toggle('show');

})


var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', function(ev) {
  ev.preventDefault();
  searchInput.classList.toggle('show');
})


var playButton = document.getElementById('play-button');
var heroTape = document.getElementById('hero-tape');

playButton.addEventListener('click', function(ev) {
  ev.preventDefault();
  heroTape.classList.toggle('hiden');

})


var signinButton = document.getElementById('signin');
var modalContainer = document.getElementById('modal')
var modalButton = document.getElementById('modal-close');


signinButton.addEventListener('click', function(ev) {
  ev.preventDefault();
  console.log('fnu')
  modalContainer.classList.toggle('hiden');

})

modalButton.addEventListener('click', function(ev) {
  ev.preventDefault();
  modalContainer.classList.toggle('hiden');
})

var mobileMenu = document.getElementById('mobile-menu');
var navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', function(ev){
  ev.preventDefault();
  navMenu.classList.toggle('show');

})


var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', function(ev) {
  ev.preventDefault();
  console.log('funcoona')
  searchInput.classList.toggle('show');
})


var playButton = document.getElementById('play-button');
var heroTape = document.getElementById('hero-tape');

playButton.addEventListener('click', function(ev) {
  ev.preventDefault();
  console.log('fnu')
  heroTape.classList.toggle('hiden');

})

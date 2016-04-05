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
  mobileMenu.classList.toggle('hiden');
  navMenu.classList.toggle('hiden');
  signinButton.classList.toggle('hiden');
})


var videoItem = document.getElementById('video-item');

videoItem.addEventListener('click', function(ev) {
  console.log(funciona);

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

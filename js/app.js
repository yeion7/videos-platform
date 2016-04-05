// desplegar menu mobile

var navMenu = document.getElementById('nav-menu');
var mobileMenu = document.getElementById('mobile-menu');

mobileMenu.addEventListener('click', function(ev){
  ev.preventDefault();
  navMenu.classList.toggle('show');

})

// desplegar barra de busqueda
var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', function(ev) {
  ev.preventDefault();
  searchInput.classList.toggle('show');
  mobileMenu.classList.toggle('hiden');
  navMenu.classList.toggle('hiden');
  signinButton.classList.toggle('hiden');
})


// desplegar dropdown
var videosMusica = document.querySelectorAll('.videos-musica>.videos-items>.videos-item')
var videosSeries = document.querySelectorAll('.videos-series>.videos-items>.videos-item')
var dropdownMusica = document.querySelector('.dropdown-musica')
var dropdownSeries = document.querySelector('.dropdown-series')

Array.prototype.map.call(videosMusica, function(item) {
  item.addEventListener('click', function(ev) {
    dropdownMusica.classList.toggle('hiden');
    this.classList.toggle("videos-selected")

  })
})

Array.prototype.map.call(videosSeries, function(item) {
  item.addEventListener('click', function(ev) {
    dropdownSeries.classList.toggle('hiden');
    this.classList.toggle("videos-selected")

  })
})

//cerrar dropdown
var dropdownContainer = document.getElementById('dropdown-container');
var dropdownClose = document.getElementById('dropdown-close');

dropdownClose.addEventListener('click', function(ev) {
  dropdownContainer.classList.toggle('hiden');
  videoItem.classList.remove("videos-selected")

})





//desplegar modal
var signinButton = document.getElementById('signin');
var modalContainer = document.getElementById('modal')
var modalButton = document.getElementById('modal-close');


signinButton.addEventListener('click', function(ev) {
  ev.preventDefault();
  modalContainer.classList.toggle('hiden');

})

modalButton.addEventListener('click', function(ev) {
  ev.preventDefault();
  modalContainer.classList.toggle('hiden');
})

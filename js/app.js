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

function removeSelect(target) {
  Array.prototype.map.call(target, function(item) {
    if(item.classList.contains("videos-selected")) {
      item.classList.remove("videos-selected")
    }
  })
 }

function toggleDropdown(type) {
   if(type.classList.contains('hiden')) {
     type.classList.toggle('hiden');
   }
 }

function listenerVideos(target, dropdown) {
  Array.prototype.map.call(target, function(item) {
    item.addEventListener('click', function(ev) {
      removeSelect(target)
      this.classList.toggle("videos-selected")
      toggleDropdown(dropdown)
    })
  })
}


listenerVideos(videosMusica, dropdownMusica)
listenerVideos(videosSeries, dropdownSeries)



//cerrar dropdown
var dropdownContainers = document.querySelectorAll('.dropdown-container');
var dropdownClose = document.querySelectorAll('.dropdown-close');


Array.prototype.map.call(dropdownClose, function(item) {
    item.addEventListener('click', function(ev) {
      Array.prototype.map.call(dropdownContainers, function(item) {
        if(!item.classList.contains('hiden')) {
          item.classList.add('hiden');
        }
      });
      removeSelect(videosMusica)
      removeSelect(videosSeries)
    });
  });




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

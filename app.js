//menu hamburguresa
var menu_op = {};

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, menu_op);
});

// Media
var slider_op = {
  indicators: false,
};

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".slider");
  var instances = M.Slider.init(elems, slider_op);
});

// autocompletar ciudades
document.addEventListener("DOMContentLoaded", function () {
  var destiny_op = {
    data: {
      'Argentina': 'https://www.aerolineas.com.ar/',
      'Australia': 'https://www.qantas.com/',
      'Austria': 'https://www.austrian.com/',
      'Brasil': 'https://www.voegol.com.br/',
      'Canadá': 'https://www.aircanada.com/',
      'Chile': 'https://www.latam.com/',
      'China': 'https://www.airchina.com/',
      'Colombia': 'https://www.avianca.com/',
      'República Checa': 'https://www.csa.cz/',
      'Dinamarca': 'https://www.flysas.com/',
      'Egipto': 'https://www.egyptair.com/',
      'Francia': 'https://www.airfrance.com/',
      'Alemania': 'https://www.lufthansa.com/',
      'Grecia': 'https://www.aegeanair.com/',
      'India': 'https://www.airindia.in/',
      'Indonesia': 'https://www.garuda-indonesia.com/',
      'Italia': 'https://www.alitalia.com/',
      'Japón': 'https://www.jal.co.jp/',
      'México': 'https://www.aeromexico.com/',
      'Países Bajos': 'https://www.klm.com/',
      'Nueva Zelanda': 'https://www.airnewzealand.co.nz/',
      'Noruega': 'https://www.norwegian.com/',
      'Perú': 'https://www.latam.com/',
      'Portugal': 'https://www.flytap.com/',
      'Rusia': 'https://www.aeroflot.ru/',
      'Singapur': 'https://www.singaporeair.com/',
      'Sudáfrica': 'https://www.flysaa.com/',
      'Corea del Sur': 'https://www.koreanair.com/',
      'España': 'https://www.iberia.com/',
      'Suecia': 'https://www.flysas.com/',
      'Suiza': 'https://www.swiss.com/',
      'Tailandia': 'https://www.thaiairways.com/',
      'Turquía': 'https://www.turkishairlines.com/',
      'Emiratos Árabes Unidos': 'https://www.emirates.com/',
      'Reino Unido': 'https://www.britishairways.com/',
      'Estados Unidos': 'https://www.delta.com/',
      'Vietnam': 'https://www.vietnamairlines.com/'
    },

    limit: 6

  };
  var elems = document.querySelectorAll(".autocomplete");
  var instances = M.Autocomplete.init(elems, destiny_op);
});

// FUNCIONALIDAD DEL DESPLAZAMIENTO DLE MENU

document.addEventListener('DOMContentLoaded', function() {
  initSidenav();
  initSmoothScrolling();
});

function initSidenav() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
}

function initSmoothScrolling() {
  document.querySelectorAll('.sidenav a, .nav-wrapper a').forEach(function(anchor) {
      anchor.addEventListener('click', function(event) {
          smoothScrollAndClose(event, this.getAttribute('href'));
      });
  });
}

function smoothScrollAndClose(event, target) {
  event.preventDefault();

  if (target && target.startsWith('#') && document.querySelector(target)) {
      var sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
      sidenavInstance.close();

      $('html, body').animate({
          scrollTop: $(target).offset().top - 65  // Adjust the margin here
      }, 500);
  }
}




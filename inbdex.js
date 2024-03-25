var navbar = document.getElementById('nav')
var logo = document.getElementById('logo')
var letter = document.getElementById('letter')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.scrollY > 0) {
    navbar.classList.add('prueba');
    letter.classList.add('letter');
    logo.classList.add('logo-prueba');
    
  } else {
    navbar.classList.remove('prueba')
    letter.classList.remove('letter')
    logo.classList.remove('logo-prueba');
  }
}
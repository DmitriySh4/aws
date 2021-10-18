window.onscroll = function() {stickyMenu()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyMenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener('load', (event) => {
  var toggler = document.querySelector('.menu-toggle .fa');
  var menu = document.querySelector('.menu-wrapper');
  var search = document.querySelector('.search');
  var searchToggler = document.querySelector('.search-toggle .fa');
  toggler.addEventListener('click', function(e){
  	e.preventDefault();	
  	toggler.classList.toggle("fa-close");
  	menu.classList.toggle("menu-show");
  });

  searchToggler.addEventListener('click', function(e){
  	e.preventDefault();	
  	searchToggler.classList.toggle("fa-close");
  	search.classList.toggle("search-show");
  });

  document.querySelectorAll('.expandable').forEach(ex => {
    ex.querySelector('h5 a').addEventListener('click', function (e) {
      e.preventDefault();
      
      ex.querySelector('h5 a .fa').classList.toggle("fa-angle-up");
      ex.querySelector('ul').classList.toggle("list-show");
      
    });
  });

});
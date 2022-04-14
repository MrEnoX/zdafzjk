function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    menu.mobile-menu.addEventListener('touchmove', function(e){ e.preventDefault(); }, { passive: false });

}


function getSource(){
  var Source = document.getElementById("source").value;
  
  window.location = "/" + (Source);
}



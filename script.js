window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdown = document.getElementById("myDropdown");
    dropdown.classList.remove('show');
  }
}
function toggleMenu(dropdownId) {
  document.getElementById(dropdownId).classList.toggle("show");
}


var dropdown = document.querySelector(".dropdown");
window.onresize = disableMenu;

function toggleMenu() {
  if (dropdown.classList.contains("d-block")) {
    dropdown.classList.remove("d-block");
  } else {
    dropdown.classList.add("d-block");
  }
}

function disableMenu() {
  dropdown.classList.remove("d-block");
}

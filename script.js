var dropdown = document.querySelector(".dropdown");

function toggleMenu() {
  if (dropdown.classList.contains("d-block")) {
    dropdown.classList.remove("d-block");
  } else {
    dropdown.classList.add("d-block");
  }
}

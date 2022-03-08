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

function linkToMain() {
  window.location.href = "./index.html";
}

function linkToCurbside() {
  window.location.href = "./curbside.html";
}

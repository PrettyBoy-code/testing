var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

console.log("running", toggleButton);
toggleButton.onclick = function () {
  console.log("Clicked");
  el.classList.toggle("toggled");
};
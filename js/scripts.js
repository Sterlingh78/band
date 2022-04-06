function toggleMenu() {
document.getElementById("primaryNav").classList.toggle("open");

}
const button = document.getElementById("hamburgerBtn");
button.onclick = toggleMenu;
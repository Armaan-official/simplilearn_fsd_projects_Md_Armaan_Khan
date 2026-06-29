const backArrow = document.querySelector("#back-arrow");
const sidebar = document.querySelector("#sidebar");
const menu = document.querySelector("#menu");

// sidebar toggling

menu.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
  menu.style.display = "none";
});

backArrow.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  setTimeout(() => {
    menu.style.display = "block";
  }, 400);
});

window.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menu.contains(e.target)) {
    sidebar.classList.add("-translate-x-full");
    setTimeout(() => {
      menu.style.display = "block";
    }, 400);
  }
});

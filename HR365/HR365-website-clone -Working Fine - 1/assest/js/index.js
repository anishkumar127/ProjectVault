function showItem() {
  const e = document.getElementById("onShow");
  e.classList.toggle("hide");
}

function showMenu() {
  const el = document.getElementById("menuShow");
  el.classList.toggle("ham-navbar-visible");
}

function showNavInside() {
  const el = document.getElementById("on-nav-inside-visible");
  el.classList.toggle("ham-inside-nav-visible");
}

function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  if (!menu) return;
  if (menu.classList.contains("show")) {
    menu.classList.add("hide");
    menu.addEventListener("transitionend", function handleTransitionEnd() {
      menu.classList.remove("show");
      menu.removeEventListener("transitionend", handleTransitionEnd);
    });
      menu.classList.remove("show", "hide");
    requestAnimationFrame(() => menu.classList.remove("hide"));
  } else {
    menu.classList.add("show");
    setTimeout(() => menu.classList.remove("hide"), 10);
  }
}
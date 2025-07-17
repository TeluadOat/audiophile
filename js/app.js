const menuToggle = document.querySelector("#menu-toggle");
const navDrop = document.querySelector("#nav-drop");
menuToggle.addEventListener("click", (e) => {
    navDrop.classList.toggle("show");
    e.stopPropagation();
})
document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navDrop.contains(e.target)) {
        navDrop.classList.remove("show");
    }
})
window.onload = function() {
    const menuBtn = document.querySelector("#menuBtn");
    const menu = document.querySelector("#menu");
    menu.style.visibility = "hidden";

    menuBtn.addEventListener("click", function() {
        menu.style.visibility == "hidden" ? menu.style.visibility ="visible" : menu.style.visibility ="hidden";
    })
}
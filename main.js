window.onload = function () {
    const menuBtn = document.querySelector("#menuBtn");
    const menu = document.querySelector("#menu");
    menu.style.visibility = "hidden";

    menuBtn.addEventListener("click", function () {
        menu.style.visibility == "hidden" ? (menu.style.visibility = "visible") : (menu.style.visibility = "hidden");
    });


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

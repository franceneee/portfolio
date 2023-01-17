window.onload = function () {
    const menuBtn = document.querySelector("#menuBtn");
    const menu = document.querySelector("#menu");
    menu.style.visibility = "hidden";

    menuBtn.addEventListener("click", function () {
        menu.style.visibility == "hidden" ? (menu.style.visibility = "visible") : (menu.style.visibility = "hidden");

        menuBtn.classList.toggle("change");
    });

    const onSubmit = (e) => {
        e.preventDefault();
        setFormStatus("Submitting...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        console.log(details);
    };
};

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

emailjs.init({
    publicKey: "mbGnxLK_b-jupS8tq",
});
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

const form = document.getElementById("booking-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_ac4xarv",
        "template_yw6zw9m",
        this
    )
    .then(() => {
        alert("Tak! Din forespørgsel er sendt.");
        form.reset();
    })
    .catch((error) => {
        alert("Der opstod en fejl. Prøv igen.");
        console.error(error);
    });
});
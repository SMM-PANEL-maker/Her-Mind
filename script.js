// ==============================
// HER MIND — JAVASCRIPT
// ==============================

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});


// Newsletter form
const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailInput = newsletterForm.querySelector("input");

        if (emailInput.value.trim() !== "") {
            alert(
                "Thank you for subscribing to Her Mind!"
            );

            emailInput.value = "";
        }
    });
}// Article sharing
function shareArticle() {

    const shareData = {
        title: "Her Mind",
        text: "Read this article on Her Mind.",
        url: window.location.href
    };

    if (navigator.share) {

        navigator.share(shareData)
            .catch(function () {
                console.log("Sharing cancelled.");
            });

    } else {

        navigator.clipboard.writeText(window.location.href);

        alert("Article link copied. You can now paste it on Facebook or WhatsApp.");

    }
}
document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    let typedText = document.querySelector(".typedText");
    let words = ["Designer", "Developer", "Creative"];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentWord = words[wordIndex];
        let displayText = currentWord.substring(0, letterIndex);
        typedText.textContent = displayText;

        if (!isDeleting && letterIndex < currentWord.length) {
            letterIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && letterIndex > 0) {
            letterIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 2000);
        }
    }
    typeEffect();

    let form = document.querySelector(".form-control");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.querySelector(".input-field[type='text']").value.trim();
        let email = document.querySelector(".input-field[type='email']").value.trim();
        let message = document.querySelector("textarea").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("All fields are required!");
            return;
        }
        if (!email.match(/^\S+@\S+\.\S+$/)) {
            alert("Enter a valid email address!");
            return;
        }
        
        alert("Message sent successfully!");
        form.reset();
    });
});

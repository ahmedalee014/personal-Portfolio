// Add Sticky Effect to Header and Handle Scroll-to-Top Button Visibility
window.onscroll = function() {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Sticky header logic
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

    // Show or hide Scroll to Top button
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.remove("hidden");
        scrollTopBtn.classList.add("flex");
    } else {
        scrollTopBtn.classList.add("hidden");
        scrollTopBtn.classList.remove("flex");
    }
};

// Form Submission Handling (Example)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Validation Example (Optional)
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset(); // Reset form after successful submission
    } else {
        alert("Please fill out all fields.");
    }

    // Here you can add logic to handle form submission like sending an email using a backend service.
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll to Top Button Functionality
document.getElementById("scrollTopBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



// Typing Effect for the Dynamic Text
const dynamicTextElement = document.getElementById("dynamicText");
const texts = ["A Software Engineer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex];
    let displayText;

    if (isDeleting) {
        charIndex--;
        displayText = currentText.substring(0, charIndex);
    } else {
        charIndex++;
        displayText = currentText.substring(0, charIndex);
    }

    dynamicTextElement.textContent = displayText;

    // If deleting, set a shorter delay; if typing, longer delay.
    let delay = isDeleting ? 150 : 150;

    // If the word is fully typed, wait before deleting
    if (!isDeleting && charIndex === currentText.length) {
        delay = 1500; // Wait 1 second before starting to delete
        isDeleting = true;
    }
    // If the word is fully deleted, start typing again
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;
        if (textIndex >= texts.length) {
            textIndex = 0;
        }
    }

    setTimeout(type, delay);
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", function() {
    type();
});


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector("#header nav");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("hidden");
    });
});


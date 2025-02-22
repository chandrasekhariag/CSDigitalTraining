// Course Search Functionality
document.getElementById("search-bar").addEventListener("keyup", function () {
    let searchValue = this.value.toLowerCase(); // Get the search input value
    let courses = document.querySelectorAll(".course-item"); // Get all course items

    courses.forEach(course => {
        let courseText = course.textContent.toLowerCase(); // Get the text content of each course
        if (courseText.includes(searchValue)) {
            course.style.display = "block"; // Show the course if it matches the search
        } else {
            course.style.display = "none"; // Hide the course if it doesn't match
        }
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll to the target section
        });
    });
});

// Form Submission Handling (Example)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form data
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    // Validate form fields
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate form submission (replace with actual backend logic)
    console.log("Form submitted with the following data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Show a success message
    alert("Thank you for contacting us! We'll get back to you soon.");

    // Clear the form
    this.reset();
});

// Toggle Mobile Menu (if needed)
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show'); // Toggle the mobile menu
});

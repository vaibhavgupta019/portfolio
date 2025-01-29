document.addEventListener("DOMContentLoaded", function() {
    const resumeButton = document.getElementById("resume-btn");
    const resumeOptions = document.getElementById("resume-options");

    resumeButton.addEventListener("mouseover", function() {
        resumeOptions.style.display = "block";
    });

    resumeButton.addEventListener("mouseleave", function() {
        resumeOptions.style.display = "none";
    });

    // Smooth scrolling for section links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

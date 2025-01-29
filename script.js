document.addEventListener("DOMContentLoaded", function() {
    const resumeButton = document.getElementById("resume-btn");
    const resumeOptions = document.getElementById("resume-options");

    resumeButton.addEventListener("mouseover", function() {
        resumeOptions.style.display = "block";
    });

    resumeButton.addEventListener("mouseout", function() {
        resumeOptions.style.display = "none";
    });
});

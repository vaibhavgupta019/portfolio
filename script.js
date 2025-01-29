document.querySelector('.resume-dropdown button').addEventListener('mouseover', () => {
    document.querySelector('.dropdown-content').style.display = 'block';
});

document.querySelector('.resume-dropdown').addEventListener('mouseleave', () => {
    document.querySelector('.dropdown-content').style.display = 'none';
});

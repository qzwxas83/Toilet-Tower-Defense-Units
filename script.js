document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // Check if theme preference is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Function to toggle between light and dark mode
    function toggleTheme() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    }

    // Event listener for theme toggle button
    themeToggleBtn.addEventListener('click', toggleTheme);
});

function scrollToSection(sectionId) {
    var element = document.getElementById(sectionId);
    if (element) {
        var headerHeight = document.querySelector('header').offsetHeight;
        var topMargin = 20;
        var scrollPosition = element.offsetTop - headerHeight - topMargin;
        
        if (window.scrollY !== scrollPosition) {
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    }
}

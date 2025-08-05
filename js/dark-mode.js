document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeStyle = document.getElementById('darkModeStyle');
    
    // Check for saved user preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        enableDarkMode();
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        if (darkModeStyle.disabled) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    function enableDarkMode() {
        darkModeStyle.disabled = false;
        darkModeToggle.classList.add('active');
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    function disableDarkMode() {
        darkModeStyle.disabled = true;
        darkModeToggle.classList.remove('active');
        document.documentElement.removeAttribute('data-theme');
    }
    
    // Detect system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    prefersDarkScheme.addEventListener('change', e => {
        if (e.matches) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    // Set initial mode based on system preference if no saved preference
    if (!savedMode && prefersDarkScheme.matches) {
        enableDarkMode();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.getElementById('toggle-theme');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'white') {
        body.classList.add('white-mode');
        themeButton.textContent = 'Dark Mode';
    }

    themeButton.addEventListener('click', function () {
        body.classList.toggle('white-mode');

        if (body.classList.contains('white-mode')) {
            themeButton.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'white');
        } else {
            themeButton.textContent = 'White Mode';
            localStorage.setItem('theme', 'dark');
        }
    });
});

const toggleBtn = document.getElementById('theme-toggle');

// 1. Get saved theme or default to 'light'
const savedTheme = localStorage.getItem('theme') || 'light';

// 2. Apply initial theme to <html>
document.documentElement.setAttribute('data-theme', savedTheme);
updateToggleIcon(savedTheme);

// 3. Handle button clicks
toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
});

// Helper function to keep the button icon in sync
function updateToggleIcon(theme) {
    if (toggleBtn) {
        // Show moon icon in light mode, sun icon in dark mode
        toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}
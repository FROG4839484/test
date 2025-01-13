// Dropdown Logic
function handleInput(event) {
    const input = event.target;
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (input.value.endsWith('/')) {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
}

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Glitch Animation
function applyGlitchEffect() {
    const elements = document.querySelectorAll('.tool-box');
    elements.forEach(element => {
        element.classList.add('glitch');
        setTimeout(() => {
            element.classList.remove('glitch');
        }, 1500);
    });
}

// Attach Events
document.getElementById('crypto-input').addEventListener('input', handleInput);
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Apply Glitch Effect on Scroll
window.addEventListener('scroll', () => {
    const toolsSection = document.querySelector('.tools-box-container');
    const rect = toolsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        applyGlitchEffect();
    }
});

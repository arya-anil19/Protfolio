// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light Mode Toggle (Optional)
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = '#00bcd4';
toggleButton.style.color = '#ffffff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Add light mode styles dynamically
const lightModeStyles = `
    body.light-mode {
        background-color: #ffffff;
        color: #000000;
    }
    body.light-mode header, body.light-mode .project-card, body.light-mode .skill-item, body.light-mode footer {
        background-color: #f4f4f4;
        color: #000000;
    }
    body.light-mode h1, body.light-mode h2, body.light-mode h3, body.light-mode a {
        color: #000000;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = lightModeStyles;
document.head.appendChild(styleSheet);
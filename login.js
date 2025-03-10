// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});

// Close menu when clicking on links
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    });
});

// Tab Switching
const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

tabLinks.forEach(function(tabLink) {
    tabLink.addEventListener('click', function() {
        const tab = this.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        tabLinks.forEach(function(link) {
            link.classList.remove('active');
        });

        tabContents.forEach(function(content) {
            content.classList.remove('active');
        });

        // Add active class to the clicked tab and its corresponding content
        this.classList.add('active');
        const activeTabContent = document.querySelector(`.tab-contents[data-tab="${tab}"]`);
        if (activeTabContent) {
            activeTabContent.classList.add('active');
        }
    });
});

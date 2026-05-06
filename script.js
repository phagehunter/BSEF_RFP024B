/**
 * Bleeding Edge Scientific Foundation - Site Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');

    // 1. SCROLL EFFECT: Add shadow to navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
            navbar.style.padding = '10px 0'; // Slightly shrink for a "compact" look
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '20px 0';
        }
    });

    // 2. ACTIVE LINK HIGHLIGHTING
    // Automatically highlights the nav item based on which page you are on
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 3. SMOOTH SCROLLING
    // Ensures internal page jumps (like #overview) slide smoothly instead of snapping
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. LOGGING (For Debugging GitHub Pages)
    console.log("BESF Site Initialized: Noto fonts loaded, scroll listeners active.");
});

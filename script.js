/**
 * BESF Site Logic - Full Fix
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. REVEAL PAGE (Fixes the blank page issue)
    // We add the 'loaded' class to <body> which triggers the CSS transition
    document.body.classList.add('loaded');

    // 2. NAVBAR SCROLL EFFECT
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
            navbar.style.padding = '12px 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '20px 0';
        }
    });

    // 3. AUTO-ACTIVE NAVIGATION
    // This looks at the URL and highlights the correct button
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            // Only remove active if it's not the external portfolio link
            if(!link.href.includes('github.io')) {
                link.classList.remove('active');
            }
        }
    });

    // 4. SMOOTH INTERNAL JUMPS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

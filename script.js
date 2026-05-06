/**
 * BESF Site Logic
 * Handles Smooth Gaussian Blur Entry & Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. TRIGGER SMOOTH REVEAL
    // We use a slight timeout to ensure the browser has begun rendering
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // 2. STICKY NAV SHADOW
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

    // 3. AUTO-ACTIVE LINK STATE
    // This removes the need to manually set class="active" on every page
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 4. SMOOTH SCROLL FOR RFP SECTIONS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100, // Offset for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });
});

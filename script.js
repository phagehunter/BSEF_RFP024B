/**
 * BLEEDING EDGE SCIENTIFIC FOUNDATION 
 * Core Site Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DYNAMIC NAVBAR SCROLL EFFECT
    // Adds a shadow and shrinks the navbar slightly when the user scrolls down
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
            navbar.style.padding = '12px 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '20px 0';
            navbar.style.background = '#ffffff';
        }
    });

    // 2. AUTOMATIC ACTIVE LINK HIGHLIGHTING
    // Detects which page you are on and highlights the correct menu item
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Remove 'active' from all first
        link.classList.remove('active');
        
        // If we are at root or index.html
        if ((currentPath === "" || currentPath === "index.html") && linkPath === "index.html") {
            link.classList.add('active');
        } 
        // If we match the specific filename (e.g., grants.html)
        else if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });

    // 3. SMOOTH ANCHOR SCROLLING
    // Ensures clicking internal links (like #overview) scrolls smoothly instead of jumping
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#") return; // Ignore empty anchors

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. BUTTON CLICK FEEDBACK (Optional)
    // Console log to verify script is running (check this in "Inspect > Console")
    console.log("BESF Site Logic fully initialized.");
});

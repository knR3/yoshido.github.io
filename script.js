document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };
    const observer = new IntersectionObserver(callback, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));

    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href') === '#') return; // Ignore empty anchors like the legal trigger
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Legal mentions toggle
    const legalTrigger = document.getElementById('legal-trigger');
    const legalContent = document.getElementById('legal-content');
    if (legalTrigger && legalContent) {
        legalTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            if (legalContent.style.display === 'none') {
                legalContent.style.display = 'block';
                legalTrigger.textContent = 'Masquer les Mentions Légales';
            } else {
                legalContent.style.display = 'none';
                legalTrigger.textContent = 'Mentions Légales';
            }
        });
    }
});

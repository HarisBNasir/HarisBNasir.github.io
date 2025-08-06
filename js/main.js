// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');

            // Close all other FAQs
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });

            // Open current if it was closed
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });

    // Initialize tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(tooltip => {
        const tooltipText = tooltip.getAttribute('data-tooltip');
        const tooltipElement = document.createElement('span');
        tooltipElement.className = 'tooltip-text';
        tooltipElement.textContent = tooltipText;
        tooltip.appendChild(tooltipElement);

        tooltip.addEventListener('mouseenter', () => {
            tooltipElement.style.visibility = 'visible';
            tooltipElement.style.opacity = '1';
        });

        tooltip.addEventListener('mouseleave', () => {
            tooltipElement.style.visibility = 'hidden';
            tooltipElement.style.opacity = '0';
        });
    });

    // Set active navigation item based on current page
    document.addEventListener('DOMContentLoaded', function () {
        // Get current page path
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        // Special cases for index files
        const pageMap = {
            'index.html': 'home',
            'blog.html': 'blog',
            'about.html': 'about',
            'contact.html': 'contact',
            'index': 'reviews' // For review/index.html etc
        };

        // Find active page identifier
        let activePage = pageMap[currentPath] ||
            currentPath.replace('.html', '').replace('-review', '');

        // Set active class
        const activeLink = document.querySelector(`[data-nav="${activePage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');

            // Also highlight parent category for nested pages
            if (activePage === 'index') {
                const parentCategory = window.location.pathname.split('/')[1];
                const parentLink = document.querySelector(`[data-nav="${parentCategory}"]`);
                if (parentLink) parentLink.classList.add('active');
            }
        }
    });
});
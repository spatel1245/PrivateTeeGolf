// Back to Top Button - Shared Component
(function() {
    'use strict';

    // Initialize back to top button when DOM is ready
    function initBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');

        if (!backToTopBtn) {
            return; // Button not found, exit
        }

        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-4');
            } else {
                backToTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-4');
            }
        });

        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBackToTop);
    } else {
        initBackToTop();
    }
})();

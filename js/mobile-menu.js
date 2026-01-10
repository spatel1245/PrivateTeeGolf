// Mobile Menu Functionality - Shared Component
(function() {
    'use strict';

    // Initialize mobile menu when DOM is ready
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenuClose = document.getElementById('mobileMenuClose');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
        const mobileStickyBar = document.getElementById('mobileStickyBar');

        if (!mobileMenuBtn || !mobileMenu || !mobileMenuBackdrop) {
            return; // Menu elements not found, exit
        }

        function openMobileMenu() {
            mobileMenu.classList.add('open');
            mobileMenuBackdrop.classList.add('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
            if (mobileStickyBar) {
                mobileStickyBar.style.opacity = '0';
                mobileStickyBar.style.pointerEvents = 'none';
            }
        }

        function closeMobileMenu() {
            mobileMenu.classList.remove('open');
            mobileMenuBackdrop.classList.remove('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            if (mobileStickyBar) {
                mobileStickyBar.style.opacity = '1';
                mobileStickyBar.style.pointerEvents = 'auto';
            }
        }

        // Event listeners
        mobileMenuBtn.addEventListener('click', openMobileMenu);
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', closeMobileMenu);
        }
        if (mobileMenuBackdrop) {
            mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
        }

        // Close menu when clicking on a link
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
                closeMobileMenu();
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
})();

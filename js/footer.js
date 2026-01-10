// Footer Component - Shared Component
(function() {
    'use strict';

    // Initialize footer when DOM is ready
    function initFooter() {
        const footerContainer = document.getElementById('footerContainer');
        
        if (!footerContainer) {
            return; // Footer container not found, exit
        }

        // Determine if we're on the homepage or a subpage
        const isHomepage = window.location.pathname === '/' || window.location.pathname === '/index.html';
        const isCorporatePage = window.location.pathname.includes('/corporate/');
        const logoPath = isHomepage ? 'small_logo.jpg' : '../small_logo.jpg';

        // Build footer HTML
        const footerHTML = `
<footer class="border-t border-gray-200 bg-cardBg relative z-10">
    <!-- Main Footer Content -->
    <div class="max-w-6xl mx-auto px-6 py-12">
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <!-- Logo Section -->
            <div class="flex items-center gap-3">
                <img src="${logoPath}" alt="Private Tee Golf Logo" class="h-12 w-12 rounded-full border border-gray-200">
                <div>
                    <span class="font-serif text-gray-900 text-2xl font-bold tracking-tight block">Private Tee <span class="text-hunter">Golf.</span></span>
                    <div class="text-xs text-gray-700 mt-2 space-y-1">
                        <div class="flex items-start gap-2">
                            <svg class="w-3 h-3 mt-0.5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <a href="https://maps.app.goo.gl/mwQJ1wPZmTUbU8AbA" target="_blank" rel="noopener noreferrer" class="hover:text-hunter transition">5351 US-30, Greensburg, PA 15601</a>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-3 h-3 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <a href="tel:+18786453216" class="hover:text-hunter transition">(878) 645-3216</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact & Social Section -->
            <div class="flex flex-col items-center md:items-end gap-6">
                <!-- Contact Link -->
                <a href="/contact/" class="text-gray-900 hover:text-hunter transition duration-300 font-medium text-base">
                    Contact Us
                </a>
                ${!isCorporatePage ? `<!-- Corporate Link -->
                <a href="/corporate/" class="text-gray-900 hover:text-hunter transition duration-300 font-medium text-base">
                    Corporate Events
                </a>` : ''}

                <!-- Email -->
                <a href="mailto:info@privateteegolf.com" class="inline-flex items-center gap-2 text-hunter hover:text-emerald-600 transition group">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span class="text-base font-medium border-b border-hunter/30 ${isHomepage ? 'group-hover:border-emerald-400' : 'group-hover:border-emerald-600'}">info@privateteegolf.com</span>
                </a>

                <!-- Social Media -->
                <div class="flex gap-4">
                    <a href="https://www.instagram.com/private.tee.golf" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-hunter transition duration-300" aria-label="Instagram">
                        <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>

                    <a href="https://www.facebook.com/privateteegolf/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-hunter transition duration-300" aria-label="Facebook">
                        <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/company/private-tee-golf/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-hunter transition duration-300" aria-label="LinkedIn">
                        <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Bar - Copyright & Legal -->
    <div class="border-t border-gray-200 py-4 pb-24 md:pb-4">
        <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p class="text-[10px] text-gray-600">&copy; 2026 Private Tee Golf LLC. All rights reserved.</p>
            <div class="flex gap-4">
                <a href="/privacy/" class="text-[10px] text-gray-600 hover:text-gray-400 transition duration-300">
                    Privacy Policy
                </a>
                ${!isHomepage ? `<a href="/" class="text-[10px] text-gray-600 hover:text-gray-400 transition duration-300">
                    Home
                </a>` : ''}
            </div>
        </div>
    </div>
</footer>`;

        // Inject footer HTML
        footerContainer.innerHTML = footerHTML;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooter);
    } else {
        initFooter();
    }
})();

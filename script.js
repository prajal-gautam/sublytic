/* ============================================
   Script.js - Vanilla JavaScript for Sublytic
   ============================================ */

// ============================================
// Error Handling Wrapper
// ============================================
const ErrorHandler = {
    log: (error, context = '') => {
        const message = `[Sublytic Error${context ? ': ' + context : ''}] ${error.message || error}`;
        console.error(message, error);
    },
    handleAsync: async (fn, context = '') => {
        try {
            return await fn();
        } catch (error) {
            ErrorHandler.log(error, context);
        }
    },
    handleSync: (fn, context = '') => {
        try {
            return fn();
        } catch (error) {
            ErrorHandler.log(error, context);
        }
    }
};

// ============================================
// Global State & Constants
// ============================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let scrollY = 0;
let ticking = false;
let touchStartX = 0;
let touchEndX = 0;

// ============================================
// DOM Elements with null safety
// ============================================
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const currentYearSpan = document.getElementById('current-year');

// Validate critical DOM elements
if (!header || !mobileMenuBtn || !mobileMenu) {
    console.warn('Sublytic: Some navigation elements were not found in the DOM.');
}

// ============================================
// Header & Scroll Effects
// ============================================
function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

function handleParallax() {
    scrollY = window.scrollY;
    
    // Apply parallax to hero background (only if not prefers-reduced-motion)
    if (!prefersReducedMotion) {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
        }
    }
}

function animateOnScroll() {
    const revealElements = document.querySelectorAll(
        '.feature-item, .step-card, .team-card, .faq-item, .what-is-text'
    );
    
    revealElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 150;

        if (isVisible) {
            element.style.animation = `fadeInUp 0.6s ease-out ${index * 0.05}s both`;
        }
    });
}

function updateScrollValues() {
    handleParallax();
    handleHeaderScroll();
    animateOnScroll();
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateScrollValues);
        ticking = true;
    }
}, { passive: true });

// ============================================
// Mobile Menu Logic
// ============================================
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
        const isOpen = mobileMenu.classList.toggle('open');
        this.classList.toggle('open');
        this.setAttribute('aria-expanded', isOpen.toString());
        mobileMenu.setAttribute('aria-hidden', (!isOpen).toString());
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-link-mobile, .mobile-menu .btn-download').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileMenuBtn.classList.remove('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        });
    });
}

// ============================================
// Navigation & FAQ Actions
// ============================================
window.smoothScroll = function(elementId) {
    return ErrorHandler.handleSync(() => {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        const offset = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // UI Feedback
        const originalColor = element.style.backgroundColor;
        element.style.backgroundColor = 'rgba(37, 99, 235, 0.1)';
        setTimeout(() => { element.style.backgroundColor = originalColor; }, 600);
    }, 'smoothScroll');
};

window.toggleFAQ = function(button) {
    return ErrorHandler.handleSync(() => {
        const faqItem = button.parentElement;
        if (!faqItem) return;

        // Accordion effect: close others
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem && item.classList.contains('open')) {
                item.classList.remove('open');
                const btn = item.querySelector('.faq-question');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            }
        });

        const isOpen = faqItem.classList.toggle('open');
        button.setAttribute('aria-expanded', isOpen.toString());
    }, 'toggleFAQ');
};

// ============================================
// Visual Enhancements (Ripple & Mouse)
// ============================================
if (!prefersReducedMotion) {
    // Dynamic Ripple CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to { transform: scale(4); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function (e) {
            if (e.clientX === 0 && e.clientY === 0) return;
            
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            Object.assign(ripple.style, {
                position: 'absolute',
                width: `${size}px`,
                height: `${size}px`,
                left: `${e.clientX - rect.left - size / 2}px`,
                top: `${e.clientY - rect.top - size / 2}px`,
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                borderRadius: '50%',
                pointerEvents: 'none',
                animation: 'ripple 0.6s ease-out'
            });

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Card Hover Effect
document.querySelectorAll('.team-card, .feature-item, .step-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        this.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        this.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
});

// ============================================
// Swipe & Lifecycle
// ============================================
function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    if (diff > swipeThreshold && mobileMenu && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('open');
    }
}

document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
document.addEventListener('touchend', e => { 
    touchEndX = e.changedTouches[0].screenX; 
    handleSwipe(); 
}, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
    ErrorHandler.handleSync(() => {
        if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();
        handleHeaderScroll();
        
        // Hero animations
        if (!prefersReducedMotion) {
            document.querySelectorAll('.hero-title, .hero-subtitle, .hero-available, .btn-primary')
                .forEach((el, i) => {
                    el.style.animation = `fadeInUp 0.8s ease-out ${0.2 + (i * 0.2)}s both`;
                });
        }
    }, 'Page Initialization');
});

// ============================================
// Console Branding
// ============================================
console.log(
    '%c🚀 Sublytic',
    'font-size: 28px; font-weight: bold; background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; padding: 10px;'
);
console.log('%cStop Wasting Money on Forgotten Subscriptions 💰', 'font-size: 16px; color: #2563eb; font-weight: 600;');
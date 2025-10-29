// STRIDE Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const modalButtons = document.querySelectorAll('[data-modal]');
    
    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal functionality
    modals.forEach(modal => {
        const closeButton = modal.querySelector('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');
        
        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }
        
        if (overlay) {
            overlay.addEventListener('click', closeModal);
        }
        
        function closeModal() {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', function() {
                const isOpen = !answer.classList.contains('hidden');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    if (otherAnswer && otherIcon) {
                        otherAnswer.classList.add('hidden');
                        otherIcon.classList.remove('rotate-180');
                    }
                });
                
                // Toggle current item
                if (isOpen) {
                    answer.classList.add('hidden');
                    item.querySelector('.faq-icon').classList.remove('rotate-180');
                } else {
                    answer.classList.remove('hidden');
                    item.querySelector('.faq-icon').classList.add('rotate-180');
                }
            });
        }
    });
    
    // Problem Domain Accordion (Hackathon page)
    const domainItems = document.querySelectorAll('.domain-item');
    domainItems.forEach(item => {
        const header = item.querySelector('.domain-header');
        const content = item.querySelector('.domain-content');
        
        if (header && content) {
            header.addEventListener('click', function() {
                const isOpen = !content.classList.contains('hidden');
                
                // Close all other domain items
                domainItems.forEach(otherItem => {
                    const otherContent = otherItem.querySelector('.domain-content');
                    const otherIcon = otherItem.querySelector('.domain-icon');
                    if (otherContent && otherIcon) {
                        otherContent.classList.add('hidden');
                        otherIcon.classList.remove('rotate-180');
                    }
                });
                
                // Toggle current item
                if (isOpen) {
                    content.classList.add('hidden');
                    item.querySelector('.domain-icon').classList.remove('rotate-180');
                } else {
                    content.classList.remove('hidden');
                    item.querySelector('.domain-icon').classList.add('rotate-180');
                }
            });
        }
    });
    
    // Active navigation highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('text-stride-blue', 'font-semibold');
            link.classList.remove('text-gray-600', 'hover:text-stride-blue');
        }
    });
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
    
    // Newsletter form (placeholder functionality)
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // TODO: Implement actual newsletter subscription
            alert('Thank you for subscribing! This will be connected to a backend service.');
        });
    }
});

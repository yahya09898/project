// Mobile Navigation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileNavToggle && mobileNav) {
        mobileNavToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle active classes
            mobileNavToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
            
            // Add body scroll lock when menu is open
            if (mobileNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile nav when clicking on a link
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNavToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close mobile nav when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileNavToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileNavToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile nav on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mobileNavToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// Modern Image Animations JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Page Load Animations
    function initPageLoadAnimations() {
        const images = document.querySelectorAll('.image-animate');
        
        images.forEach((image) => {
            // No staggered delay - instant loading
                image.classList.add('loaded');
        });
    }
    
    // Scroll Reveal Animations - Triggers every time elements are crossed
    function initScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add revealed class to trigger animation
                    entry.target.classList.add('revealed');
                } else {
                    // Remove revealed class when element leaves viewport
                    // This allows the animation to trigger again when re-entering
                        entry.target.classList.remove('revealed');
                }
            });
        }, observerOptions);
        
        // Observe all scroll-reveal images
        const scrollRevealImages = document.querySelectorAll('.image-animate.scroll-reveal, .image-animate.scroll-reveal-left, .image-animate.scroll-reveal-right');
        scrollRevealImages.forEach(image => {
            observer.observe(image);
        });
    }
    
    // Interactive Tilt Effect
    function initTiltEffect() {
        // Tilt effect removed - no transitions
    }
    
    // Parallax Effect for Hero Decorative Images
    function initParallaxEffect() {
        // Parallax effect removed - no transitions
    }
    
    // Text Animations
    function initTextAnimations() {
        // Page load text animations
        const textElements = document.querySelectorAll('.text-animate');
        
        textElements.forEach((element) => {
            // No staggered delay - instant loading
                element.classList.add('loaded');
        });
    }
    
    // Text Scroll Reveal
    function initTextScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                } else {
                        entry.target.classList.remove('revealed');
                }
            });
        }, observerOptions);
        
        // Observe all text elements with scroll-reveal
        const textRevealElements = document.querySelectorAll('.text-animate.scroll-reveal, .text-animate.scroll-reveal-left, .text-animate.scroll-reveal-right');
        textRevealElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Feature Image Scroll Animations
    function initFeatureImageAnimations() {
        const featureImages = document.querySelectorAll('.feature-visual img');
        let lastScrollY = window.scrollY;
        let scrollDirection = 'down';
        
        // Track scroll direction
        function updateScrollDirection() {
            const currentScrollY = window.scrollY;
            scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
            lastScrollY = currentScrollY;
        }
        
        const observerOptions = {
            threshold: [0, 0.3, 0.7, 1],
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const img = entry.target;
                const ratio = entry.intersectionRatio;
                
                if (entry.isIntersecting) {
                    // Start animation when image comes into view
                    if (ratio < 0.3) {
                        img.classList.add('scroll-animate');
                        img.classList.remove('final', 'scroll-up', 'scroll-down');
                    } else if (ratio >= 0.3 && ratio < 0.7) {
                        img.classList.add('scroll-animate');
                        img.classList.remove('final', 'scroll-up', 'scroll-down');
                    } else if (ratio >= 0.7) {
                        img.classList.add('scroll-animate', 'final');
                        
                        // Add direction-based animation
                        if (scrollDirection === 'up') {
                            img.classList.add('scroll-up');
                            img.classList.remove('scroll-down');
                        } else {
                            img.classList.add('scroll-down');
                            img.classList.remove('scroll-up');
                        }
                    }
                } else {
                    // Reset animation when image leaves viewport
                    img.classList.remove('scroll-animate', 'final', 'scroll-up', 'scroll-down');
                }
            });
        }, observerOptions);
        
        featureImages.forEach(img => {
            observer.observe(img);
        });
        
        // Listen for scroll events to update direction
        window.addEventListener('scroll', updateScrollDirection, { passive: true });
    }
    
    // Smooth Parallax Effect for Decorative Images
    function initParallaxEffect() {
        let ticking = false;
        
        function updateParallax() {
            const scrollY = window.scrollY;
            
            // Update CSS custom property for parallax calculation
            document.documentElement.style.setProperty('--scroll-y', scrollY);
            
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }
        
        // Listen for scroll events
        window.addEventListener('scroll', requestTick, { passive: true });
        
        // Initialize on page load
        updateParallax();
    }
    
    // Initialize all animations
    initPageLoadAnimations();
    initScrollReveal();
    initTiltEffect();
    initParallaxEffect();
    initTextAnimations();
    initTextScrollReveal();
    initFeatureImageAnimations();
    initParallaxEffect();
    
    // Handle image loading
    window.addEventListener('load', function() {
        // Re-trigger animations after all images are loaded
            initPageLoadAnimations();
    });
});

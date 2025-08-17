// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Form submission - Handle both consultation and contact forms
    function handleFormSubmission(formId) {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(this);
                const data = Object.fromEntries(formData);
                
                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // Send form data
                fetch('/submit_consultation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Thank you! We will contact you soon.');
                        this.reset();
                    } else {
                        alert('Something went wrong. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Something went wrong. Please try again.');
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
            });
        }
    }

    // Handle both forms
    handleFormSubmission('consultationForm');
    handleFormSubmission('contactForm');

    // Gallery filtering and scrolling
    const filterButtons = document.querySelectorAll('.gallery-filters button');
    const gallerySections = document.querySelectorAll('.gallery-section');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button styling
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-outline-primary');
            });
            this.classList.remove('btn-outline-primary');
            this.classList.add('btn-primary');
            this.classList.add('active');
            
            if (filter === 'all') {
                // Show all sections with smooth transition
                gallerySections.forEach((section, index) => {
                    setTimeout(() => {
                        section.style.display = 'block';
                        section.style.opacity = '0';
                        section.style.transform = 'translateY(30px) scale(0.95)';
                        
                        // Trigger reflow
                        section.offsetHeight;
                        
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0) scale(1)';
                    }, index * 100);
                });
                
                // Scroll to gallery section
                document.getElementById('gallery').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Hide all sections with fade out
                gallerySections.forEach(section => {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(30px) scale(0.95)';
                    
                    setTimeout(() => {
                        section.style.display = 'none';
                    }, 300);
                });
                
                // Show only the selected category with smooth fade in
                const targetSection = document.querySelector(`[data-category="${filter}"]`);
                if (targetSection) {
                    setTimeout(() => {
                        targetSection.style.display = 'block';
                        targetSection.style.opacity = '0';
                        targetSection.style.transform = 'translateY(30px) scale(0.95)';
                        
                        // Trigger reflow
                        targetSection.offsetHeight;
                        
                        targetSection.style.opacity = '1';
                        targetSection.style.transform = 'translateY(0) scale(1)';
                        
                        // Scroll to the specific section
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 350);
                }
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.stat-item, .process-step, .service-card, .testimonial-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + '+';
            }
        };
        
        // Start counter when element is visible
        const statObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    statObserver.unobserve(entry.target);
                }
            });
        });
        
        statObserver.observe(stat);
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (mobileMenuBtn && navbarCollapse) {
        mobileMenuBtn.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
}); 
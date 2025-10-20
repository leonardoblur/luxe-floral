// Luxe Floral Boutique - Main JavaScript

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Color Swatch Selection
const swatches = document.querySelectorAll('.swatch');

swatches.forEach(swatch => {
    swatch.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const cardSwatches = card.querySelectorAll('.swatch');
        
        cardSwatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
    });
});

// Add to Cart
const addToCartBtns = document.querySelectorAll('.product-card .btn-secondary');
const cartCount = document.querySelector('.cart-count');
let cart = 0;

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cart++;
        cartCount.textContent = cart;
        
        btn.textContent = 'Added!';
        btn.style.backgroundColor = 'var(--purple-deep)';
        btn.style.color = 'var(--white)';
        
        setTimeout(() => {
            btn.textContent = 'Add to Cart';
            btn.style.backgroundColor = '';
            btn.style.color = '';
        }, 2000);
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .testimonial-card, .press-logo').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});

console.log('%c LUXE FLORAL ', 'background: #4B134F; color: #D4AF37; font-size: 20px; padding: 10px; font-family: Georgia;');
console.log('%c Portfolio project by Criatto Digital ', 'background: #FFB6C1; color: #4B134F; font-size: 14px; padding: 5px;');


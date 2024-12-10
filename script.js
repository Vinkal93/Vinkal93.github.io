// Custom Cursor
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});

// Animated Text
const words = ['Android Developer', 'UI Designer','Web Designer' ];
const colors = ['#F5CB4C', '#F3CCBA','#F5CB4C'];
let currentIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const animatedText = document.getElementById('animated-text');

function typeEffect() {
    const currentWord = words[currentIndex];
    const currentColor = colors[currentIndex];

    if (isDeleting) {
        animatedText.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        animatedText.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;
    }

    animatedText.style.backgroundColor = currentColor;

    if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

// Animated Circles
const circles = document.querySelectorAll('.animated-circle');

circles.forEach((circle, index) => {
    gsap.to(circle, {
        x: Math.random() * 40 - 20,
        y: Math.random() * 40 - 20,
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Fade-in Animation
const fadeElems = document.querySelectorAll('.feature-card, .about-content, .news-card');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElems.forEach(elem => {
    fadeInObserver.observe(elem);
});






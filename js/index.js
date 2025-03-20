// Image Slider Functionality
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlides() {
    slideIndex++;
    if (slideIndex >= totalSlides) slideIndex = 0;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    setTimeout(showSlides, 3000);
}

showSlides();

// Toggle Sidebar for Small Devices
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
}

// Close Sidebar Function
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('-translate-x-full');
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        const sidebar = document.getElementById('sidebar');
        if (!sidebar.classList.contains('-translate-x-full')) {
            sidebar.classList.add('-translate-x-full');
        }
    });
});

// Dynamic FAQ Accordion
function toggleFAQ(element) {
    const answer = element.querySelector('p');
    const icon = element.querySelector('i');
    const isOpen = !answer.classList.contains('hidden');

    document.querySelectorAll('.faq-item p').forEach(p => p.classList.add('hidden'));
    document.querySelectorAll('.faq-item i').forEach(i => i.classList.remove('rotate-180'));

    if (!isOpen) {
        answer.classList.remove('hidden');
        icon.classList.add('rotate-180');
    }
}

// Typing Effect for Hero Section
const typingText = document.getElementById('typingText');
const phrases = ['IoT | Automation | Robotics | Web Development', 'Innovating the Future', 'Tech That Transforms'];
let phraseIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < phrases[phraseIndex].length) {
        typingText.textContent = phrases[phraseIndex].substring(0, charIndex + 1);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    }
}

type();

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById('scrollProgress').style.width = `${scrollPercentage}%`;
});

// Intersection Observer for Fade-in Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax');
    const scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});




// Gallery JavaScript
const images = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    // 'https://images.unsplash.com/photo-1519125323398-675f398f6978',
    // 'https://images.unsplash.com/photo-1521747116042-5a810773f39e',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d'
];

const gallery = document.getElementById('gallery3d');
let currentAngle = 0;
const totalItems = images.length;

function createGalleryItems() {
    images.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${src}" alt="Gallery Image ${index + 1}">`;
        const angle = (360 / totalItems) * index;
        item.style.transform = `rotateY(${angle}deg) translateZ(150px)`; // Radius remains 400px
        gallery.appendChild(item);
    });
}

function updateGallery() {
    gallery.style.transform = `rotateY(${currentAngle}deg)`;
}

// Auto-rotate only (no buttons)
let autoRotate = setInterval(() => {
    currentAngle -= 360 / totalItems;
    updateGallery();
}, 4000);

gallery.addEventListener('mouseenter', () => clearInterval(autoRotate));
gallery.addEventListener('mouseleave', () => {
    autoRotate = setInterval(() => {
        currentAngle -= 360 / totalItems;
        updateGallery();
    }, 3000);
});

createGalleryItems();
updateGallery();

// Sidebar JavaScript
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('-translate-x-full');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.add('-translate-x-full');
}



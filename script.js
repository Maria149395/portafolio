// ===== STARS =====
(function () {
    const c = document.getElementById('stars');
    for (let i = 0; i < 80; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.animationDelay = Math.random() * 3 + 's';
        s.style.animationDuration = (2 + Math.random() * 3) + 's';
        s.style.width = s.style.height = (2 + Math.random() * 3) + 'px';
        c.appendChild(s);
    }
})();

// ===== FLOATING HEARTS =====
(function () {
    const c = document.getElementById('hearts');
    const icons = ['\uD83D\uDC9C', '\uD83D\uDC9C', '\uD83E\uDD0D', '\uD83D\uDC9C', '\u2728', '\uD83E\uDD8B'];
    for (let i = 0; i < 15; i++) {
        const el = document.createElement('div');
        el.className = 'heart';
        el.textContent = icons[Math.floor(Math.random() * icons.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.animationDelay = Math.random() * 10 + 's';
        el.style.animationDuration = (6 + Math.random() * 6) + 's';
        el.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
        c.appendChild(el);
    }
})();

// ===== NAVBAR SCROLL =====
var navbar = document.getElementById('navbar');
var backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
    var scrolled = window.scrollY > 80;
    navbar.classList.toggle('scrolled', scrolled);
    backToTop.classList.toggle('visible', scrolled);
});

// ===== MOBILE MENU =====
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
    document.getElementById('menuToggle').classList.toggle('active');
}
function closeMenu() {
    document.getElementById('navLinks').classList.remove('active');
    document.getElementById('menuToggle').classList.remove('active');
}

// ===== SCROLL REVEAL =====
function revealOnScroll() {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== MODAL =====
function openModal(src) {
    document.getElementById('modalImg').src = src;
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}
document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

// ===== CERTIFICATE FILTER (BUG FIX) =====
// The previous version used the implicit `event` object inside onclick,
// which is unreliable across browsers. Now we attach listeners properly
// and pass the clicked button explicitly.
document.querySelectorAll('.cert-filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var category = this.getAttribute('data-filter');

        // Update active button
        document.querySelectorAll('.cert-filter-btn').forEach(function (b) {
            b.classList.remove('active');
        });
        this.classList.add('active');

        // Show / hide cards
        document.querySelectorAll('.cert-card').forEach(function (card) {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ===== BACK TO TOP =====
backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

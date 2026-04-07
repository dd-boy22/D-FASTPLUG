document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        const icon = hamburgerBtn.querySelector('.material-symbols-outlined');
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            if (navMenu.classList.contains('open')) {
                icon.textContent = 'close';
            } else {
                icon.textContent = 'menu';
            }
        });
    }

    // WhatsApp Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const budget = document.getElementById('contact-budget').value;
            const message = document.getElementById('contact-message').value.trim();

            const whatsappNumber = '2349064849582';
            const whatsappMessage = `*New Contact Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Budget Range:* ${budget}\n*Message:* ${message}`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
        });
    }
});

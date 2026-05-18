document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');

        // We remove e.preventDefault() so the form actually submits to Formspree
        orderForm.addEventListener('submit', () => {
            // We can still show a message before the page redirects
            alert("Thank you! You are now being redirected to complete the verification.");
        });
        // Get values
        const name = document.getElementById('name').value;
        const service = document.getElementById('service-type').value;

        // Visual feedback
        alert(`Thank you, ${name}! Your request for ${service} has been received. We will contact you shortly.`);
        
        // Reset the form
        orderForm.reset();
    });

    // Simple scroll reveal effect
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const section = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: section.offsetTop - 70, // -70 keeps it from hiding under the navbar
            behavior: 'smooth'
        });
    });
});
// Fade-in animation for team cards
const observerTeam = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.team-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.8s ease-out';
    observerTeam.observe(card);
});

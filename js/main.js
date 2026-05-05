
document.addEventListener('DOMContentLoaded', () => {
    // Smooth reveal logic
    const reveal = () => {
        const reveals = document.querySelectorAll('.card, .content-section, .about-box, .hero');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 100; // Trigger slightly earlier for better "flow"
            
            if (elementTop < windowHeight - elementVisible) {
                // Add a small staggered delay based on index for cards in a grid
                if (reveals[i].classList.contains('card')) {
                    const parent = reveals[i].parentElement;
                    const cards = Array.from(parent.querySelectorAll('.card'));
                    const index = cards.indexOf(reveals[i]);
                    reveals[i].style.transitionDelay = `${index * 0.15}s`;
                }
                
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    
    // Trigger once on load
    setTimeout(reveal, 100);
});

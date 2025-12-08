class ParallaxEffect {
    constructor() {
        this.sections = document.querySelectorAll('.parallax-section');
        this.backgrounds = document.querySelectorAll('.parallax-bg');
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Mouse move parallax
        document.addEventListener('mousemove', (e) => {
            this.handleMouseMove(e);
        });
        
        // Scroll parallax
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
        
        // Initial setup
        this.handleScroll();
    }
    
    handleMouseMove(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        this.backgrounds.forEach(bg => {
            const speed = 0.5;
            const x = (mouseX - 0.5) * speed * 100;
            const y = (mouseY - 0.5) * speed * 100;
            
            bg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
        });
    }
    
    handleScroll() {
        this.sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const scrollPercent = (rect.top + rect.height / 2) / window.innerHeight;
            
            if (scrollPercent > 0 && scrollPercent < 1) {
                const bg = section.querySelector('.parallax-bg');
                const yOffset = scrollPercent * 50 - 25;
                bg.style.transform = `translateY(${yOffset}px) scale(1.1)`;
            }
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new ParallaxEffect();
});
class WaterEffect {
    constructor() {
        this.canvas = document.getElementById('waterCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.drops = [];
        this.mouse = { x: 0, y: 0, radius: 100 };
        
        this.init();
        this.animate();
        this.setupEventListeners();
    }
    
    init() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
        // Create water drops
        for (let i = 0; i < 150; i++) {
            this.drops.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 3 + 1,
                speed: Math.random() * 0.5 + 0.2,
                originalRadius: 0
            });
        }
    }
    
    setupEventListeners() {
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
        });
        
        // Enter button
        document.getElementById('enterArrow').addEventListener('click', () => {
            this.hideLoadingScreen();
        });
    }
    
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const mainContent = document.getElementById('mainContent');
        
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            document.body.classList.remove('no-scroll');
        }, 1000);
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Update and draw drops
        this.drops.forEach(drop => {
            // Calculate distance from mouse
            const dx = this.mouse.x - drop.x;
            const dy = this.mouse.y - drop.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Mouse interaction
            if (distance < this.mouse.radius) {
                const force = (this.mouse.radius - distance) / this.mouse.radius;
                const angle = Math.atan2(dy, dx);
                
                drop.x -= Math.cos(angle) * force * 5;
                drop.y -= Math.sin(angle) * force * 5;
                
                // Add ripple effect
                if (!drop.originalRadius) drop.originalRadius = drop.radius;
                drop.radius = drop.originalRadius * (1 + force * 2);
            } else {
                // Return to original size
                if (drop.originalRadius) {
                    drop.radius += (drop.originalRadius - drop.radius) * 0.1;
                }
                
                // Natural movement
                drop.y += drop.speed;
                if (drop.y > this.height) {
                    drop.y = -10;
                    drop.x = Math.random() * this.width;
                }
            }
            
            // Draw drop
            this.ctx.beginPath();
            this.ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(173, 216, 230, 0.3)';
            this.ctx.fill();
            
            // Draw glow
            const gradient = this.ctx.createRadialGradient(
                drop.x, drop.y, 0,
                drop.x, drop.y, drop.radius * 2
            );
            gradient.addColorStop(0, 'rgba(173, 216, 230, 0.2)');
            gradient.addColorStop(1, 'rgba(173, 216, 230, 0)');
            
            this.ctx.beginPath();
            this.ctx.arc(drop.x, drop.y, drop.radius * 2, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    new WaterEffect();
});
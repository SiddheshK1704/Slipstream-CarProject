class DreamGarage {
    constructor() {
        this.cars = this.getGarageCars();
        this.init();
    }
    
    getGarageCars() {
        return [
            {
                id: 1,
                name: "Porsche 911 GT3 RS",
                brand: "Porsche",
                year: "2024",
                power: "518 HP",
                torque: "342 lb-ft",
                acceleration: "3.0s",
                topspeed: "184 mph",
                price: "$241,300",
                image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "The ultimate track-focused 911. This is pure motorsport technology for the road, with aerodynamics derived from GT race cars and a screaming naturally-aspirated engine.",
                favorite: true,
                color: "Guards Red",
                drivetrain: "RWD",
                engine: "4.0L Flat-6",
                whyLove: "Perfect balance of daily usability and track performance",
                brandClass: "porsche-badge"
            },
            {
                id: 2,
                name: "Ferrari 812 Superfast",
                brand: "Ferrari",
                year: "2023",
                power: "789 HP",
                torque: "530 lb-ft",
                acceleration: "2.9s",
                topspeed: "211 mph",
                price: "$335,000",
                image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "The last of the great naturally-aspirated V12 Ferraris. A front-engined GT that delivers both sublime luxury and terrifying performance.",
                favorite: true,
                color: "Rosso Corsa",
                drivetrain: "RWD",
                engine: "6.5L V12",
                whyLove: "That screaming V12 engine is one of the best sounds ever made",
                brandClass: "ferrari-badge"
            },
            {
                id: 3,
                name: "Lamborghini Huracán STO",
                brand: "Lamborghini",
                year: "2024",
                power: "631 HP",
                torque: "417 lb-ft",
                acceleration: "3.0s",
                topspeed: "193 mph",
                price: "$331,000",
                image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Street-legal race car with Super Trofeo and GT3 DNA. Aerodynamics that generate massive downforce and a chassis setup for maximum attack.",
                favorite: false,
                color: "Blu Cephus",
                drivetrain: "RWD",
                engine: "5.2L V10",
                whyLove: "Theatrical design with serious track capability",
                brandClass: "lamborghini-badge"
            },
            {
                id: 4,
                name: "McLaren 765LT",
                brand: "McLaren",
                year: "2023",
                power: "755 HP",
                torque: "590 lb-ft",
                acceleration: "2.7s",
                topspeed: "205 mph",
                price: "$358,000",
                image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "The Longtail philosophy taken to extremes. Lighter, faster, more powerful, and more engaging than any McLaren before it.",
                favorite: true,
                color: "Mauro Fusion Red",
                drivetrain: "RWD",
                engine: "4.0L Twin-Turbo V8",
                whyLove: "Unbelievable acceleration and handling balance",
                brandClass: "mclaren-badge"
            },
            {
                id: 5,
                name: "Bugatti Chiron",
                brand: "Bugatti",
                year: "2022",
                power: "1479 HP",
                torque: "1180 lb-ft",
                acceleration: "2.4s",
                topspeed: "261 mph",
                price: "$3,300,000",
                image: "https://images.unsplash.com/photo-1563720223488-8f2f62a6e71a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "The ultimate expression of speed and luxury. A hypercar that can cross continents at 250 mph while coddling occupants in absolute luxury.",
                favorite: true,
                color: "Bugatti Blue",
                drivetrain: "AWD",
                engine: "8.0L Quad-Turbo W16",
                whyLove: "Engineering masterpiece that redefines what's possible",
                brandClass: "bugatti-badge"
            },
            {
                id: 6,
                name: "Koenigsegg Jesko",
                brand: "Koenigsegg",
                year: "2024",
                power: "1600 HP",
                torque: "1106 lb-ft",
                acceleration: "2.5s",
                topspeed: "300+ mph",
                price: "$3,000,000",
                image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "A technological marvel from the Swedish hypercar maker. Features revolutionary aerodynamics and a lightning-fast 9-speed gearbox.",
                favorite: false,
                color: "Rebel Blue",
                drivetrain: "RWD",
                engine: "5.0L Twin-Turbo V8",
                whyLove: "Boundary-pushing engineering and innovation",
                brandClass: "koenigsegg-badge"
            }
        ];
    }
    
    init() {
        this.loadGarageCars();
        this.loadGarageStats();
    }
    
    loadGarageCars() {
        const garageDiv = document.getElementById('garageCars');
        garageDiv.innerHTML = '';
        
        this.cars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'garage-card rounded-2xl overflow-hidden';
            carCard.innerHTML = `
                <div class="relative">
                    <img src="${car.image}" alt="${car.name}" class="w-full h-64 object-cover">
                    ${car.favorite ? `<div class="absolute top-4 right-4 heart-icon">
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                        </svg>
                    </div>` : ''}
                    <div class="absolute bottom-4 left-4 ${car.brandClass}">
                        ${car.brand}
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-2xl font-bold mb-1">${car.name}</h3>
                            <p class="text-gray-400">${car.year} • ${car.color}</p>
                        </div>
                        <div class="text-right">
                            <div class="text-2xl font-bold text-green-400">${car.price}</div>
                            <div class="text-sm text-gray-400">MSRP</div>
                        </div>
                    </div>
                    
                    <p class="text-gray-300 mb-6">${car.description}</p>
                    
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div class="stat-card">
                            <div class="text-gray-400 text-sm mb-1">Power</div>
                            <div class="text-xl font-bold text-red-400">${car.power}</div>
                        </div>
                        <div class="stat-card">
                            <div class="text-gray-400 text-sm mb-1">0-60 mph</div>
                            <div class="text-xl font-bold">${car.acceleration}</div>
                        </div>
                        <div class="stat-card">
                            <div class="text-gray-400 text-sm mb-1">Engine</div>
                            <div class="text-xl font-bold">${car.engine}</div>
                        </div>
                        <div class="stat-card">
                            <div class="text-gray-400 text-sm mb-1">Top Speed</div>
                            <div class="text-xl font-bold">${car.topspeed}</div>
                        </div>
                    </div>
                    
                    <div class="bg-black/30 rounded-xl p-4">
                        <div class="flex items-center mb-2">
                            <svg class="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="font-semibold">Why I Love This Car</span>
                        </div>
                        <p class="text-gray-300 text-sm">${car.whyLove}</p>
                    </div>
                </div>
            `;
            
            garageDiv.appendChild(carCard);
        });
    }
    
    loadGarageStats() {
        const statsDiv = document.getElementById('garageStats');
        
        // Calculate statistics
        const totalCars = this.cars.length;
        const favoriteCars = this.cars.filter(car => car.favorite).length;
        const totalPower = this.cars.reduce((sum, car) => sum + this.extractNumber(car.power), 0);
        const avgPower = Math.round(totalPower / totalCars);
        const totalValue = this.cars.reduce((sum, car) => {
            const price = this.extractNumber(car.price.replace(/[^0-9.]/g, ''));
            return sum + price;
        }, 0);
        
        const stats = [
            {
                title: "Total Cars",
                value: totalCars,
                icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                color: "from-blue-500 to-cyan-500"
            },
            {
                title: "Favorites",
                value: favoriteCars,
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                color: "from-red-500 to-pink-500"
            },
            {
                title: "Avg Power",
                value: `${avgPower} HP`,
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                color: "from-orange-500 to-yellow-500"
            },
            {
                title: "Garage Value",
                value: `$${(totalValue / 1000000).toFixed(1)}M`,
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "from-green-500 to-emerald-500"
            }
        ];
        
        statsDiv.innerHTML = '';
        
        stats.forEach(stat => {
            const statCard = document.createElement('div');
            statCard.className = 'stat-card';
            statCard.innerHTML = `
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mr-4">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${stat.icon}"></path>
                        </svg>
                    </div>
                    <div>
                        <div class="text-3xl font-bold">${stat.value}</div>
                        <div class="text-gray-400 text-sm">${stat.title}</div>
                    </div>
                </div>
                <div class="text-gray-300 text-sm">
                    ${this.getStatDescription(stat.title, stat.value)}
                </div>
            `;
            
            statsDiv.appendChild(statCard);
        });
    }
    
    getStatDescription(title, value) {
        switch(title) {
            case "Total Cars":
                return "A carefully curated collection representing the pinnacle of automotive engineering.";
            case "Favorites":
                return "The cars that truly make my heart race. These are the ones I'd choose first.";
            case "Avg Power":
                return "Enough combined horsepower to light up a small city. Pure automotive might.";
            case "Garage Value":
                return "Priceless in terms of passion, but here's the monetary estimate anyway.";
            default:
                return "";
        }
    }
    
    extractNumber(str) {
        const match = str.match(/(\d+\.?\d*)/);
        return match ? parseFloat(match[1]) : 0;
    }
}

// Initialize garage when page loads
document.addEventListener('DOMContentLoaded', () => {
    new DreamGarage();
});
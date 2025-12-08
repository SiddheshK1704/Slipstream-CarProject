class CarComparison {
    constructor() {
        this.car1 = null;
        this.car2 = null;
        this.currentSelection = null; // 'car1' or 'car2'
        this.cars = this.getCarData();
        
        this.init();
    }
    
    getCarData() {
        return [
            {
                id: 1,
                name: "Porsche 911 Turbo S",
                brand: "Porsche",
                year: "2024",
                power: "640 HP",
                torque: "590 lb-ft",
                acceleration: "2.6s",
                topspeed: "205 mph",
                price: "$216,100",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                rating: 9.2
            },
            {
                id: 2,
                name: "Ferrari SF90 Stradale",
                brand: "Ferrari",
                year: "2024",
                power: "986 HP",
                torque: "590 lb-ft",
                acceleration: "2.5s",
                topspeed: "211 mph",
                price: "$625,000",
                image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                rating: 9.8
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
                rating: 9.0
            },
            {
                id: 4,
                name: "McLaren 720S",
                brand: "McLaren",
                year: "2024",
                power: "710 HP",
                torque: "568 lb-ft",
                acceleration: "2.8s",
                topspeed: "212 mph",
                price: "$305,000",
                image: "https://images.unsplash.com/photo-1621395101797-7e7b00c9b6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                rating: 9.4
            },
            {
                id: 5,
                name: "Bugatti Chiron Super Sport",
                brand: "Bugatti",
                year: "2024",
                power: "1577 HP",
                torque: "1180 lb-ft",
                acceleration: "2.4s",
                topspeed: "273 mph",
                price: "$3,900,000",
                image: "https://images.unsplash.com/photo-1563720223488-8f2f62a6e71a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                rating: 10.0
            },
            {
                id: 6,
                name: "Koenigsegg Jesko Absolut",
                brand: "Koenigsegg",
                year: "2024",
                power: "1600 HP",
                torque: "1106 lb-ft",
                acceleration: "2.5s",
                topspeed: "330 mph",
                price: "$3,000,000",
                image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                rating: 9.9
            },
            {
                id: 7,
                name: "Porsche Taycan Turbo S",
                brand: "Porsche",
                year: "2024",
                power: "750 HP",
                torque: "774 lb-ft",
                acceleration: "2.6s",
                topspeed: "161 mph",
                price: "$210,000",
                image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                rating: 8.8
            },
            {
                id: 8,
                name: "Ferrari 296 GTB",
                brand: "Ferrari",
                year: "2023",
                power: "818 HP",
                torque: "546 lb-ft",
                acceleration: "2.9s",
                topspeed: "205 mph",
                price: "$350,000",
                image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                rating: 9.1
            },
            {
                id: 9,
                name: "Lamborghini Revuelto",
                brand: "Lamborghini",
                year: "2024",
                power: "1001 HP",
                torque: "793 lb-ft",
                acceleration: "2.5s",
                topspeed: "217 mph",
                price: "$600,000",
                image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                rating: 9.7
            },
            {
                id: 10,
                name: "McLaren Artura",
                brand: "McLaren",
                year: "2024",
                power: "671 HP",
                torque: "531 lb-ft",
                acceleration: "3.0s",
                topspeed: "205 mph",
                price: "$237,500",
                image: "https://images.unsplash.com/photo-1621395102010-6af7c613c2c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                rating: 8.9
            }
        ];
    }
    
    init() {
        this.setupEventListeners();
        this.loadCarGrid();
    }
    
    setupEventListeners() {
        // Car selectors
        document.getElementById('car1Selector').addEventListener('click', () => {
            this.currentSelection = 'car1';
            this.openCarModal();
        });
        
        document.getElementById('car2Selector').addEventListener('click', () => {
            this.currentSelection = 'car2';
            this.openCarModal();
        });
        
        // Close modal
        document.getElementById('closeModal').addEventListener('click', () => {
            this.closeCarModal();
        });
        
        // Close modal on background click
        document.getElementById('carModal').addEventListener('click', (e) => {
            if (e.target.id === 'carModal') {
                this.closeCarModal();
            }
        });
        
        // Search functionality
        document.getElementById('carSearch').addEventListener('input', (e) => {
            this.filterCars(e.target.value);
        });
    }
    
    openCarModal() {
        document.getElementById('carModal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    closeCarModal() {
        document.getElementById('carModal').classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    
    loadCarGrid() {
        const grid = document.getElementById('carsGrid');
        grid.innerHTML = '';
        
        this.cars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'bg-white/5 rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-colors';
            carCard.innerHTML = `
                <img src="${car.image}" alt="${car.name}" class="w-full h-32 object-cover rounded-lg mb-3">
                <h3 class="font-bold text-lg mb-1">${car.name}</h3>
                <div class="flex justify-between text-sm text-gray-400">
                    <span>${car.brand}</span>
                    <span>${car.year}</span>
                </div>
                <div class="mt-2 flex justify-between items-center">
                    <span class="text-red-400 font-semibold">${car.power}</span>
                    <span class="text-green-400">${car.price}</span>
                </div>
            `;
            
            carCard.addEventListener('click', () => {
                this.selectCar(car);
            });
            
            grid.appendChild(carCard);
        });
    }
    
    filterCars(searchTerm) {
        const filteredCars = this.cars.filter(car => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.brand.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        const grid = document.getElementById('carsGrid');
        grid.innerHTML = '';
        
        if (filteredCars.length === 0) {
            grid.innerHTML = `
                <div class="col-span-4 text-center py-8 text-gray-500">
                    <p class="text-lg">No cars found matching "${searchTerm}"</p>
                </div>
            `;
            return;
        }
        
        filteredCars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'bg-white/5 rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-colors';
            carCard.innerHTML = `
                <img src="${car.image}" alt="${car.name}" class="w-full h-32 object-cover rounded-lg mb-3">
                <h3 class="font-bold text-lg mb-1">${car.name}</h3>
                <div class="flex justify-between text-sm text-gray-400">
                    <span>${car.brand}</span>
                    <span>${car.year}</span>
                </div>
                <div class="mt-2 flex justify-between items-center">
                    <span class="text-red-400 font-semibold">${car.power}</span>
                    <span class="text-green-400">${car.price}</span>
                </div>
            `;
            
            carCard.addEventListener('click', () => {
                this.selectCar(car);
            });
            
            grid.appendChild(carCard);
        });
    }
    
    selectCar(car) {
        if (this.currentSelection === 'car1') {
            this.car1 = car;
            this.displaySelectedCar(car, 'car1');
        } else {
            this.car2 = car;
            this.displaySelectedCar(car, 'car2');
        }
        
        this.closeCarModal();
        
        // If both cars are selected, show comparison
        if (this.car1 && this.car2) {
            this.showComparison();
        }
    }
    
    displaySelectedCar(car, position) {
        const placeholder = document.getElementById(`${position}Placeholder`);
        const selectedDiv = document.getElementById(`${position}Selected`);
        
        placeholder.classList.add('hidden');
        selectedDiv.classList.remove('hidden');
        selectedDiv.innerHTML = `
            <div class="flex flex-col h-full">
                <img src="${car.image}" alt="${car.name}" class="w-full h-40 object-cover rounded-lg mb-4">
                <h3 class="text-2xl font-bold mb-2">${car.name}</h3>
                <div class="space-y-2">
                    <div class="flex justify-between">
                        <span class="text-gray-400">Brand:</span>
                        <span class="font-semibold">${car.brand}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-400">Power:</span>
                        <span class="font-semibold text-red-400">${car.power}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-400">Price:</span>
                        <span class="font-semibold text-green-400">${car.price}</span>
                    </div>
                </div>
                <button class="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm change-car" data-position="${position}">
                    Change Car
                </button>
            </div>
        `;
        
        // Add event listener to change car button
        selectedDiv.querySelector('.change-car').addEventListener('click', (e) => {
            e.stopPropagation();
            this.currentSelection = position;
            this.openCarModal();
        });
    }
    
    showComparison() {
        const resultsDiv = document.getElementById('comparisonResults');
        
        // Clear existing results
        resultsDiv.innerHTML = '';
        
        // Add comparison table
        resultsDiv.innerHTML = `
            <div class="bg-white/5 rounded-2xl p-8 mb-8">
                <h2 class="text-3xl font-bold mb-6 text-center">Head-to-Head Comparison</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Car 1 -->
                    <div class="comparison-card rounded-xl p-6" id="car1Comparison">
                        <div class="text-center mb-4">
                            <img src="${this.car1.image}" alt="${this.car1.name}" class="w-full h-48 object-cover rounded-lg mb-4">
                            <h3 class="text-2xl font-bold mb-2">${this.car1.name}</h3>
                            <p class="text-gray-400">${this.car1.brand} • ${this.car1.year}</p>
                        </div>
                    </div>
                    
                    <!-- Specifications -->
                    <div class="space-y-6">
                        ${this.createSpecificationRow('Power', this.car1.power, this.car2.power)}
                        ${this.createSpecificationRow('Torque', this.car1.torque, this.car2.torque)}
                        ${this.createSpecificationRow('0-60 mph', this.car1.acceleration, this.car2.acceleration)}
                        ${this.createSpecificationRow('Top Speed', this.car1.topspeed, this.car2.topspeed)}
                        ${this.createSpecificationRow('Price', this.car1.price, this.car2.price)}
                        ${this.createRatingRow('Rating', this.car1.rating, this.car2.rating)}
                    </div>
                    
                    <!-- Car 2 -->
                    <div class="comparison-card rounded-xl p-6" id="car2Comparison">
                        <div class="text-center mb-4">
                            <img src="${this.car2.image}" alt="${this.car2.name}" class="w-full h-48 object-cover rounded-lg mb-4">
                            <h3 class="text-2xl font-bold mb-2">${this.car2.name}</h3>
                            <p class="text-gray-400">${this.car2.brand} • ${this.car2.year}</p>
                        </div>
                    </div>
                </div>
                
                <!-- Verdict -->
                <div class="mt-8 pt-8 border-t border-white/10">
                    <h3 class="text-2xl font-bold mb-4 text-center">The Verdict</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-white/5 rounded-xl p-6">
                            <h4 class="font-bold text-lg mb-3 text-green-400">${this.car1.name} Wins At:</h4>
                            <ul class="space-y-2">
                                ${this.generateVerdictPoints(this.car1, this.car2).map(point => `<li class="flex items-center"><svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>${point}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="bg-white/5 rounded-xl p-6">
                            <h4 class="font-bold text-lg mb-3 text-green-400">${this.car2.name} Wins At:</h4>
                            <ul class="space-y-2">
                                ${this.generateVerdictPoints(this.car2, this.car1).map(point => `<li class="flex items-center"><svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>${point}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center">
                <button id="newComparison" class="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all transform hover:scale-105">
                    Start New Comparison
                </button>
            </div>
        `;
        
        // Add winner highlights
        this.highlightWinners();
        
        // Add event listener to new comparison button
        document.getElementById('newComparison').addEventListener('click', () => {
            this.resetComparison();
        });
    }
    
    createSpecificationRow(label, value1, value2) {
        const num1 = this.extractNumber(value1);
        const num2 = this.extractNumber(value2);
        
        let winner1 = '';
        let winner2 = '';
        
        if (num1 > num2) {
            winner1 = 'winner';
        } else if (num2 > num1) {
            winner2 = 'winner';
        }
        
        return `
            <div class="space-y-2">
                <div class="flex justify-between items-center">
                    <span class="text-gray-400">${label}</span>
                    <div class="flex space-x-4">
                        <span class="font-semibold ${winner1} px-3 py-1 rounded">${value1}</span>
                        <span class="font-semibold ${winner2} px-3 py-1 rounded">${value2}</span>
                    </div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill bg-gradient-to-r from-red-500 to-orange-500" style="width: ${(num1/(num1+num2))*100}%"></div>
                </div>
            </div>
        `;
    }
    
    createRatingRow(label, rating1, rating2) {
        const percentage1 = (rating1 / 10) * 100;
        const percentage2 = (rating2 / 10) * 100;
        
        let winner1 = '';
        let winner2 = '';
        
        if (rating1 > rating2) {
            winner1 = 'winner';
        } else if (rating2 > rating1) {
            winner2 = 'winner';
        }
        
        return `
            <div class="space-y-2">
                <div class="flex justify-between items-center">
                    <span class="text-gray-400">${label}</span>
                    <div class="flex space-x-4">
                        <span class="font-semibold ${winner1} px-3 py-1 rounded">${rating1}/10</span>
                        <span class="font-semibold ${winner2} px-3 py-1 rounded">${rating2}/10</span>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="progress-bar">
                        <div class="progress-fill bg-gradient-to-r from-yellow-500 to-yellow-300" style="width: ${percentage1}%"></div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill bg-gradient-to-r from-yellow-500 to-yellow-300" style="width: ${percentage2}%"></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    extractNumber(str) {
        const match = str.match(/(\d+\.?\d*)/);
        return match ? parseFloat(match[1]) : 0;
    }
    
    highlightWinners() {
        const specs = [
            { label: 'power', getter: car => this.extractNumber(car.power) },
            { label: 'acceleration', getter: car => 1/this.extractNumber(car.acceleration) }, // Lower is better
            { label: 'topspeed', getter: car => this.extractNumber(car.topspeed) },
            { label: 'price', getter: car => 1/this.extractNumber(car.price.replace(/[^0-9.]/g, '')) }, // Lower is better
            { label: 'rating', getter: car => car.rating }
        ];
        
        let car1Wins = 0;
        let car2Wins = 0;
        
        specs.forEach(spec => {
            const val1 = spec.getter(this.car1);
            const val2 = spec.getter(this.car2);
            
            if (val1 > val2) car1Wins++;
            else if (val2 > val1) car2Wins++;
        });
        
        const car1Div = document.getElementById('car1Comparison');
        const car2Div = document.getElementById('car2Comparison');
        
        if (car1Wins > car2Wins) {
            car1Div.classList.add('winner');
            car1Div.innerHTML = car1Div.innerHTML.replace('</h3>', `</h3><div class="mt-2 inline-block px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full">WINNER (${car1Wins}/${specs.length})</div>`);
        } else if (car2Wins > car1Wins) {
            car2Div.classList.add('winner');
            car2Div.innerHTML = car2Div.innerHTML.replace('</h3>', `</h3><div class="mt-2 inline-block px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full">WINNER (${car2Wins}/${specs.length})</div>`);
        } else {
            car1Div.innerHTML = car1Div.innerHTML.replace('</h3>', `</h3><div class="mt-2 inline-block px-3 py-1 bg-yellow-600 text-white text-sm font-semibold rounded-full">TIE</div>`);
            car2Div.innerHTML = car2Div.innerHTML.replace('</h3>', `</h3><div class="mt-2 inline-block px-3 py-1 bg-yellow-600 text-white text-sm font-semibold rounded-full">TIE</div>`);
        }
    }
    
    generateVerdictPoints(winnerCar, loserCar) {
        const points = [];
        
        // Power comparison
        const power1 = this.extractNumber(winnerCar.power);
        const power2 = this.extractNumber(loserCar.power);
        if (power1 > power2) {
            points.push(`${power1 - power2} more horsepower`);
        }
        
        // Acceleration comparison (lower is better)
        const acc1 = this.extractNumber(winnerCar.acceleration);
        const acc2 = this.extractNumber(loserCar.acceleration);
        if (acc1 < acc2) {
            points.push(`${(acc2 - acc1).toFixed(1)}s faster 0-60 mph`);
        }
        
        // Price comparison (lower is better)
        const price1 = this.extractNumber(winnerCar.price.replace(/[^0-9.]/g, ''));
        const price2 = this.extractNumber(loserCar.price.replace(/[^0-9.]/g, ''));
        if (price1 < price2) {
            const difference = price2 - price1;
            if (difference > 1000000) {
                points.push(`$${(difference/1000000).toFixed(1)}M more affordable`);
            } else if (difference > 1000) {
                points.push(`$${(difference/1000).toFixed(0)}K more affordable`);
            } else {
                points.push(`$${difference.toFixed(0)} more affordable`);
            }
        }
        
        // Rating comparison
        if (winnerCar.rating > loserCar.rating) {
            points.push(`Higher rating (${winnerCar.rating.toFixed(1)}/10)`);
        }
        
        // Add some generic positive points if needed
        if (points.length < 2) {
            points.push("Better value for money");
            points.push("Superior driving experience");
        }
        
        return points.slice(0, 3); // Return top 3 points
    }
    
    resetComparison() {
        this.car1 = null;
        this.car2 = null;
        
        // Reset UI
        document.getElementById('car1Placeholder').classList.remove('hidden');
        document.getElementById('car1Selected').classList.add('hidden');
        document.getElementById('car1Selected').innerHTML = '';
        
        document.getElementById('car2Placeholder').classList.remove('hidden');
        document.getElementById('car2Selected').classList.add('hidden');
        document.getElementById('car2Selected').innerHTML = '';
        
        // Reset results
        document.getElementById('comparisonResults').innerHTML = `
            <div class="text-center text-gray-500 py-12">
                <p class="text-xl">Select two cars to compare their specifications</p>
            </div>
        `;
    }
}

// Initialize comparison when page loads
document.addEventListener('DOMContentLoaded', () => {
    new CarComparison();
});
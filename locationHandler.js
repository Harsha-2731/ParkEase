// locationHandler.js

const mockCitiesData = {
    vizag: [
        { id: 101, name: "Beach Road Parking", addr: "RK Beach Zone", rate: 4.8, dist: "0.2 km", slots: 150, avail: 45, types: ["bike", "car"], price: 0.20, img: "hero_parking_night_2_1774454514694.png" },
        { id: 102, name: "City Center Parking", addr: "Daba Gardens", rate: 4.5, dist: "1.5 km", slots: 80, avail: 12, types: ["bike", "car", "heavy"], price: 0.15, img: "mall_parking_luxury_1774454405961.png" },
        { id: 103, name: "Rushikonda Hub", addr: "IT SEZ", rate: 4.6, dist: "5.0 km", slots: 200, avail: 100, types: ["bike", "car"], price: 0.10, img: "map_mockup_city_2_1774454560775.png" }
    ],
    chennai: [
        { id: 111, name: "Marina Beach Slots", addr: "Kamarajar Salai", rate: 4.4, dist: "0.5 km", slots: 300, avail: 150, types: ["bike", "car"], price: 0.25, img: "hero_parking_night_2_1774454514694.png" },
        { id: 112, name: "T-Nagar Central", addr: "Pondy Bazaar", rate: 4.9, dist: "1.2 km", slots: 120, avail: 5, types: ["bike"], price: 0.30, img: "mall_parking_luxury_1774454405961.png" }
    ],
    mumbai: [
        { id: 121, name: "Marine Drive Hub", addr: "Netaji Subhash Chandra Rd", rate: 4.9, dist: "0.2 km", slots: 50, avail: 2, types: ["car"], price: 0.80, img: "hero_parking_night_2_1774454514694.png" },
        { id: 122, name: "Bandra Kurla Cplx", addr: "BKC Road", rate: 4.7, dist: "3.5 km", slots: 500, avail: 200, types: ["bike", "car", "heavy"], price: 0.50, img: "mall_parking_luxury_1774454405961.png" }
    ]
};

// Inject mock data into the main parkData object dynamically
function ensureMockDataAvailable() {
    if (typeof parkData !== 'undefined') {
        Object.keys(mockCitiesData).forEach(city => {
            if (!parkData[city]) {
                parkData[city] = mockCitiesData[city];
            }
        });
    }
}

// Intercept window load to ensure data is injected before anything else
window.addEventListener('DOMContentLoaded', ensureMockDataAvailable);

// Button Action: Location Detection
function useCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude.toFixed(4);
            const lng = position.coords.longitude.toFixed(4);

            // Randomly pick a mock location for the UI feel
            const mockAreas = ["hyderabad", "bangalore", "bhimavaram", "vizag", "chennai", "mumbai"];
            const detectedArea = mockAreas[Math.floor(Math.random() * mockAreas.length)];

            alert(`You are currently at: ${lat}, ${lng} (Detected: ${detectedArea.toUpperCase()})`);

            // Update state and dashboard dynamically
            const citySelect = document.getElementById("app-city-select");
            if (citySelect) {
                citySelect.value = detectedArea;
            }
            if (typeof state !== 'undefined' && typeof renderHubs === 'function') {
                state.city = detectedArea;
                renderHubs();
            }
        }, (error) => {
            alert("Unable to retrieve your location. Error: " + error.message);
        });
    } else {
        alert("Geolocation is not supported by your browser");
    }
}

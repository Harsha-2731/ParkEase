// bookingEnhancements.js

// 📍 1. Current Location Detection
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude.toFixed(4);
            const lng = position.coords.longitude.toFixed(4);
            
            const locationInput = document.getElementById("locationInput");
            if (locationInput) {
                locationInput.value = `Lat: ${lat}, Lng: ${lng}`;
            }
        }, (error) => {
            alert("Unable to retrieve your location. Error: " + error.message);
        });
    } else {
        alert("Geolocation is not supported by your browser");
    }
}

// 🗺️ 2. Google Maps Navigation
function openNavigation(lat = 16.5449, lng = 81.5212) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, "_blank");
}

// 🧾 3. Booking Receipt UI
function showReceipt(location) {
    const slotEl = document.getElementById('final-slot');
    const slot = slotEl ? slotEl.innerText : ("SLOT-" + Math.floor(Math.random() * 1000));
    const time = new Date().toLocaleString();

    document.getElementById("rLocation").innerText = "Location: " + location;
    document.getElementById("rSlot").innerText = "Slot: " + slot;
    document.getElementById("rTime").innerText = "Time: " + time;

    document.getElementById("receipt").style.display = "block";

    // Save to localStorage
    localStorage.setItem("booking", JSON.stringify({ location, slot, time }));
}

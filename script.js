// ====== 🛰️ ENTERPRISE DATA MODEL ======
const parkData = {
    hyderabad: [
        { id: 1, name: "Gachibowli Parking Hub", addr: "Near DLF Cyber City", rate: 4.8, dist: "1.2 km", slots: 42, avail: 10, types: ["bike", "car"], price: 0.15, img: "hero_parking_night_2_1774454514694.png" },
        { id: 2, name: "Inorbit Mall Parking", addr: "Mindspace Road", rate: 4.5, dist: "0.8 km", slots: 120, avail: 45, types: ["bike", "car", "heavy"], price: 0.20, img: "mall_parking_luxury_1774454405961.png" },
        { id: 3, name: "Hitech City Metro Park", addr: "Metro Pillar 120", rate: 4.2, dist: "0.2 km", slots: 15, avail: 2, types: ["bike"], price: 0.10, img: "map_mockup_city_2_1774454560775.png" },
        { id: 4, name: "Forum Mall Parking", addr: "Kukatpally", rate: 4.4, dist: "2.1 km", slots: 60, avail: 15, types: ["bike", "car"], price: 0.18, img: "hero_parking_night_2_1774454514694.png" },
        { id: 5, name: "Airport Parking Zone", addr: "RGIA Terminal", rate: 4.6, dist: "5.5 km", slots: 200, avail: 80, types: ["bike", "car", "heavy"], price: 0.30, img: "mall_parking_luxury_1774454405961.png" },
        { id: 6, name: "Secunderabad Station", addr: "Railway Rd", rate: 4.3, dist: "3.2 km", slots: 80, avail: 12, types: ["bike", "car"], price: 0.12, img: "map_mockup_city_2_1774454560775.png" },
        { id: 7, name: "MGBS Bus Stand", addr: "Imlibun", rate: 4.1, dist: "1.8 km", slots: 55, avail: 5, types: ["bike", "car"], price: 0.10, img: "hero_parking_night_2_1774454514694.png" },
        { id: 8, name: "Cyber Towers Parking", addr: "Madhapur", rate: 4.7, dist: "2.7 km", slots: 90, avail: 30, types: ["bike", "car", "heavy"], price: 0.25, img: "mall_parking_luxury_1774454405961.png" },
        { id: 9, name: "City Center Complex", addr: "Banjara Hills", rate: 4.0, dist: "1.1 km", slots: 35, avail: 8, types: ["bike", "car"], price: 0.15, img: "map_mockup_city_2_1774454560775.png" },
        { id: 30, name: "Yashoda Hospital P1", addr: "Somajiguda", rate: 4.2, dist: "0.9 km", slots: 70, avail: 20, types: ["bike", "car"], price: 0.12, img: "hero_parking_night_2_1774454514694.png" }
    ],
    bangalore: [
        { id: 10, name: "MG Road Prime", addr: "Church Street Crossing", rate: 4.9, dist: "0.1 km", slots: 200, avail: 12, types: ["bike", "car"], price: 0.50, img: "hero_parking_night_2_1774454514694.png" },
        { id: 11, name: "Orion Mall Mega Terminal", addr: "Rajajinagar Mall Zone", rate: 4.6, dist: "2.4 km", slots: 1000, avail: 450, types: ["bike", "car", "heavy"], price: 0.30, img: "mall_parking_luxury_1774454405961.png" },
        { id: 12, name: "Koramangala 5th Block", addr: "Near Empire", rate: 4.5, dist: "0.5 km", slots: 150, avail: 20, types: ["bike", "car"], price: 0.25, img: "map_mockup_city_2_1774454560775.png" },
        { id: 13, name: "Indiranagar 100ft Rd", addr: "Metro Stn", rate: 4.7, dist: "0.2 km", slots: 80, avail: 10, types: ["bike", "car"], price: 0.35, img: "hero_parking_night_2_1774454514694.png" },
        { id: 14, name: "Phoenix Marketcity", addr: "Whitefield Rd", rate: 4.8, dist: "1.8 km", slots: 800, avail: 300, types: ["bike", "car", "heavy"], price: 0.20, img: "mall_parking_luxury_1774454405961.png" },
        { id: 15, name: "UB City Luxury Park", addr: "Vittal Mallya Rd", rate: 4.9, dist: "1.1 km", slots: 300, avail: 50, types: ["car"], price: 0.80, img: "map_mockup_city_2_1774454560775.png" },
        { id: 16, name: "Majestic Junction P1", addr: "KBS Stand", rate: 4.1, dist: "0.3 km", slots: 120, avail: 30, types: ["bike"], price: 0.05, img: "hero_parking_night_2_1774454514694.png" },
        { id: 17, name: "Brigade Road Multi", addr: "MG Rd Corner", rate: 4.6, dist: "0.4 km", slots: 200, avail: 15, types: ["bike", "car"], price: 0.45, img: "mall_parking_luxury_1774454405961.png" },
        { id: 18, name: "Bannerghatta Tech", addr: "IIM Area", rate: 4.4, dist: "2.5 km", slots: 400, avail: 120, types: ["bike", "car", "heavy"], price: 0.15, img: "map_mockup_city_2_1774454560775.png" },
        { id: 19, name: "Cubbon Park North", addr: "Kasturba Rd", rate: 4.3, dist: "0.8 km", slots: 50, avail: 5, types: ["bike", "car"], price: 0.30, img: "hero_parking_night_2_1774454514694.png" }
    ],
    bhimavaram: [
        { id: 20, name: "Local Plaza Hub", addr: "Main Road, Opp. Market", rate: 4.2, dist: "0.2 km", slots: 50, avail: 12, types: ["bike", "car"], price: 0.10, img: "hero_parking_night_2_1774454514694.png" },
        { id: 21, name: "SRKR Mall Parking", addr: "Chinna Amiram", rate: 4.8, dist: "0.8 km", slots: 120, avail: 45, types: ["bike", "car"], price: 0.15, img: "mall_parking_luxury_1774454405961.png" },
        { id: 22, name: "Railway Station Parking", addr: "Station Rd, Junction", rate: 4.0, dist: "0.1 km", slots: 80, avail: 5, types: ["bike"], price: 0.05, img: "map_mockup_city_2_1774454560775.png" },
        { id: 23, name: "Bus Stand Complex", addr: "RTC Colony", rate: 4.1, dist: "0.5 km", slots: 100, avail: 30, types: ["bike", "car"], price: 0.08, img: "hero_parking_night_2_1774454514694.png" },
        { id: 24, name: "Leela Mahal Cinema", addr: "Park Road", rate: 4.5, dist: "1.2 km", slots: 200, avail: 80, types: ["bike", "car"], price: 0.20, img: "mall_parking_luxury_1774454405961.png" },
        { id: 25, name: "Government Hospital", addr: "Gopalapuram", rate: 3.8, dist: "1.5 km", slots: 150, avail: 60, types: ["bike", "car", "heavy"], price: 0.12, img: "map_mockup_city_2_1774454560775.png" },
        { id: 26, name: "Market Yard Bulk", addr: "Undi Road", rate: 4.3, dist: "2.1 km", slots: 300, avail: 150, types: ["heavy"], price: 0.25, img: "hero_parking_night_2_1774454514694.png" },
        { id: 27, name: "Someshwara Temple", addr: "Pancharama Khetra", rate: 4.7, dist: "0.4 km", slots: 40, avail: 2, types: ["bike"], price: 0.02, img: "mall_parking_luxury_1774454405961.png" },
        { id: 28, name: "Kalla Beach Road", addr: "Coast Side", rate: 4.4, dist: "4.5 km", slots: 500, avail: 300, types: ["bike", "car", "heavy"], price: 0.10, img: "map_mockup_city_2_1774454560775.png" },
        { id: 29, name: "Shopping Square", addr: "Bazar St", rate: 4.6, dist: "0.3 km", slots: 25, avail: 8, types: ["bike", "car"], price: 0.25, img: "hero_parking_night_2_1774454514694.png" }
    ]
};

// ====== 🕹️ ENGINE STATE ======
let state = {
    view: 'landing', // landing, discovery, detail
    activeTab: 'discovery',
    city: 'hyderabad',
    currentHub: null,
    selectedSlot: null,
    vehicleType: 'car',
    isAdminVerified: false
};

// ====== 🚀 INITIALIZER ======
function init() {
    setupListeners();
    renderPopularLanding();
    syncUI();
}

// ====== 🏘️ LANDING RENDERER ======
function renderPopularLanding() {
    const carousel = document.getElementById('popular-carousel');
    // Mix data for high-impact landing
    const popular = [
        parkData.hyderabad[1],
        parkData.bangalore[1],
        parkData.bhimavaram[1],
        parkData.hyderabad[0]
    ];

    carousel.innerHTML = popular.map(hub => `
        <div class="popular-card" onclick="openAndGoToDetail(${hub.id}, '${Object.keys(parkData).find(key => parkData[key].includes(hub))}')">
            <div style="height: 180px; position: relative;">
                <img src="${hub.img}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px 16px 0 0;">
                <div style="position: absolute; bottom: 12px; left: 12px; background: #fff; padding: 4px 10px; border-radius: 6px; font-weight: 800; font-size: 0.8rem;">
                    ${hub.avail} Slots Left
                </div>
            </div>
            <div style="padding: 15px;">
                <h4 style="font-weight: 800; margin-bottom: 4px;">${hub.name}</h4>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: grey;">
                    <span><i class="fa-solid fa-location-arrow" style="font-size: 0.7rem;"></i> ${hub.dist}</span>
                    <span style="color: #60B246; font-weight: 700;">★ ${hub.rate}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function openAndGoToDetail(id, city) {
    state.city = city;
    navigateTo('discovery');
    openDetail(id);
}

// ====== 🧭 NAVIGATION ENGINE (SPA) ======
function navigateTo(view) {
    state.view = view;
    syncUI();
}

function switchTab(tab) {
    state.activeTab = tab;
    // Handle Detail Workspace separately as it's a sub-view of discovery usually
    if (tab === 'discovery') {
        document.getElementById('hub-detail-workspace').classList.add('hidden');
        document.getElementById('tab-discovery').classList.remove('hidden');
    }

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.getElementById(`nav-${tab === 'discovery' ? 'discovery' : tab === 'owner' ? 'owner' : ''}`)?.classList.add('active');

    syncUI();
}

function syncUI() {
    const landing = document.getElementById('landing-view');
    const mainApp = document.getElementById('main-app-view');

    landing.classList.toggle('hidden', state.view !== 'landing');
    mainApp.classList.toggle('hidden', state.view !== 'discovery');

    // Discovery Tabs
    if (state.view === 'discovery') {
        document.getElementById('tab-discovery').classList.toggle('hidden', state.activeTab !== 'discovery');
        document.getElementById('tab-owner').classList.toggle('hidden', state.activeTab !== 'owner');

        if (state.activeTab === 'discovery') renderHubs();
    }
}

// ====== 🏘️ RENDER ENGINE: HUBS ======
function renderHubs() {
    const grid = document.getElementById('hub-grid');
    const cityTitle = document.getElementById('city-title');
    const hubs = parkData[state.city] || [];

    cityTitle.textContent = `Parking in ${state.city.charAt(0).toUpperCase() + state.city.slice(1)}`;

    grid.innerHTML = hubs.map(hub => `
        <div class="hub-card-pro" onclick="openDetail(${hub.id})">
            <div class="hub-visual">
                <img src="${hub.img}" alt="${hub.name}">
                <div class="badge-verified">✓ Verified Hub</div>
            </div>
            <div style="padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <h3 style="font-weight: 800;">${hub.name}</h3>
                    <div style="background: #E6F6EC; color: #058527; padding: 2px 8px; border-radius: 4px; font-weight: 700; font-size: 0.8rem;">
                        ${hub.rate} <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 12px;">${hub.addr}</p>
                <div style="display: flex; gap: 15px; font-size: 0.85rem;">
                    <span><b>${hub.dist}</b> away</span>
                    <span style="color: ${hub.avail < 20 ? '#D21F1F' : '#058527'};"><b>${hub.avail}</b> slots left</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ====== 🅿️ SPATIAL ENGINE (WIDE) ======
function openDetail(id) {
    const allHubs = [].concat(...Object.values(parkData));
    state.currentHub = allHubs.find(h => h.id === id);
    state.selectedSlot = null;

    document.getElementById('tab-discovery').classList.add('hidden');
    document.getElementById('hub-detail-workspace').classList.remove('hidden');

    document.getElementById('detail-name').textContent = state.currentHub.name;
    document.getElementById('summary-empty').classList.remove('hidden');
    document.getElementById('summary-data').classList.add('hidden');

    renderSpatialLayout();
}

function renderSpatialLayout() {
    const canvas = document.getElementById('spatial-canvas');
    if (!canvas) return;
    canvas.innerHTML = '';

    const type = state.vehicleType || 'car';
    // Logic: small vehicles = more slots, heavy = fewer
    let slotCount = type === 'bike' ? 12 : (type === 'heavy' ? 6 : 8);

    const rows = ['A', 'B'];

    rows.forEach((row, idx) => {
        const tier = document.createElement('div');
        tier.className = 'parking-row';
        tier.setAttribute('data-label', `Row ${row}`);

        const slotsContainer = document.createElement('div');
        slotsContainer.style.display = 'flex';
        slotsContainer.style.gap = '12px';

        for (let i = 1; i <= slotCount; i++) {
            const slotId = `${row}-${i}`;
            const isOccupied = Math.random() < 0.2; // Mock occupancy
            const slot = document.createElement('div');
            slot.className = `slot ${type} ${isOccupied ? 'occupied' : ''}`;
            slot.innerHTML = `<span>${slotId}</span>`;

            if (!isOccupied) {
                slot.onclick = () => selectSlot(slotId, slot);
            }

            slotsContainer.appendChild(slot);
        }

        tier.appendChild(slotsContainer);
        canvas.appendChild(tier);

        if (idx < rows.length - 1) {
            const lane = document.createElement('div');
            lane.className = 'road-lane';
            canvas.appendChild(lane);
        }
    });
}

function selectSlot(id, el) {
    if (el.classList.contains('occupied')) return;
    document.querySelectorAll('.slot').forEach(s => s.classList.remove('selected'));
    el.classList.add('selected');
    state.selectedSlot = id;

    document.getElementById('summary-empty').classList.add('hidden');
    document.getElementById('summary-data').classList.remove('hidden');
    document.getElementById('sel-slot').textContent = id;
    document.getElementById('sel-price').textContent = `$${state.currentHub.price}/min`;
}

function selectVehicle(type, el) {
    state.vehicleType = type;
    // Update both landing and detail buttons if they exist
    document.querySelectorAll('.btn-pill, .vehicle-tab').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-type') === type || btn.textContent.toLowerCase().includes(type));
    });
    renderSpatialLayout();
}

// ====== 🏢 ADMIN/OWNER ENGINE ======
function handleOnboarding(e) {
    e.preventDefault();
    document.getElementById('owner-onboarding').classList.add('hidden');
    document.getElementById('owner-status').classList.remove('hidden');

    // Simulation: Verification takes time
    setTimeout(() => {
        console.log("Documents Submitted: Proof of Ownership Verification Active");
    }, 1000);
}

// ====== 🧭 UTILITIES ======
function setupListeners() {
    // City Switching
    document.getElementById('app-city-select').addEventListener('change', (e) => {
        state.city = e.target.value;
        renderHubs();
    });

    // Vehicle Switching
    document.querySelectorAll('.vehicle-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.vehicle-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.vehicleType = tab.dataset.type;
            renderSpatialLayout();
        });
    });

    // Universal Search
    document.getElementById('inner-search').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const hubs = parkData[state.city] || [];
        const filtered = hubs.filter(h => h.name.toLowerCase().includes(query));

        const grid = document.getElementById('hub-grid');
        grid.innerHTML = filtered.length > 0 ? filtered.map(h => `
            <div class="hub-card-pro" onclick="openDetail(${h.id})">
                <div class="hub-visual">
                    <img src="${h.img}" alt="${h.name}">
                    <div class="badge-verified">✓ Verified Hub</div>
                </div>
                <div style="padding: 20px;">
                    <h3 style="font-weight: 800;">${h.name}</h3>
                    <p style="color: var(--text-muted);">${h.addr}</p>
                    <div style="display: flex; justify-content: space-between; margin-top: 15px; border-top: 1px solid #eee; padding-top: 15px;">
                        <span style="color: var(--brand-primary); font-weight: 700;">${h.avail} slots</span>
                        <span style="font-weight: 500;">${h.dist} away</span>
                    </div>
                </div>
            </div>
        `).join('') : '<div style="grid-column: 1/-1; text-align: center; padding: 40px;">No hubs found matching your search.</div>';
    });
}

// Deleted duplicate functions

function proceedToBook() {
    const btn = document.querySelector('.btn-primary');
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Finalizing...';
    btn.disabled = true;

    setTimeout(() => {
        document.getElementById('final-slot').textContent = state.selectedSlot;
        document.getElementById('final-hub').textContent = state.currentHub.name;
        document.getElementById('success-view').classList.remove('hidden');

        if (typeof showReceipt === 'function') {
            showReceipt(state.currentHub.name);
        }
    }, 1500);
}

// Map Modal Logic
function openMapModal() {
    const hub = state.currentHub;
    const q = encodeURIComponent(`${hub.name} ${hub.addr} ${state.city} `);
    document.getElementById('gmap-embed').src = `https://maps.google.com/maps?q=${q}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
    document.getElementById('map-modal').classList.remove('hidden');
}

function closeMapModal() {
    document.getElementById('map-modal').classList.add('hidden');
}

// App Launch
init();

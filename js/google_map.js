function init() {
    // Initialize the map and set its view to a specific location and zoom level
    var map = L.map('map').setView([40.69847032728747, -73.9514422416687], 7);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker to the map
    var marker = L.marker([40.69847032728747, -73.9514422416687]).addTo(map);

    // Add popup to the marker
    marker.bindPopup('<b>Hello!</b><br>This is Brooklyn.').openPopup();
}

// Call the `init` function once the DOM is loaded
window.onload = init;

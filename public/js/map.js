mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map',
  style: "mapbox://styles/mapbox/streets-v12", // Fixed style name
  center: listing.geometry.coordinates, // [lng, lat]
  zoom: 8
});

// Create a popup with correct HTML syntax
const popup = new mapboxgl.Popup({ offset: 25 })
  .setHTML(`<h4>${listing.location}</h4><p>Exact location provided after booking.</p>`);

// Attach marker with popup
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(popup)
  .addTo(map);
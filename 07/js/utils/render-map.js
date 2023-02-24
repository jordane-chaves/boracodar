/**
 * @typedef {import('../utils/blocks.js').Block} Block
 * @param {Block[]} blocks
 */
export function renderMap(blocks) {
  const map = L.map('map').setView([-21.3964256,-46.0335235], 5.4);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);


  blocks.forEach(block => {
    const { latitude, longitude } = block.location;

    const marker = L.marker([latitude, longitude]).addTo(map);

    marker.bindPopup(`<b>${block.title}</b><p>${block.location.name}</p>`);
  });
}

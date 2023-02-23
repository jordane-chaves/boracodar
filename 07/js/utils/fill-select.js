/**
 * @typedef {import('../utils/blocks.js').Block} Block
 * @param {Block[]} blocks
 */
export function fillSelect(blocks) {
  const selectCity = document.getElementById('city');

  if (!selectCity) {
    return;
  }

  selectCity.innerHTML =
    '<option value="" disabled selected>Selecione uma cidade</option>';

  blocks.forEach(block => {
    const locationId = block.location.id;
    const locationName = block.location.name;

    if (!selectCity.innerHTML.includes(locationId)) {
      selectCity.innerHTML +=
        `<option value="${locationId}">${locationName}</option>`;
    }
  });
}

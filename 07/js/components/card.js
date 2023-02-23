/**
 * @typedef {import('../utils/blocks.js').Block} Block
 * @param {Block} props
 */
export function card(props) {
  return `
  <div class="card">
    <div class="cover">
      <img src="${props.cover}">
    </div>
    <div class="content">
      <h3>${props.title}</h3>
      <p>${props.description}</p>
      <div class="location">
      <i class="ph-map-pin"></i>
        <p>${props.location.name}</p>
      </div>
    </div>
  </div>
  `;
}

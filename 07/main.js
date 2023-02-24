import { blocks } from './js/utils/blocks.js';
import { renderCards } from './js/utils/render-cards.js';
import { fillSelect } from './js/utils/fill-select.js';
import { filterCardsByName } from './js/utils/filter-cards-by-name.js';
import { filterCardsByLocation } from './js/utils/filter-cards-by-location.js';
import { renderMap } from './js/utils/render-map.js';

const formElement = document.getElementById('search');
const views = document.getElementsByName('view-mode');

function onViewModeClick(event) {
  const viewInput = event.target;
  const isMapChecked = viewInput.checked && viewInput.value === 'map';

  if (isMapChecked) {
    renderMap(blocks);
  }
}

function onLoad() {
  fillSelect(blocks);
  renderCards(blocks);

  const cards = document.querySelectorAll('#cards .card');
  const searchField = document.getElementById('name');

  filterCardsByName(searchField, cards);
}

/**
 * @param {InputEvent} event
 */
function onSubmit(event) {
  event.preventDefault();

  const locationSelect = document.getElementById('city');
  const selectedLocationId = locationSelect.value;
  const cards = document.querySelectorAll('#cards .card');

  filterCardsByLocation(cards, selectedLocationId);

  locationSelect.value = '';
}

window.addEventListener('load', onLoad);
formElement.addEventListener('submit', onSubmit);
views.forEach(view => view.addEventListener('click', onViewModeClick));

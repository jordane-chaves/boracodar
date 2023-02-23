import { blocks } from './js/utils/blocks.js';
import { renderCards } from './js/utils/render-cards.js';
import { fillSelect } from './js/utils/fill-select.js';
import { filterCardsByName } from './js/utils/filter-cards-by-name.js';

const formElement = document.getElementById('search');

function onLoad() {
  fillSelect(blocks);
  renderCards(blocks);

  const cards = document.querySelectorAll('.cards .card');
  const searchField = document.getElementById('name');

  filterCardsByName(searchField, cards);
}

/**
 * @param {InputEvent} event
 */
function onSubmit(event) {
  event.preventDefault();

  const cityId = document.getElementById('city').value;

  if (!cityId) {
    return;
  }

  const blocksFiltered = blocks.filter(block => block.location.id === cityId);
  renderCards(blocksFiltered);
}

window.addEventListener('load', onLoad);
formElement.addEventListener('submit', onSubmit);

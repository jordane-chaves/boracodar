import { card } from '../components/card.js';

/**
 * @typedef {import('../utils/blocks.js').Block} Block
 * @param {Block[]} blocks
 */
export function renderCards(blocks) {
  const cardsElement = document.querySelector('#cards');

  if (!cardsElement) {
    return;
  }

  cardsElement.innerHTML = '';

  for (const block of blocks) {
    cardsElement.innerHTML += card(block);
  }
}

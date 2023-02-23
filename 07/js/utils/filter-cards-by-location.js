import { blocks } from './blocks.js';

/**
 * @param {HTMLElement[]} cards
 * @param {string} locationId
 */
export function filterCardsByLocation(cards, locationId) {
  const blocksFiltered = locationId
    ? blocks.filter(block => block.location.id === locationId)
    : blocks;

  const blocksTitle = blocksFiltered.map(block => block.title?.trim().toLocaleLowerCase());

  cards.forEach(card => {
    const cardTitle = card.querySelector('h3')?.textContent.trim().toLowerCase();
    const hasCardTitleInFilteredBlocks = blocksTitle.includes(cardTitle);

    card.hidden = !hasCardTitleInFilteredBlocks;
  });

}

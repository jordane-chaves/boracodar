/**
 * @param {HTMLInputElement} searchField
 * @param {HTMLDivElement[]} cards
 */
export function filterCardsByName(searchField, cards) {
  searchField.addEventListener('input', (event) => {
    const inputText = event.target.value?.trim().toLowerCase();

    if (!inputText) {
      for (const card of cards) {
        card.hidden = false;
      }

      return;
    }

    for (const card of cards) {
      const cardTitle = card.querySelector('h3');
      const title = cardTitle?.textContent.trim().toLowerCase();

      card.hidden = !title?.includes(inputText);
    }
  });
}

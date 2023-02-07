import { createCalculator } from "./calculator.js";
import { acceptedActions } from './accepted-actions.js';

const calculator = createCalculator(acceptedActions);

function handleClick(event) {
  const buttonClicked = event.target;
  const buttonId = buttonClicked.id;

  if (!buttonId) {
    return;
  }

  calculator.input(buttonId);
}

keyboard.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', handleClick);
});

function handleKeydown(event) {
  let keyPressed = event.key;
  calculator.input(keyPressed);
}

document.addEventListener('keydown', handleKeydown);

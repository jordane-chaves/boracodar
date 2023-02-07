export function createCalculator(acceptedActions) {
  const state = {
    currentValue: '0',
    expression: '',
    result: null,
  };

  function input(keyPressed) {
    const actionFunction = acceptedActions[keyPressed];

    if (!actionFunction) {
      return;
    }

    actionFunction(state, keyPressed);

    renderResult(state.result ?? state.currentValue);
    renderExpression(state.expression);
  }

  function renderResult(result) {
    const resultScreen = document.querySelector('#screen .result span');

    let value = result || result.length !== 0 ? result : '0';

    if (String(value).length > 10) {
      value = parseFloat(result).toExponential(3);
    }

    resultScreen.innerHTML = value;
  }

  function renderExpression(expression) {
    const expressionScreen = document.querySelector('#screen .expression');

    const expressionValue = expression || expression.length !== 0
      ? expression
      : '';

    expressionScreen.innerHTML = expressionValue;
  }

  return { input };
}

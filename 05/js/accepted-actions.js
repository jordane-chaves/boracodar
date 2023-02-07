export const acceptedActions = {
  '0': handleNumberClick,
  '1': handleNumberClick,
  '2': handleNumberClick,
  '3': handleNumberClick,
  '4': handleNumberClick,
  '5': handleNumberClick,
  '6': handleNumberClick,
  '7': handleNumberClick,
  '8': handleNumberClick,
  '9': handleNumberClick,
  '/': handleSignalClick,
  '*': handleSignalClick,
  '-': handleSignalClick,
  '+': handleSignalClick,
  '%': handlePercentage,
  ',': handleDot,
  '.': handleDot,
  '=': handleResult,
  'Enter': handleResult,
  'negate': handleNegate,
  'cancelEntry': handleCancelEntry,
  'Delete': handleCancelEntry,
  'clear': handleClear,
  'Backspace': handleClear,
  'Escape': handleClear,
};

function handleDot(state) {
  const valueEndsWithDot = state.currentValue.endsWith('.');
  const valueIncludesDot = state.currentValue.includes('.');

  if (!valueEndsWithDot && !valueIncludesDot) {
    const valueIsEmpty = state.currentValue.length === 0;
    state.currentValue = valueIsEmpty ? '0.' : `${state.currentValue}.`;
  }
}

function handleResult(state) {
  handleSignalClick(state, '');

  const result = eval(state.expression);

  state.result = result;
  state.expression = String(result);
}

function handlePercentage(state) {
  const lastNumberAndSignal = /(?<lastNumber>\d+)[\+\-]$/m;
  const expressionEndsWithSumOrSubtract = state.expression
    .match(lastNumberAndSignal);

  const decimalCurrentValue = parseFloat(state.currentValue) / 100;
  let percentage = decimalCurrentValue;

  if (expressionEndsWithSumOrSubtract) {
    const { lastNumber } = expressionEndsWithSumOrSubtract.groups;
    percentage = (decimalCurrentValue * lastNumber);
  }

  const percentageSanitized = parseFloat(percentage.toFixed(2));

  state.currentValue = `${percentageSanitized}`;
}

function handleNegate(state) {
  const isNoEmptyAndZero = state.currentValue.length !== 0 && state.currentValue !== '0';

  if (isNoEmptyAndZero) {
    state.currentValue = String(state.currentValue * -1);
  }
}

function handleClear(state) {
  state.currentValue = '0';
  state.expression = '';
  state.result = null;
}

function handleCancelEntry(state) {
  state.currentValue = '0';
}

function handleNumberClick(state, value) {
  const endsWithNumberOrDot = /[\d\.]$/gm;

  if (endsWithNumberOrDot.test(state.expression)) {
    state.expression = '';
    state.result = null;
  }

  state.currentValue === '0'
      ? state.currentValue = value
      : state.currentValue += value;
}

function handleSignalClick(state, signal) {
  const endsWithNumberOrDot = /[\d\.]$/gm;
  const canAddSignal = state.currentValue.length !== 0 || endsWithNumberOrDot.test(state.expression);

  const isNegativeValue = parseFloat(state.currentValue) < 0;

  const value = isNegativeValue
    ? `(${state.currentValue})`
    : `${state.currentValue}`;

  state.expression += canAddSignal ? `${value}${signal}` : `${value}`;

  state.currentValue = '';
  state.result = null;
}

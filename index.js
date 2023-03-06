const valeuInputNode = document.querySelector('.js-value-input');
const currencySelectorNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output');

function getInput() {
  return {
    rub: Number(valeuInputNode.value),
    currency: currencySelectorNode.value
  }
};

function render(result) {
  outputNode.innerText = result;
};

valeuInputNode.addEventListener('input', function() {
  const result = convert(getInput());

  render(result);
});

currencySelectorNode.addEventListener('change', function() {
  const result = convert(getInput());

  render(result);
});



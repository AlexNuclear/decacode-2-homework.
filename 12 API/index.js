

// Create new fridge API
const $form = document.getElementById('form');

$form.addEventListener('submit', event => {
  event.preventDefault();
  const $inputName = $form.querySelector('#food-name');
  const $inputAmount = $form.querySelector('#food-amount');
  const data = {
    title: $inputName.value,
    count: $inputAmount.value
  };

  fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
});

fetch('http://localhost:3000/items')
  .then((response) => response.json())
  .then((data) => console.log(data))

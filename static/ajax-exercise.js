'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
  .then(response => response.text())
  .then(responseData => {
    document.querySelector('#fortune-text').innerHTML = responseData;
  });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather.json?zipcode=${zipcode}`
  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(url)
  .then(response => response.json())
  .then(responseData => {
    
    document.querySelector('#weather-info').innerText = responseData['forecast'];
  });
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS







function orderMelons(evt) {
  evt.preventDefault();

  const formInputs = {
    melon: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value
  };


  fetch('/order-melon.json', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  });
    .then(response => response.json())
    .then(responseJson => {
      document.querySelector('#order-status').innerText = responseJson['msg'];
    })
  

  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);

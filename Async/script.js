'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// https://countries-api-836d.onrender.com/countries/
// https://restcountries.eu/rest/v2/
// https://restcountries.com/v2/name/console.log();

const renderCountryData = function (data, classname = '') {
  const flag = data.flags.svg;
  const countryName = data.name.common;
  // const region = data.region;
  const population = (data.population / 1000000).toFixed(2);
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;
  const html = `<article class="country ${classname}">
<img class="country__img" src="${flag}" />
<div class="country__data">
  <h3 class="country__name">${countryName}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${population}</p>
  <p class="country__row"><span>🗣️</span>${language}</p>
  <p class="country__row"><span>💵</span>${currency}</p>
</div>
</article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountryData(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;
    console.log(neighbour);

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();

    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountryData(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbour('bharat');
// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('russia');
// getCountryAndNeighbour('japan');
// getCountryAndNeighbour('lanka');
*/

// const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// const request = fetch('https://restcountries.com/v3.1/name/germany');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountryData(data[0]);
//     });
// };

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountryData(data[0]);
      const [neighbour] = data[0].borders;
      console.log(neighbour);
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response2 => response2.json())
    .then(data2 => renderCountryData(data2[0], 'neighbour'))
    .catch(err => alert(err));

  // .then(data2 => renderCountryData(data2[0], 'neighbour'));
};

btn.addEventListener('click', function () {
  getCountryData('CROATIA');
});

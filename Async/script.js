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
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
  btn.style.opacity = 0;
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

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found! (${response.status})`);
//       response.json();
//     })
//     .then(data => {
//       renderCountryData(data[0]);
//       const [neighbour] = data[0].borders;
//       console.log(neighbour);
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response2 => response2.json())
//     .then(data2 => renderCountryData(data2[0], 'neighbour'))
//     .catch(err => {
//       console.log(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });

//   // .then(data2 => renderCountryData(data2[0], 'neighbour'));
// };
// const getJSON = async function (url, errMsg = `Something went wrong!`) {
//   const response = await fetch(url);
//   if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
//   console.log(response.json());
//   response.json();
// };
const getJSON = function (url, errMsg = `Something went wrong!`) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
    // console.log(response.json(), response);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country not found!'
  )
    .then(data => {
      console.log(data);
      renderCountryData(data[0]);
      if (!data[0].borders) throw new Error('No Neighbour found!');
      const [neighbour] = data[0].borders;

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found!'
      );
    })
    .then(data2 => {
      console.log(data2);
      renderCountryData(data2[0], 'neighbour');
    })
    .catch(err => {
      console.log(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥 ${err.message} Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});

// getCountryData('wuifhwuifhwueif');

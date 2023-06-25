'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// https://countries-api-836d.onrender.com/countries/
// https://restcountries.eu/rest/v2/
// https://restcountries.com/v2/name/console.log();

const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v2/name/india');
request.send();
// console.log(this.responseText);

request.addEventListener('load', function () {
  console.log(this.responseText);
});

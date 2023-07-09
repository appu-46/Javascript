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
///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. 
Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/
/*

// GEOCODE API
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
    .then(response => response.json())
    .then(data => console.log(`You are in ${data.city}, ${data.country}`));
};

// GOOGLE GEOCODE API
// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}`
//   )
//     .then(response => console.log(response.json()))
//     .then(data => console.log(`You are in ${data.city}, ${data.country}`));
// };


// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
*/
/*
const whereAmI = function (lat, lng) {
  // Fetch the geocode data.
  fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
    .then(response => {
      // console.log(response.json());
      if (!response.ok) throw new Error(`Problem from geocode API`);
      return response.json();
    })
    .then(data => {
      // console.log(data);
      if (!data.city)
        throw new Error(
          `Invalid location! ${data.error.description} Error code : ${data.error.code}`
        );
      else if (data.distance.includes(`Throttled`))
        throw new Error(`Problem with Geocode API`);
      console.log(`You are in ${data.city},${data.country}`);
    })
    .catch(err => console.error(err));
};
setTimeout(() => {
  console.log(`Testing`);
  whereAmI(52.508, 13.381);
}, 1000);
setTimeout(() => {
  console.log(`Testing`);
  whereAmI(19.037, 72.873);
}, 2100);
setTimeout(() => {
  console.log(`Testing`);
  whereAmI(-33.933, 18.474);
}, 3100);
setTimeout(() => {
  console.log(`Testing`);
  whereAmI(-33.933, 18324.4744);
}, 4100);
*/
/*
console.log('Test start');
setTimeout(() => console.log(`0 sec timer`), 0);
Promise.resolve('Resolve promise 1').then(res => console.log(res));

Promise.resolve('Resolve promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log(`Test end.`);
*/

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery draw is happening... 🔮 `);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve(`You WIN 💰`);
    } else {
      reject(new Error(`You lost your money 💩`));
    }
  }, 500);
});
lotteryPromise.then(res => console.log(res)).
catch(err => console.error(err));
*/
/*
// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(1)
//   .then(() => {
//     console.log(`1 seconds passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`2 seconds passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`3 seconds passed`);
//     return wait(1);
//   });
*/

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

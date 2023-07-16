'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const errorContainer = document.querySelector('.error');

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
  errorContainer.insertAdjacentText('beforeend', '');
  errorContainer.style.opacity = 0;
};

const renderError = function (msg) {
  errorContainer.insertAdjacentText('beforeend', msg);
  errorContainer.style.opacity = 1;
  // btn.style.opacity = 0;
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
/*
const getJSON = async function (url, errMsg = `Something went wrong!`) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
  // console.log(response.json());
  return response.json();
};
*/
// const getJSON = function (url, errMsg = `Something went wrong!`) {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
//     // console.log(response.json(), response);
//     return response.json();
//   });
// };
/*
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
      console.error();
      `${err} 💥💥💥`;
      renderError(`💥 ${err.message} `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
*/
// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

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
      console.log(data);
      if (!data.city)
        throw new Error(
          `Invalid location! ${data.error.description} Error code : ${data.error.code}`
        );
      else if (data.distance.includes(`Throttled`))
        throw new Error(`Problem with Geocode API`);
      console.log(`You are in ${data.city},${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      // console.log(res.json());
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => {
      console.log(data);
      renderCountryData(data[0]);
    })
    .catch(err => console.error(err));
};

whereAmI(52.508, 13.381);

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

// getPosition().then(pos => console.log(pos.coords));
/*
const whereAmI = function (lat, lng) {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
    })

    .then(response => {
      // console.log(response.json());
      if (!response.ok) throw new Error(`Problem from geocode API`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (!data.city)
        throw new Error(
          `Invalid location! ${data.error.description} Error code : ${data.error.code}`
        );
      else if (data.distance.includes(`Throttled`))
        throw new Error(`Problem with Geocode API`);
      console.log(`You are in ${data.city},${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      // console.log(res.json());
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => {
      console.log(data);
      renderCountryData(data[0]);
    })
    .catch(err => console.error(err));
};
*/

// Ugnlier .then syntax

/*
const whereAmI = function (lat, lng) {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
    })
    .then(response => {
      // console.log(response.json());
      if (!response.ok) throw new Error(`Problem from geocode API`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (!data.city)
        throw new Error(
          `Invalid location! ${data.error.description} Error code : ${data.error.code}`
        );
      else if (data.distance.includes(`Throttled`))
        throw new Error(`Problem with Geocode API`);
      console.log(`You are in ${data.city},${data.country}`);

      getCountryData(data.country);
    });
  // return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
  // })
  // .then(res => {
  //   // console.log(res.json());
  //   if (!res.ok) throw new Error(`Country not found (${res.status})`);

  //   return res.json();
  // })
  // .then(data => {
  //   console.log(data);
  //   renderCountryData(data[0]);
  // })
  // .catch(err => console.error(err));
};

btn.addEventListener('click', whereAmI);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error(`Image not found!`));
    });
  });
};
let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log(`Image 1 loaded.`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log(`Image 2 loaded.`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log(`Image 3 loaded.`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/

// Testing out chess API
/*
const chessStats = function (username) {
  fetch(`https://api.chess.com/pub/player/${username}/stats`)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => console.log(data));
};

chessStats('appu_46');
chessStats('samayraina');
*/
/*
const whereAmI_async_await = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  // console.log(res.json());
  const data = await res.json();
  console.log(data);
};

whereAmI_async_await('germany');
*/

// Prettier async await syntax

const whereAmI = async function () {
  try {
    //  Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
    if (!resGeo.ok) throw new Error(`Problem from geocode API`);

    // Country data
    const dataGeo = await resGeo.json();

    console.log(dataGeo);
    if (!dataGeo.city)
      throw new Error(
        `Invalid location! ${dataGeo.error.description} Error code : ${dataGeo.error.code}`
      );
    else if (dataGeo.distance.includes(`Throttled`))
      throw new Error(
        `Geocode API throttled! 😐 \nTry again after some time!⌛\n`
      );
    console.log(`You are in ${dataGeo.city},${dataGeo.country}`);

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    const data = await res.json();
    console.log(data);
    renderCountryData(data[0]);
    // countriesContainer.style.opacity = 1;
  } catch (err) {
    console.error(`${err}`);
    renderError(err);
  }
};

btn.addEventListener('click', whereAmI);

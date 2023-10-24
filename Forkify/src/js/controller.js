import * as model from './model.js';
import recipeView from './views/recipeView.js';

// import icons from '../img/icons.svg'; //Parcel 1

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;

    // loading element
    recipeView.renderSpinner();

    // Loading recipe
    await model.loadRecipe(id);

    const { recipe } = model.state;

    // rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);

// Cleaner way to implment above
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

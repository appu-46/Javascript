import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchview.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import View from './views/view.js';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);
    if (!id) return;

    // Clearing for boot
    // recipeView._clear();

    // loading element
    recipeView.renderSpinner();

    // Loading recipe
    await model.loadRecipe(id);

    const { recipe } = model.state;

    // rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    // console.error(err);
    recipeView.renderError();
    // alert(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultView.renderSpinner();
    // 1 Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2 Load search results
    await model.loadSearchResults(query);

    // 3 Render results
    resultView.render(model.getSearchResultsPage(1));
    // 4 render initial pagination results
    paginationView.render(model.state.search);
    console.log(model.state.search);
    // resultView.render(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  // Render new results
  console.log(`Go to page: ${goToPage}`);
  resultView.render(model.getSearchResultsPage(goToPage));
  // render new pagination results
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings  (in state)
  model.updateServerings(newServings);
  // render the Updated the servings
  recipeView.render(model.state.recipe);
};

// Cleaner way to implment above
const init = function () {
  recipeView.addHandlerRenderer(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();

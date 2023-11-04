import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchview.js';
import resultView from './views/resultView.js';

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
    resultView.render(model.getSearchResultsPage());

    // resultView.render(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};

// Cleaner way to implment above
const init = function () {
  recipeView.addHandlerRenderer(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();

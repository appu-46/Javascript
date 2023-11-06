import View from './view.js';
import icons from '../../img/icons.svg'; //Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `<button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
      <span>Page ${curPage + 1}</span>
    </button>`;
    }
    // Page 1 and there are no pages
    if (curPage === numPages && numPages < 1) {
      return `<button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>`;
    }
    // last page
    if (curPage < numPages) {
      return `<button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>
    <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
      <span>Page ${curPage + 1}</span>
    </button>`;
    }
    // Other page
    if (this._data.page === 1 && numPages > 1) {
      return '';
    }
  }
}

export default new PaginationView();

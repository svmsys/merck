import BaseElements from './Base.elements';

class SearchResultsElements extends BaseElements {
  productNameLocator = 'figure > a[class="product-card__link-overlay"]';
  productPriceLocator =
    'figure > div[class^="product-card__info"] > div[class="product-card__animation_wrapper"] > div[class="product-card__price-wrapper"]';
  get pageHeader(): WebdriverIO.Element {
    return $('h1[id^="Results-for-"]');
  }

  get filtersDropDown(): WebdriverIO.Element {
    return $('#dropdown-btn');
  }

  get filters(): WebdriverIO.ElementArray {
    return $$('button[class^="dropdown__option"]');
  }

  get productCards(): WebdriverIO.ElementArray {
    return $$('div[class="product-card__body"]');
  }
}

export default new SearchResultsElements();

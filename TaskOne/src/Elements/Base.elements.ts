export default class BaseElements {
  get inputFieldSearch() {
    return $('input[id*="SearchInput"]');
  }
  get bag(): WebdriverIO.Element {
    return $('a[data-path="cart"]');
  }

  get buttonViewBag(): WebdriverIO.Element {
    return $('button[data-test="qa-cart-view"]');
  }
}

import BaseElements from './Base.elements';

class ProductElements extends BaseElements {
  get sizes(): WebdriverIO.ElementArray {
    return $$('label[class="css-xf3ahq"]');
  }
  get addToBag(): WebdriverIO.Element {
    return $('button[aria-label="Add to Bag"]');
  }
  get productDescription(): WebdriverIO.Element {
    return $('div[class^="description-preview"]');
  }
  get productPrice(): WebdriverIO.Element {
    return $('div[class^="product-price"]');
  }
}

export default new ProductElements();

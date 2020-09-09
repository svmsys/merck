import BasePage from './Base.page';
import Product from '../Classes/Product';
import ProductElements from '@src/Elements/Product.elements';

class ProductPage extends BasePage {
  /**
   * Ensure correct product is on the page
   * @param product
   */
  validateProduct(product: Product) {
    //Wait for loading product page
    ProductElements.productDescription.waitForDisplayed();
    // ProductElements.bag.waitForDisplayed();

    expect(ProductElements.productDescription.getText()).toContain(
      product.name,
      'Incorrect product name'
    );
  }

  /**
   * Add a product with specified size to a bag.
   * If size is not specified, first available will be used
   * @param sizeValue
   */
  addProductToBag(sizeValue?: string) {
    const bookedItemsCount = Number(
      ProductElements.bag.getAttribute('title').split(' ')[2]
    );
    let newBookedItemsCount = 0;

    const size = ProductElements.sizes.find(item => {
      return (
        (item.getText().trim() === sizeValue || !sizeValue) &&
        item.isClickable()
      );
    });

    if (size) {
      size.click();
      browser.keys(['Enter']);
      ProductElements.buttonViewBag.waitForDisplayed(); // wait for popup
      ProductElements.buttonViewBag.waitForDisplayed(10000, true); // wait for popup disappearing

      newBookedItemsCount = Number(
        ProductElements.bag.getAttribute('title').split(' ')[2]
      );
    }
    expect(newBookedItemsCount - bookedItemsCount).toBe(
      1,
      'Product is not added to the bag'
    );
  }
}
export default new ProductPage();

import SearchResultsElements from '@src/Elements/SearchResults.elements';
import BasePage from './Base.page';
import Product from '@src/Classes/Product';
import ProductPage from '@src/Pages/Product.page';

export enum SORT_BY {
  Featured = 'Featured',
  Newest = 'Newest',
  High_Low = 'Price: High-Low',
  Low_High = 'Price: Low-High'
}

class SearchResultsPage extends BasePage {
  /**
   * Check if search results are being displayed for a specific product category
   * @param product
   */
  isOpenedFor(product: string) {
    SearchResultsElements.pageHeader.waitForDisplayed();
    expect(SearchResultsElements.pageHeader.getText()).toContain(product);
  }

  /**
   * Filter search results
   * @param filterByValue
   */
  filterBy(filterByValue: string) {
    SearchResultsElements.filtersDropDown.waitForDisplayed();
    SearchResultsElements.filtersDropDown.click();

    SearchResultsElements.filters.forEach((filter: WebdriverIO.Element) => {
      if (filter.getAttribute('aria-label') === filterByValue) {
        filter.click();
        return;
      }
    });

    expect(SearchResultsElements.filtersDropDown.getText()).toContain(
      filterByValue
    );
    return this;
  }

  /**
   * Returns list of products on the page
   */
  get productsOnPage(): Product[] {
    let products: Product[] = [];
    if (SearchResultsElements.productCards.length > 0) {
      SearchResultsElements.productCards[0].waitForDisplayed();
    }
    SearchResultsElements.productCards.forEach(
      (webProduct: WebdriverIO.Element) => {
        const product: Product = new Product();
        const webProductLink = webProduct.$(
          SearchResultsElements.productNameLocator
        );
        const webProductPrice = webProduct.$(
          SearchResultsElements.productPriceLocator
        );
        product.link = webProductLink.getAttribute('href');
        product.name = webProductLink.getText();
        product.currentPrice = webProductPrice.getText().split(' ')[0];
        products.push(product);
      }
    );

    expect(products.length).toBe(SearchResultsElements.productCards.length);
    return products;
  }

  /**
   * Navigate to product page by its url.
   * If product is not specified, the 1st one on the page will be used.
   * Returns page object for the product specified
   * @param product
   */
  navigateToProduct(product?: Product) {
    product = product || this.productsOnPage[0];
    browser.url(product.link);
    ProductPage.validateProduct(product);
    return ProductPage;
  }
}
export default new SearchResultsPage();

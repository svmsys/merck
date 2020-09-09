import Product from '@src/Classes/Product';
import SearchResultsPage, { SORT_BY } from '@src/Pages/SearchResults.page';
import HomePage from '../Pages/Home.page';

/** @author Sergei Malodushev
 * Test 01
 * **************
 * 1) Open Home page
 * 2) Search for specified product category
 * 3) Filter products by cost
 * 4) Add the 1st most expensive product to the shopping cart
 * 5) Add the 2d most expensive product to the shopping cart
 *
 **/

describe('Products:', () => {
  const productCategory: string = "men's boots";
  let products: Product[];

  it('Get list of filtered and sorted products', () => {
    products = HomePage.searchForProduct(productCategory).filterBy(
      SORT_BY.High_Low
    ).productsOnPage;
  });

  describe('Add to the shopping cart: ', () => {
    it('The 1st most expensive product', () => {
      SearchResultsPage.navigateToProduct(products[0]).addProductToBag();
    });

    it('The 2d most expensive product', () => {
      SearchResultsPage.navigateToProduct(products[1]).addProductToBag();
    });
  });
});

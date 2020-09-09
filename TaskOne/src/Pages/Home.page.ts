import HomeElements from '@src/Elements/Home.elements';
import BasePage from './Base.page';
import SearchResultsPage from './SearchResults.page';

class HomePage extends BasePage {
  /**
   * Search products by using search input field
   * @param product value to be searched for
   */
  searchForProduct(product: string) {
    HomeElements.inputFieldSearch.setValue(product);
    browser.keys(['Enter', 'Enter']);

    SearchResultsPage.isOpenedFor(product);
    return SearchResultsPage;
  }
}
export default new HomePage();

export default class BasePage {
  title: string;
  constructor() {
    this.title = 'Base Page';
  }

  open(path?: string) {
    browser.url(path || '/');
    return this;
  }

  swithToOpenedWindow(): string {
    let window: string = browser.getWindowHandle();
    for (window of browser.getWindowHandles()) {
      browser.switchToWindow(window);
    }
    return window;
  }
}

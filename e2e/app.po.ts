import { browser, element, by } from 'protractor';

export class WoopaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wp-root h1')).getText();
  }
}

import { browser, element, by } from 'protractor';

export class CashFlowPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jfr-root h1')).getText();
  }
}

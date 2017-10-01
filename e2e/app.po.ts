import { $$, browser } from 'protractor'

export class MongooseContinuedPage {
  navigateTo() {
    return browser.get('/')
  }

  getNavbarElement(n) {
    return $$('app-root a').get(n).getText()
  }

}

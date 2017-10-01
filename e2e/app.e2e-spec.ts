import { MongooseContinuedPage } from './app.po'

describe('Mongoose Continued', () => {
  let page: MongooseContinuedPage

  beforeEach(() => {
    page = new MongooseContinuedPage()
  })

  it('should display the navbar correctly', () => {
    page.navigateTo()
    expect(page.getNavbarElement(0)).toEqual('Storage Log Demo')
    expect(page.getNavbarElement(1)).toEqual('Home')
    expect(page.getNavbarElement(2)).toEqual('Search')
    expect(page.getNavbarElement(3)).toEqual('About')
  })
})

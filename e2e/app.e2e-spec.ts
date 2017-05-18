import { Clase4Page } from './app.po';

describe('clase4 App', () => {
  let page: Clase4Page;

  beforeEach(() => {
    page = new Clase4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

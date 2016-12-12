import { WoopaPage } from './app.po';

describe('woopa App', function() {
  let page: WoopaPage;

  beforeEach(() => {
    page = new WoopaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wp works!');
  });
});

import { TvshowWebPage } from './app.po';

describe('tvshow-web App', function() {
  let page: TvshowWebPage;

  beforeEach(() => {
    page = new TvshowWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { LocalBulletinBoardPage } from './app.po';

describe('local-bulletin-board App', function() {
  let page: LocalBulletinBoardPage;

  beforeEach(() => {
    page = new LocalBulletinBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

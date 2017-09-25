import { Yeungbri.Github.IoPage } from './app.po';

describe('yeungbri.github.io App', () => {
  let page: Yeungbri.Github.IoPage;

  beforeEach(() => {
    page = new Yeungbri.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

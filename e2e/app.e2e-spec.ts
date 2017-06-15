import { JonbaglingPage } from './app.po';

describe('jonbagling App', () => {
  let page: JonbaglingPage;

  beforeEach(() => {
    page = new JonbaglingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

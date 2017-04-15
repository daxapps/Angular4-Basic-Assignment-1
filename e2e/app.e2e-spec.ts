import { BasicAssignment1Page } from './app.po';

describe('basic-assignment1 App', () => {
  let page: BasicAssignment1Page;

  beforeEach(() => {
    page = new BasicAssignment1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

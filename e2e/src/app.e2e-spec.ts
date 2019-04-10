import { AppPage } from "./app.po";
import { browser, logging } from "protractor";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should contain Users", () => {
    page.navigateTo();
    expect(page.getUsersListTitleText()).toContain("Users");
  });

  it("should contain Albums", () => {
    page.navigateTo();
    page.getUserListItem().click();
    expect(page.getAlbumsListTitleText()).toContain("Albums");
  });

  it("should contain Photos", () => {
    page.navigateTo();
    page.getUserListItem().click();
    page.getAlbumListItem().click();
    expect(page.getAlbumsListTitleText()).toContain("Albums");
    expect(page.getPhotoListItem()).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});

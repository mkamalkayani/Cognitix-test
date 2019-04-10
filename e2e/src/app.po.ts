import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css("app-root h1")).getText() as Promise<string>;
  }

  getUsersListTitleText() {
    return element(by.css("app-users-list h2")).getText() as Promise<string>;
  }

  getUserListItem() {
    return element(by.css("app-users-list li"));
  }

  getAlbumsListTitleText() {
    return element(by.css("app-albums-list h2")).getText() as Promise<string>;
  }

  getAlbumListItem() {
    return element(by.css("app-albums-list li"));
  }

  getPhotosListTitleText() {
    return element(by.css("app-photos-list h2")).getText() as Promise<string>;
  }

  getPhotoListItem() {
    return element(by.css("app-photos-list img"));
  }
}

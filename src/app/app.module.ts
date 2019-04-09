import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { PhotosListComponent } from './photos-list/photos-list.component';

@NgModule({
  declarations: [AppComponent, UsersListComponent, AlbumsListComponent, PhotosListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

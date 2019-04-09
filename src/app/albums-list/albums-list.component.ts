import { Album } from "./../Types/Album";
import { AlbumsService } from "./../albums.service";
import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { User } from "../Types/User";

@Component({
  selector: "app-albums-list",
  templateUrl: "./albums-list.component.html",
  styleUrls: ["./albums-list.component.css"]
})
export class AlbumsListComponent implements OnInit {
  @Input() selectedUser: User;
  albums: Album[];
  selectedAlbum: Album;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {}
  ngOnChanges() {
    this.getAlbums();
  }

  onSelect(album: Album): void {
    this.selectedAlbum = album;
  }
  getAlbums() {
    if (this.selectedUser !== undefined) {
      this.albumsService.getAlbums(this.selectedUser.id).subscribe(data => {
        this.albums = data;
      });
    }
  }
}

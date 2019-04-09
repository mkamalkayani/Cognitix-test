import { Photo } from "./../Types/Photo";
import { PhotosService } from "./../photos.service";
import { Album } from "./../Types/Album";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-photos-list",
  templateUrl: "./photos-list.component.html",
  styleUrls: ["./photos-list.component.css"]
})
export class PhotosListComponent implements OnInit {
  @Input() selectedAlbum: Album;
  photos: Photo[];

  constructor(private photoService: PhotosService) {}

  ngOnInit() {}
  ngOnChanges() {
    this.getPhotos();
  }
  getPhotos() {
    if (this.selectedAlbum !== undefined) {
      this.photoService.getPhotos(this.selectedAlbum.id).subscribe(data => {
        this.photos = data;
      });
    }
  }
}

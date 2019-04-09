import { Photo } from "./Types/Photo";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  photosUrl(albumId: number): string {
    return `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
  }

  getPhotos(userId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosUrl(userId));
  }
}

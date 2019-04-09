import { Album } from "./Types/Album";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  albumsUrl(userId: number): string {
    return `https://jsonplaceholder.typicode.com/users/${userId}/albums`;
  }

  getAlbums(userId: number): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl(userId));
  }
}

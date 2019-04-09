import { Component, OnInit, Input } from "@angular/core";
import { User } from "../Types/User";

@Component({
  selector: "app-albums-list",
  templateUrl: "./albums-list.component.html",
  styleUrls: ["./albums-list.component.css"]
})
export class AlbumsListComponent implements OnInit {
  @Input() selectedUser: User;

  constructor() {}

  ngOnInit() {}
}

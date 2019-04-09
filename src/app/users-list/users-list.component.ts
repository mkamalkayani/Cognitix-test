import { User } from "./../Types/User";
import { UserService } from "./../user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => (this.users = data));
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}

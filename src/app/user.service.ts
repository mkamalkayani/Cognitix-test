import { User } from "./Types/User";
import { MockUsers } from "./mock-users";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  getUsers(): User[] {
    return MockUsers;
  }
}

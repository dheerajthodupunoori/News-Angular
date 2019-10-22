import { users } from "../Config/user-mock-data";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public users: any[] = users;

  constructor() {}

  getAllUsers() {
    return users;
  }
}

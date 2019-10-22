import { Injectable } from "@angular/core";
import { User } from "./user";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  public isLoggedIn: Boolean;
  constructor() {}

  validateUser(user: User) {
    if (user.UserName === "user" && user.Password === "user") {
      user.role = "user";
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", user.UserName);
      this.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
      return true;
    } else if (user.UserName === "admin" && user.Password === "admin") {
      user.role = "Admin";
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", user.UserName);
      localStorage.setItem("role", user.role);
      this.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    localStorage.clear();
  }
  isUserLoggedIn() {
    if (localStorage.getItem("isLoggedIn") === null) {
      return false;
    }
    return true;
  }
}

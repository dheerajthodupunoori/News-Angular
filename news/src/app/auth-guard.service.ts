import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRoute,
  RoutesRecognized
} from "@angular/router";
import { AuthService } from "./auth.service";
@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(
    private _authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  canActivate(): boolean {
    if (this._authService.isUserLoggedIn()) {
      if (
        this.route.snapshot.firstChild.data.roles ===
        localStorage.getItem("role")
      ) {
        this.router.navigate(["/admin"]);
      }
      return true;
    }
    return false;
  }
}
